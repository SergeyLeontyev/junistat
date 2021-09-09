$(document).ready(function () {
	var link = $('.menu-burger');
	var link_active = $('menu-burger-active');
	var menu = $('.menu-mobile');
	var menuNav = $('.menu-nav-mobile li a');
	var lang = $('.menu-lang li');//Языковая панель
	var langEng = $('.menu-lang-box');//Языковая панель


	link.click(function () {
		link.toggleClass('menu-burger-active');
		menu.toggleClass('menu-mobile-active');
	});
	menuNav.click(function () {
		link.removeClass('menu-burger-active');
		menu.removeClass('menu-mobile-active');
	});
	lang.click(function () {
		langEng.toggleClass('menu-lang-box-active');
		$(document).mouseup('click', function (e) {
			var container = $('.menu-lang-box');
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				container.removeClass('menu-lang-box-active');
			}
		});
	});
});