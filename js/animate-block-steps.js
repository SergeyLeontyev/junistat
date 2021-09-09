$(document).ready(function () {
	//Анимация заголовка в блоке Рейтинг
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#rating-title-animate", 2, { right: -40, opacity: 0 }, { right: 40, opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-steps-animate", duration: 300, offset: -250 })
		.setTween(tween) // add indicators (requires plugin)
		.addTo(controller);

	//Картинка 1 справа налево
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#b2", 2, { right: -40, opacity: 0 }, { right: 40, opacity: 1, ease: Back.ease }, 0.15)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-steps-animate", duration: 300, offset: 50 })
		.setTween(tween) // add indicators (requires plugin)
		.addTo(controller);

	//Картинка 2 слуве направо
	var controller = new ScrollMagic.Controller();
	var tween = TweenMax.staggerFromTo("#b3", 2, { right: 650 }, { right: -40, ease: Back.ease }, 0.8)
	var scene = new ScrollMagic.Scene({ triggerElement: "#block-steps-animate", duration: 450, offset: 400 })
		.setTween(tween)
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
});