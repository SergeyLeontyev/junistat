$(document).ready(function () {
	//Заголовок статистики
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#stat-title-animate", 1, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-stat-animate", duration: 400, offset: -250 })
		.setTween(tween)
		.addTo(controller);
	//Картинка статистики 1
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#stat-img-1", 1, { bottom: -100 }, { bottom: 0, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-stat-animate", duration: 250, offset: -200 })
		.setTween(tween)
		.addTo(controller);
	//Картинка статистики 2
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#stat-img-2", 1, { bottom: -150 }, { bottom: 0, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-stat-animate", duration: 250, offset: -50 })
		.setTween(tween)
		.addTo(controller);
	//Картинка статистики 3
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#stat-img-3", 1, { bottom: -200 }, { bottom: 0, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-stat-animate", duration: 250, offset: 100 })
		.setTween(tween)
		.addTo(controller);
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#stat-btn-animate", 1, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-stat-animate", duration: 400, offset: 400 })
		.setTween(tween)
		.addTo(controller);
});
