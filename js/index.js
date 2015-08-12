(function() {
  function addInPageNavigation (target) {
    var target = $('aside.usa-side_nav');
    var h2 = $('h2');
    var ul = $('<ul></ul>');

    for (var i=0; i<h2.length; i++) {
      var t     = h2[i],
          id    = h2[i].id,
          text  = t.textContent,
          li    = $('<li><a href="#' + id + '">' + text + '</a></li>');

      ul.append(li);
    }

    target.append(ul);
  }

  addInPageNavigation();
  
})();
