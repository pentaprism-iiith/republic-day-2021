// (function ($) {
//     var image1 = new Image();
//     image.src = "./res/images/animation.gif";
// })(jQuery);

function init() {
    document.getElementById("load").style.opacity = '0';
    $("#camera-gif-figure").animate({
        // width and max-width have to be changed accordingly in index.css > #camera-gif
        top: String(0.5 * $(window).height() - (Math.min(0.15 * $(window).width(), 150))) + "px",
        opacity: "1",
    });

    // setTimeout(() => {
    //     $("#camera-gif").attr('src', "./res/images/animation.gif");
    // }, 500);
    
    setTimeout(() => {
        document.getElementById("camera-gif").style.opacity = '0';
    }, 1800);

    setTimeout(() => {

        // COMMENT OUT THE 2 LINES BELOW FOR SWACHITRA
        // const formLink = "https://forms.gle/tfnnxsLpcU1hgUdG6";
        // window.location.href = formLink; 
        
        // UNCOMMENT THE 2 LINES BELOW FOR SWACHITRA
        document.getElementById("camera-gif-figure").style.opacity = '0';
        document.getElementById("main-wrapper").style.opacity = '1';
        
    }, 2500);
}
