$(document).ready(function () {
	//Анимация заголовка в блоке Тарифы
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#title-price", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 400, offset: -150 })
		.setTween(tween)
		.addTo(controller);
	//Анимация подзаголовка в блоке Тарифы
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#subtitle-price", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 400, offset: -130 })
		.setTween(tween)
		.addTo(controller);

	//Карточка тарифа 1
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#card-price-1", 1, { top: 100 }, { top: 0, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 400, offset: 100 })
		.setTween(tween)
		.addTo(controller);

	//Карточка тарифа 2
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#card-price-2", 1, { top: 200 }, { top: 0, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 450, offset: 100 })
		.setTween(tween)
		.addTo(controller);

	//Карточка тарифа 3
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#card-price-3", 1, { top: 300 }, { top: 0, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 500, offset: 100 })
		.setTween(tween)
		.addTo(controller);

	//Анимация заголовка в блоке Тарифы/результат
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#result-title", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 500, offset: 450 })
		.setTween(tween)
		.addTo(controller);

	//Анимация заголовка в блоке Тарифы/что вы получите 
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#result-block", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 500, offset: 550 })
		.setTween(tween)
		.addTo(controller);

	var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });
	new ScrollMagic.Scene({ triggerElement: "#bg-parallax" })
		.setTween("#parallax", { y: "-50%", ease: Linear.easeNone })
		.addTo(controller);

});