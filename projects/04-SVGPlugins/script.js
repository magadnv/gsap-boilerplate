gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin);

// 1. DrawSVG: Ring zeichnet sich beim Scrollen, dann erscheint der Mittelpunkt
gsap.set(".draw-ring", { drawSVG: "0%" });
gsap.set(".draw-dot", { scale: 0, transformOrigin: "50% 50%" });

const drawTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#draw-demo",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
});

drawTimeline
  .to(".draw-ring", { drawSVG: "100%", duration: 1, ease: "power2.inOut" })
  .to(".draw-dot", { scale: 1, duration: 0.4, ease: "back.out(3)" });

// 2. MotionPath: Punkt reist entlang der Linie, gekoppelt an deine Scroll-Position
gsap.to(".motion-dot", {
  motionPath: {
    path: "#travel-path",
    align: "#travel-path",
    alignOrigin: [0.5, 0.5],
  },
  ease: "none",
  scrollTrigger: {
    trigger: "#motionpath-demo",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

// 3. MorphSVG: Klick morpht zwischen Kreis ("Ort") und Stern ("Funke")
const morphBtn = document.querySelector(".morph-btn");
let isSpark = false;

morphBtn.addEventListener("click", () => {
  isSpark = !isSpark;
  gsap.to("#morph-shape", {
    morphSVG: isSpark ? "#spark-shape" : "#place-shape",
    duration: 0.6,
    ease: "power2.inOut",
  });
});
