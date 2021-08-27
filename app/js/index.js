'use strict';


const cookieEl = document.querySelector('.cookie');

let cookies = () => {
    if (!Cookies.get('hide-cookie')) {
        setTimeout(() => {
            cookieEl.style.display = 'block';
        }, 1000);
    }
    Cookies.set('hide-cookie', 'true', {
        expires: 30
    })
}

cookies();



// var sliderJSone = document.getElementById('myRangeOne');
// var output = document.getElementById('valueOne');

// output.innerHTML = sliderJSone.value;

// sliderJSone.oniput = function() {
//     output.innerHTML = this.value;
// }


// var $slider = $('#myRangeOne');
// var $fill = $('.barOne .fillOne');
// function setBar() {
//     $fill.css('width', $slider.val() + '%');
// }

// $slider.on('input', setBar);

// setBar();




// var sliderJStwo = document.getElementById('myRangeTwo');
// var outputtwo = document.getElementById('valueTwo');

// outputtwo.innerHTML = sliderJStwo.value;

// sliderJStwo.oniput = function() {
//     outputtwo.innerHTML = this.value;
// }

// var $sliderTwo = $('#myRangeTwo');
// var $fillTwo = $('.barTwo .fillTwo');

// function setBarTwo() {
//     $fillTwo.css('width', $sliderTwo.val() + '%');
// }


// $sliderTwo.on('input', setBarTwo);

// setBarTwo();

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




var cardTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.what__cards',
        start: 'start bottom',
    }
});
cardTl.to('.what__cardOne', { duration: .3, scaleY: 1, });
cardTl.fromTo('.innerOne', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardTl.to('.what__cardTwo', { duration: .3, scaleY: 1, });
cardTl.fromTo('.innerTwo', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardTl.to('.what__cardTh', { duration: .3, scaleY: 1, });
cardTl.fromTo('.innerTh', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });

var cardTwoTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.have__cards',
        start: 'start bottom',
    }
});
cardTwoTl.to('.have__cardOne', { duration: .3, scaleY: 1, });
cardTwoTl.fromTo('.have__card-innerOne', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });
cardTwoTl.to('.have__cardTwo', { duration: .3, scaleY: 1, });
cardTwoTl.fromTo('.have__card-innerTwo', { delay: 1, duration: .3, x: 200, opacity: 0 }, { duration: .3, x: 0, opacity: 1 });

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


