$(document).ready (function () {

// fade contents onto page
    $("#container").fadeIn(4000);

// hovers over paragraph "mouse enter"
    $(document).on("mouseenter", ".p", function () {
        $("background-color:yellow").fadeIn(1000);
    });
// mouseleaves when not hovering
    $(document).on("mouseleaves", ".p", function () {
        $("background-color:white").fadeOut(4000);
    });

// Set up a click event on every <h2> element that simultaneously fades it to 25
// percent opacity while growing its left-hand margin to 20px.

    $(document).on ("click", ".h2", function (){
        $("text-color:rbga:0,0,0,25").fadeIn();
    });
// Then, when this animation is complete, fade the speech text to 50 percent opacity.
    $(document).on ("click", ".h2", function (){
        $("text-color:rbga:0,0,0,50").fadeOut();
    });
});
