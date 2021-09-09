$(document).ready(function () {
	//Анимация заголовка в блоке Рейтинг
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#rating-title-animate", 2, { right: -40, opacity: 0 }, { right: 40, opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-steps-animate", duration: 300, offset: -250 })
		.setTween(tween) // add indicators (requires plugin)
		.addTo(controller);

	//шаг первый
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#step-1", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.8)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-steps-animate", duration: 900, offset: -250 })
		.setTween(tween)
		.addTo(controller);

	//шаг второй
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#step-2", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-steps-animate", duration: 900, offset: -150 })
		.setTween(tween)
		.addTo(controller);

	//шаг третий
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#step-3", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-steps-animate", duration: 800, offset: 350 })
		.setTween(tween)
		.addTo(controller);
	//Картинка 2 слева направо
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#b3", 2, { right: 700 }, { right: -300, ease: Back.ease }, 0.8)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-steps-animate", duration: 650, offset: 300 })
		.setTween(tween)
		.addTo(controller);

	//Заголовок статистики
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#stat-title-animate", 1, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-stat-animate", duration: 400, offset: -250 })
		.setTween(tween)
		.addTo(controller);

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
	var tween = TweenMax.staggerFromTo("#card-price-1", 1, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 500, offset: 150 })
		.setTween(tween)
		.addTo(controller);

	//Карточка тарифа 2
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#card-price-2", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 550, offset: 400 })
		.setTween(tween)
		.addTo(controller);

	//Карточка тарифа 3
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#card-price-3", 3, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 600, offset: 650 })
		.setTween(tween)
		.addTo(controller);

	//Анимация заголовка в блоке Тарифы/результат
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#result-title", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 500, offset: 1300 })
		.setTween(tween)
		.addTo(controller);

	//Анимация заголовка в блоке Тарифы/что вы получите 
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#result-block", 2, { opacity: 0 }, { opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-price-animate", duration: 500, offset: 1350 })
		.setTween(tween)
		.addTo(controller);

	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#stat-img-1", 2, { x: -500 }, { x: 0, ease: Back.ease }, 0.8)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-stat-animate", duration: 450, offset: -50 })
		.setTween(tween)
		.addTo(controller);
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#stat-img-2", 2, { x: -500 }, { x: 0, ease: Back.ease }, 0.8)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-stat-animate", duration: 450, offset: 100 })
		.setTween(tween)
		.addTo(controller);
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#stat-img-3", 2, { x: -500 }, { x: 0, ease: Back.ease }, 0.8)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-stat-animate", duration: 450, offset: 600 })
		.setTween(tween)
		.addTo(controller);

});

