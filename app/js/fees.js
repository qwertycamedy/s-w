var slider = document.getElementById('myRangeOne');
var output = document.getElementById('valueOne');

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

var sliderTwo = document.getElementById('myRangeTwo');
var outputTwo = document.getElementById('valueTwo');

outputTwo.innerHTML = sliderTwo.value;

sliderTwo.oninput = function () {
    outputTwo.innerHTML = this.value;
}




var cardThTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.fees__cards',
        start: 'start bottom',
    }
});
cardThTl.to('.fees__cardOne', { duration: .3, scaleY: 1, });
cardThTl.fromTo('.fees__card-innerOne', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardThTl.to('.fees__cardTwo', { duration: .3, scaleY: 1, });
cardThTl.fromTo('.fees__card-innerTwo', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardThTl.to('.fees__cardTh', { duration: .3, scaleY: 1, });
cardThTl.fromTo('.fees__card-innerTh', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardThTl.to('.fees__cardFr', { duration: .3, scaleY: 1, });
cardThTl.fromTo('.fees__card-innerFr', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });

var cardFrTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.completely__cards',
        start: 'start bottom',
    }
});
cardFrTl.to('.completely__cardOne', { duration: .3, scaleY: 1, });
cardFrTl.fromTo('.completely__card-innerOne', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardFrTl.to('.completely__cardTwo', { duration: .3, scaleY: 1, });
cardFrTl.fromTo('.completely__card-innerTwo', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardFrTl.to('.completely__cardTh', { duration: .3, scaleY: 1, });
cardFrTl.fromTo('.completely__card-innerTh', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardFrTl.to('.completely__cardFr', { duration: .3, scaleY: 1, });
cardFrTl.fromTo('.completely__card-innerFr', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });

AOS.init(
    {
        offset: 100,
        ease: 'ease',
        once: true,
    }
);