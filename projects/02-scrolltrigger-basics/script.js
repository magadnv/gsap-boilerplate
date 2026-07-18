gsap.registerPlugin(ScrollTrigger);

// 1. toggleActions: Karte faded/slided rein, sobald sie in den Viewport scrollt
gsap.from("#fade-demo .fade-card > *", {
  y: 60,
  autoAlpha: 0,
  duration: 0.9,
  ease: "power3.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#fade-demo",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true, // zum Lernen aktivieren
  },
});

// 2. scrub: Bild und Headline bewegen sich mit unterschiedlichem Tempo (Parallax)
gsap.to("#scrub-demo .scrub-media img", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: "#scrub-demo",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to("#scrub-demo .scrub-heading", {
  xPercent: -15,
  ease: "none",
  scrollTrigger: {
    trigger: "#scrub-demo",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

// 3. horizontal scroll: Section pinnt, während die Spur seitlich durchläuft
const horizontalTrack = document.querySelector(".horizontal-track");

gsap.to(horizontalTrack, {
  x: () => -(horizontalTrack.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#horizontal-demo",
    start: "top top",
    end: () => "+=" + (horizontalTrack.scrollWidth - window.innerWidth),
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true,
  },
});

// 4. pin: Section bleibt fixiert, die drei Panels blenden nacheinander durch
gsap.set("[data-panel='2'], [data-panel='3']", { autoAlpha: 0 });

const pinTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#pin-demo",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: true,
  },
});

pinTimeline
  .to("[data-panel='1']", { autoAlpha: 0, duration: 1 })
  .to("[data-panel='2']", { autoAlpha: 1, duration: 1 }, "<")
  .to("[data-panel='2']", { autoAlpha: 0, duration: 1 })
  .to("[data-panel='3']", { autoAlpha: 1, duration: 1 }, "<");

  // 5. Sticky Nav: Link hervorheben, je nachdem welche Section sichtbar ist
const navLinks = document.querySelectorAll(".scroll-nav a");

function setActiveLink(activeLink) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link === activeLink);
  });
}

navLinks.forEach((link) => {
  const section = document.querySelector(link.getAttribute("href"));

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onToggle: (self) => self.isActive && setActiveLink(link),
  });
});