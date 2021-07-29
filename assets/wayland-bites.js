window.addEventListener('load', function() {
  var table = document.querySelector('table.wayland-bites-table');
  if (table) {
    // section collapsing button handler
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

    // merge identical cells
    var cells = table.querySelectorAll('td');
    var baseCell = cells[0];
    for (var i = 1; i < cells.length; i ++) {
      var nextCell = baseCell.nextSibling;

      if (
        nextCell &&
        nextCell.tagName === 'TD' &&
        baseCell.className === nextCell.className &&
        baseCell.innerHTML === nextCell.innerHTML
      ) {
        var curColspan = parseInt(baseCell.getAttribute('colspan'));
        if (!curColspan || isNaN(curColspan)) {
          curColspan = 1;
        }

        var addColspan = parseInt(nextCell.getAttribute('colspan'));
        if (addColspan && !isNaN(addColspan)) {
          curColspan += addColspan;
          baseCell.setAttribute('colspan', curColspan);
        }

        nextCell.parentNode.removeChild(nextCell);
      } else {
        baseCell = cells[i];
      }
    }
  }
});
