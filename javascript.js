// GSAP Animation
gsap.registerPlugin(ScrollTrigger);

gsap.from("header", { duration: 1, y: -50, opacity: 0 });

gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
  });
});
