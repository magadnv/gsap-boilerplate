// Plugins hier registrieren, sobald sie oben in index.html eingebunden sind:
// gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 200,
  rotation: 360,
  duration: 1.2,
  ease: "power3.out",
});
