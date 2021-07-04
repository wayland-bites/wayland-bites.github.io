window.addEventListener('load', function() {
  var table = document.querySelector('table.wayland-bites-table');
  if (table) {
    table.addEventListener('click', function(e) {
      if (e.target.tagName == 'BUTTON' &&
          e.target.classList &&
          e.target.classList.contains('group-collapse-button')) {
        var button = e.target;

        var collapsed = button.classList.contains('collapsed');

        var row = button.parentNode;
        while (row && row.tagName != 'TR') {
          row = row.parentNode;
        }
        if (!row) {
          // uh oh, where is the row?
          return;
        }

        // display loop
        row = row.nextSibling;
        while (row && !row.classList.contains('intra-tr')) {
          row.style.display = collapsed ? '': 'none';
          row = row.nextSibling;
        }

        if (collapsed) {
          button.innerHTML = '-';
          button.classList.remove('collapsed');
        } else {
          button.innerHTML = '+';
          button.classList.add('collapsed');
        }
      }
    });
  }
});
