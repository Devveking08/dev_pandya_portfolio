(() => {
    console.log("IIFE Fired");
   // gsap.to("#ball1", 1, {delay:2 , y:200, ease:Bounce.easeOut});
  // gsap.to("#ball2", 1, {delay:1 , y:200, ease:Bounce.easeOut});
//  gsap.to("#ball3", 1, {delay:4 , y:200, ease:Bounce.easeOut});

// Exec TL Method 
   let tl = gsap.timeline();

//    tl.to("#baLL1", 1 ,{y:200, ease:Bounce.easeOut})
//      .to("#baLL2", 1 ,{y:200, ease:Bounce.easeOut})
//      .to("#baLL3", 1 ,{y:200, ease:Bounce.easeOut});

// EXEC STAGGER METHOD WITH THE HELP OF TL

tl.staggerFrom(".ball", 2, {scale:0, autoAlpha:0}, 1);

// EXEC TIME SCALE WITH TL METHOD 

// tl.timeScale(2);



})();
