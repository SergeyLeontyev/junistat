$(document).ready(function () {
	//Анимация заголовка в блоке Тарифы
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#trainers-title", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#trainers-animate", duration: 400, offset: -350 })
		.setTween(tween)
		.addTo(controller);
});