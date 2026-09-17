// Sayfa kaydırıldıkça .reveal sınıflı öğeleri hafifçe belirterek gösterir.
(function () {
  var items = document.querySelectorAll(".reveal");

  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("reveal-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i * 80, 320) + "ms";
    observer.observe(el);
  });
})();
