gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);


// 1. Hero: Buchstaben fliegen beim Laden gestaffelt rein
SplitText.create(".hero-text", {
  type: "chars , words",
  onSplit(self) {
    return gsap.from(self.chars, {
      y: 60,
      autoAlpha: 0,
      rotation: 6,
      stagger: 0.02,
      duration: 0.7,
      ease: "power3.out",
    });
  },
});

// 2. Absatz: Zeilen schieben sich beim Scrollen aus einer Maske hoch
SplitText.create(".mask-text", {
  type: "lines",
  mask: "lines",
  onSplit(self) {
    return gsap.from(self.lines, {
      yPercent: 110,
      autoAlpha: 0,
      stagger: 0.18,
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".mask-split",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  },
});

// 3. Wort-für-Wort Scroll-Highlight
SplitText.create(".highlight-text", {
  type: "words",
  onSplit(self) {
    return gsap.to(self.words, {
      color: "#161616",
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".highlight-split",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  },
});

// 4. ScrambleText: Buchstaben "decodieren" sich beim Hover zum neuen Text
const scrambleBtn = document.querySelector(".scramble-btn");

scrambleBtn.addEventListener("mouseenter", () => {
  gsap.to(scrambleBtn, {
    duration: 0.8,
    scrambleText: {
      text: scrambleBtn.dataset.target,
      chars: "upperCase",
      speed: 0.4,
    },
  });
});

scrambleBtn.addEventListener("mouseleave", () => {
  gsap.to(scrambleBtn, {
    duration: 0.8,
    scrambleText: {
      text: scrambleBtn.dataset.original,
      chars: "upperCase",
      speed: 0.4,
    },
  });
});

