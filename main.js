const target = gsap.utils.toArray(".heroimg");

target.forEach((elem) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      scroller: "body",
      markers: true,
      scrub: 1,
      start: "top bottom",
      end: "bottom top",
      duration: 2.5,
      ease: "steps(12)",
    },
  });

  tl.to(elem, {
    scale: 1,
    y: -5,
  });
});

gsap.to(".work_txt", {
  scrollTrigger: {
    trigger: ".work_txt",
    scroller: "body",
    markers: true,
    scrub: 1,
    start: "top bottom",
    end: "bottom top",
  },
  x: -200,
});
