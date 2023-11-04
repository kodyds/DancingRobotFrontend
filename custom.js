document.addEventListener("DOMContentLoaded",
function(){
    var comeOut=new TimelineMax();
    comeOut.fromTo("#WF,#SF",0.1,{autoAlpha:0,y:20},{autoAlpha:1,y:0})
    .fromTo("#RR,#TR",0.1,{autoAlpha:0,x:-20},{autoAlpha:1,x:0})
    .fromTo("#SB,#WB",0.1,{autoAlpha:0,y:-20},{autoAlpha:1,y:0})
    .fromTo("#TL,#RL",0.1,{autoAlpha:0,x:20},{autoAlpha:1,x:0})
}
);
