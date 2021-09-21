
// EFECTOS CON JQUERY

$(".naturales").click(() => { 
    $(".nat").toggle("slow");
});

$(".superPremium").click(() => { 
    $(".suPrem").toggle("slow");
});

$(".premium").click(() => { 
    $(".prem").toggle("slow");
});

$(".estandar").click(() => { 
    $(".estan").toggle("slow");
});
$(".economico").click(() => { 
    $(".eco").toggle("slow");
});

// CSS EN SECCION CALIDADES
$("h2").css({ 
    "color": "rgb(221, 231, 221)",
    "font-size": "x-large",
    "font-weight": "normal",
    "font-style": "initial",
    "font-family": "'Benne', serif",
    "text-align": "center" });
$("h3").css({
        "font-family": "Verdana, Geneva, Tahoma, sans-serif",
        "color": "rgb(221, 231, 221)",
        "font-weight": "bold",
        "text-align": "center",
        "font-size": "small" });

$("h4"). css({
    "color": "rgb(56, 55, 55)",
    "font-size": "x-large",
    "font-weight": "normal",
    "font-style": "initial",
    "font-family": "'Benne', serif",
    "text-align": "center"
});       
$("h5").css({
        "font-family": "'Benne', serif",
        "color": "rgb(56, 55, 55)",
        "font-size": "medium",
        "font-weight": "300",
        "text-align": "center",
        "margin-top": "8px" });
$("p").css({
        "color": "rgb(56, 55, 55)",
        "text-align": "center",
        "margin": "auto",
        "font-size": "75%" });

$("#blogDescripcion").css({
    "text-align": "center",
    "justify-content": "center",
    "padding-bottom": "20px"});

$(".nat").css({
    "background-color": "rgb(138, 197, 204)"
});
$(".suPrem").css({
    "background-color": "rgb(138, 197, 204)"
});
$(".prem").css({
    "background-color": "rgb(138, 197, 204)"
});
$(".eco").css({
    "background-color": "rgb(138, 197, 204)"
});
$(".estan").css({
    "background-color": "rgb(138, 197, 204)"
});