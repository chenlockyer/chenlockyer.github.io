// Toggle abstract visibility
function toggleBlock(id) {
  var el = document.getElementById(id);
  if (el) {
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
  }
}

// Toggle bibtex visibility
function togglebib(id) {
  var pre = document.querySelector('#' + id + ' pre');
  if (pre) {
    pre.style.display = (pre.style.display === 'none' || pre.style.display === '') ? 'block' : 'none';
  }
}
