/* 陈洛嘉 · 个人主页
   两件事：
   1) 进场：每节的块依次上升淡入，只播一次（reduced-motion 下不播）
   2) 项目账本的侧预览：跟随被悬停的行垂直对齐
   没有依赖，没有构建。

   安全约定（重要）：
   - 只有 JS 真的跑起来，才会给元素加 .rise（初始不可见）。
     JS 报错、被禁用、或 IntersectionObserver 不存在时，内容原样可见。
   - 每块有 1.2 秒兜底定时器：即使观察器没触发，也会自己显出来。
   - 观察的是「块」，不是块里的每个孩子，避免嵌套元素各播一遍。 */

(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- 1. 进场 ---------- */
  var TARGETS = [
    '.hero-title', '.hero-lead', '.facts', '.hero-act',
    '.hero-media',
    '.sec-h', '.cols',
    '.reel-item',
    '.ledger', '.ledger-more',
    '.proof-lead', '.proof-item',
    '.studio-grid',
    '.tail-grid',
    '.page-title', '.page-lead',
    '.proj-hero', '.proj-hero-shot',
    '.pcard',
    '.studio-block',
    '.cv-sec', '.cv-feat', '.cv-item', '.cv-list', '.cv-skills', '.cv-awards', '.cv-contact',
    '.post-content > h2', '.post-content > p', '.post-content > figure', '.post-content > blockquote', '.post-content > table',
    '.arch-head', '.arch-hero', '.arch-year', '.arch-row', '.arch-thumb',
    '.link-group', '.link-list li',
    '.cv-sec', '.cv-feat'
  ];

  function entrance() {
    if (reduce.matches) return;
    if (!('IntersectionObserver' in window)) return;

    var nodes = document.querySelectorAll(TARGETS.join(','));
    if (!nodes.length) return;

    var items = [].slice.call(nodes);

    var reveal = function (el, delay) {
      el.style.transition =
        'opacity 480ms cubic-bezier(.22,1,.36,1) ' + delay + 'ms, ' +
        'transform 480ms cubic-bezier(.22,1,.36,1) ' + delay + 'ms';
      el.classList.add('is-in');
    };

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var idx = items.indexOf(el);
        reveal(el, (idx % 6) * 60);
        clearTimeout(el._fallback);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.01 });

    items.forEach(function (el) {
      el.classList.add('rise');
      // 兜底：万一观察器没触发（极长页面、渲染异常），1.2s 后自己显出来
      el._fallback = setTimeout(function () { reveal(el, 0); }, 1200);
      io.observe(el);
    });
  }

  /* ---------- 2. 侧预览跟随行的纵向位置 ---------- */
  function ledgerPreview() {
    var rows = document.querySelectorAll('.ledger-row');
    if (!rows.length) return;

    [].forEach.call(rows, function (row) {
      var shot = row.querySelector('.ledger-shot');
      if (!shot) return;

      var place = function () {
        var cs = window.getComputedStyle(shot);
        if (cs.position !== 'absolute') {
          shot.style.top = '';
          return;
        }
        var rowTop = row.offsetTop;
        var shotH = shot.offsetHeight || 0;
        // 别让预览掉出账本底部
        var list = row.parentNode;
        var maxTop = (list ? list.offsetHeight : 0) - shotH;
        shot.style.top = Math.max(0, Math.min(rowTop, maxTop)) + 'px';
      };

      row.addEventListener('mouseenter', place);
      row.addEventListener('focusin', place);
    });

    window.addEventListener('resize', function () {
      [].forEach.call(rows, function (row) {
        var shot = row.querySelector('.ledger-shot');
        if (shot) shot.style.top = '';
      });
    }, { passive: true });
  }

  function init() {
    try { entrance(); } catch (e) { /* 进场失败不影响内容可见 */ }
    try { ledgerPreview(); } catch (e) { }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
