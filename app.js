var app =document.querySelector(".typewriter");
var typewriter = new Typewriter(app,{
    loop:true,
    deleteSpeed:40,
});
typewriter.typeString("live international fellowship")
            .pauseFor(4500)
            .deleteAll()
            .typeString("outreach")
            .pauseFor(4500)
            .deleteAll()
            .typeString("envangelism")
            .pauseFor(4500)
            .start();
$(".hire").click(()=>{
$('html,body').animate({
    scrollTop: $("#get-in-touch").offset().top},
    3000);
});