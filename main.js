$(document).ready(function () {
    var time = new Date();
    hour = time.getHours();
    minute = time.getMinutes();
    second = time.getSeconds();
    var str = `[${hour}:${minute}:${second}]`;
    $('.time').html(str);
    console.log("Nice try. You won't find anything here.");
    $(window).on('click keypress tap touchstart', function () {
        click++;
        if (click == 1) {
            $('.t1').addClass('active');
            speak('Hello Nicole');
            setTimeout(function () {
                $('.p2').show();
            }, 5000);
        }
        if (click == 2) {
            $('.t2').addClass('active');
            speak('Happy Birthday idiot');
            setTimeout(function () {
                window.location = "https://youtu.be/mhJhQddBEBU?t=3";
            }, 5000);
        }
    })

});

var click = 0;

function speak(str) {
    var msg = new SpeechSynthesisUtterance(str);
    msg.rate = 0.5;
    msg.pitch = 0.5;
    window.speechSynthesis.speak(msg);
}