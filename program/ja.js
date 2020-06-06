// gsap.to()... infinity and beyond!
// For more check out greensock.com
gsap.registerPlugin(MotionPathPlugin);

gsap.set("body > *", { autoAlpha: 1 });

const tl = gsap.timeline({ delay: 0.9 });

// The logo animation
tl.from("#logo", { scale: 0.5, autoAlpha: 0, ease: "back" });

const optionsG1 = [{ duration: 0.5, x: -120, y: 180, rotation: -10, scale: 2 }];

gsap.to(
  ".G1",
  {
    motionPath: {
      path: optionsG1,
      curviness: 0
    },
    duration: 0.5,
    ease: "power3",
    stagger: 0.09
  },
  "-=0.5"
);

const optionsG2 = [{ duration: 1, x: -90, y: 140, rotation: -8, scale: 2 }];

gsap.to(
  ".G2",
  {
    motionPath: {
      path: optionsG2,
      curviness: 0
    },
    duration: 1,
    ease: "power3",
    stagger: 0.09
  },
  "-=0.5"
);

const optionsG3 = [{ duration: 1.5, x: -60, y: 110, rotation: -6, scale: 2 }];

gsap.to(
  ".G3",
  {
    motionPath: {
      path: optionsG3,
      curviness: 0
    },
    duration: 1.5,
    ease: "power3",
    stagger: 0.09
  },
  "-=0.5"
);

const optionsG4 = [{ duration: 2, x: -30, y: 80, rotation: -4, scale: 2 }];

gsap.to(
  ".G4",
  {
    motionPath: {
      path: optionsG4,
      curviness: 0
    },
    duration: 2,
    ease: "power3",
    stagger: 0.09
  },
  "-=0.5"
);

const optionsG5 = [{ duration: 2.5, x: 0, y: 55, rotation: -2, scale: 2 }];

gsap.to(
  ".G5",
  {
    motionPath: {
      path: optionsG5,
      curviness: 0
    },
    duration: 2.5,
    ease: "power3",
    stagger: 0.09
  },
  "-=0.5"
);

const optionsG6 = [{ duration: 3, x: 30, y: 40, rotation: 0, scale: 2 }];

gsap.to(
  ".G6",
  {
    motionPath: {
      path: optionsG6,
      curviness: 0
    },
    duration: 3,
    ease: "power3",
    stagger: 0.09
  },
  "-=0.5"
);

const optionsG7 = [{ duration: 3.5, x: 60, y: 35, rotation: 2, scale: 2 }];

gsap.to(
  ".G7",
  {
    motionPath: {
      path: optionsG7,
      curviness: 0
    },
    duration: 3.5,
    ease: "power3",
    stagger: 0.09
  },
  "-=0.5"
);

const optionsG8 = [{ duration: 4, x: 90, y: 30, rotation: 4, scale: 2 }];

gsap.to(
  ".G8",
  {
    motionPath: {
      path: optionsG8,
      curviness: 0
    },
    duration: 4,
    ease: "power3",
    stagger: 0.09
  },
  "-=0.5"
);
