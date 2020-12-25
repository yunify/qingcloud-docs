  var menuTitle = document.querySelectorAll('.menu__title');
  var modal = document.getElementById("myModal");
  var drawer = document.getElementById('myDrawer');

  var closeDrawer = function () {
    setTimeout(function () {
      modal.style.opacity = 0;
      drawer.style.left = '-100%';
      modal.style.left = '-100%';
    }, 250);
  }

  if(menuTitle.length == 0){
	$('#td-sidebar-menu').prev('div').remove();
	$('#td-sidebar-menu').remove();
  }

  menuTitle ? 
  menuTitle.forEach(function(elem) {
    elem.onclick = function() {
      closeDrawer();
      localStorage.setItem('isDrawerOpen', 'false');
    }
  }) : null;
  document.querySelectorAll('.menu__title--collapse').forEach(function(elem) {
      elem.addEventListener('click', function (e) {
        var content = this.nextElementSibling;
        var menuTitleIcon = this.querySelector('.menu__title--icon');
        if (!content) {
          return null;
        }

        var parent = elem.parentNode;
        while (parent.classList.contains('menu__list') && parent.classList.contains('active')) {
          parent.style.maxHeight = "100%";
          parent = parent.parentNode;
        }

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          content.classList.remove('active');
          menuTitleIcon.classList.add('right');
          
          
            menuTitleIcon.classList.remove('down');
          
        } else {
		  if(content.scrollHeight > 0){
			content.style.maxHeight = content.scrollHeight + "px";
		  }else{
			content.style.maxHeight = "100%";
		  }
          content.classList.add('active');
          menuTitleIcon.classList.remove('right');
          
          
            menuTitleIcon.classList.add('down');
          
        }
      });
    });

$('.menu__title--collapse.active').trigger('click');