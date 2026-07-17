// GSAP registrieren: Hier kannst du später weitere Plugins ergänzen.
gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// 1. EINFACHE TWEENS
// ---------------------------------------------------------------------------
const heroTween = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

heroTween
  .from(".hero-copy > *", { y: 45, autoAlpha: 0, stagger: 0.12, duration: 0.8 })
  .from(".hero-stage", { scale: 0.88, autoAlpha: 0, duration: 0.8 }, "<0.1")
  .from(".orb, .shape", { scale: 0, rotation: -45, stagger: 0.1, duration: 0.7 }, "<0.2");

// Intro beim Laden abspielen
heroTween.play();
document.querySelector("#play-button").addEventListener("click", () => heroTween.restart());

// Kleine, endlose Bewegung – probiere duration, ease, yoyo oder repeat aus.
gsap.to(".orb-two", { y: -26, duration: 2.4, ease: "sine.inOut", repeat: -1, yoyo: true });

// ---------------------------------------------------------------------------
// 2. TIMELINES
// ---------------------------------------------------------------------------
const practiceTimeline = gsap.timeline({ paused: true, defaults: { duration: 0.55, ease: "back.out(1.7)" } });

practiceTimeline
  .to(".item-a", { x: 45, rotation: 90 })
  .to(".item-b", { y: -70, rotation: -90 }, "<0.15")
  .to(".item-c", { x: -45, rotation: 90 }, "<0.15");

document.querySelector("#timeline-play").addEventListener("click", () => practiceTimeline.play());
document.querySelector("#timeline-reverse").addEventListener("click", () => practiceTimeline.reverse());
document.querySelector("#timeline-reset").addEventListener("click", () => practiceTimeline.pause(0));

// ---------------------------------------------------------------------------
// 3. SCROLLTRIGGER
// ---------------------------------------------------------------------------
// toggleActions: onEnter, onLeave, onEnterBack, onLeaveBack
gsap.from(".panel", {
  y: 120,
  autoAlpha: 0,
  stagger: 0.14,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".panels",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true, // Zum Lernen aktivieren: zeigt Start- und Endpunkte.
  },
});

// Beispiel für scrub: Die Überschrift reagiert direkt auf deine Scroll-Position.
gsap.to(".scroll-intro h2", {
  xPercent: 18,
  scrollTrigger: {
    trigger: ".scroll-intro",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

// Deine Experimente kommen hierhin ↓
