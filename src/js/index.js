var box = document.getElementById("line");

var open = 0;

window.openAnim = function () {
    var delay = 200;
    var dur = 0.4;
    TweenLite.to(".line1", dur, {
        width: "2.5rem",
        onComplete: complete
    });
    setTimeout(function () {
        TweenLite.to(".line2", dur, {
            width: "2.5rem",
            onComplete: complete
        });
        setTimeout(function () {
            TweenLite.to(".line3", dur, {
                width: "2.5rem",
                onComplete: complete
            });
        }, delay);
    }, delay);


    // 7. Callback functions
    function start() {
        console.log('start');
    }

    function update() {
        console.log('animating');
    }

    function complete() {
        console.log('end');
    }
}

window.closeAnim = function () {
    var delay = 200;
    var dur = 0.4;
    TweenLite.to(".line3", dur, {
        width: "0",
        onComplete: complete
    });
    setTimeout(function () {
        TweenLite.to(".line2", dur, {
            width: "0",
            onComplete: complete
        });
        setTimeout(function () {
            TweenLite.to(".line1", dur, {
                width: "0",
                onComplete: complete
            });
        }, delay);
    }, delay);


    // 7. Callback functions
    function start() {
        console.log('start');
    }

    function update() {
        console.log('animating');
    }

    function complete() {
        console.log('end');
    }
};



var ease = Power2.easeInOut;
var time = 0.25;

window.openMenu = function() {
    TweenLite.to(".line1", time, {
        transform: "rotate(-45deg)",
        top: "50%",
        ease: ease
    });

    TweenLite.to(".line2", time, {
        opacity: "0",
        ease: ease
    });

    TweenLite.to(".line3", time, {
        transform: "rotate(45deg)",
        top: "50%",
        ease: ease
    });
}

window.closeMenu = function() {
    TweenLite.to(".line1", time, {
        transform: "",
        top: "30%",
        ease: Power1.easeOut
    });

    TweenLite.to(".line2", time, {
        top: "50%",
        opacity: "1",
        ease: ease
    });

    TweenLite.to(".line3", time, {
        transform: "",
        top: "70%",
        ease: ease
    });
}

window.toggleMenu = function() {
    if (open == 1) {
        window.closeMenu();
        open = 0;
    } else {
        window.openMenu();
        open = 1;
    }
}

window.addEventListener("load", function() {
    // document.getElementsByClassName("burger").addEventListener("click", toggleMenu)
})
