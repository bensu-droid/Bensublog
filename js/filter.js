// Yazılar sayfasındaki kategori pill'lerine tıklanınca ilgili kartları gösterir/gizler.
(function () {
  var pills = document.querySelectorAll(".filter-pill");
  var cards = document.querySelectorAll(".post-list-cards .list-card");

  if (!pills.length || !cards.length) return;

  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      pills.forEach(function (p) { p.classList.remove("active"); });
      pill.classList.add("active");

      var filter = pill.getAttribute("data-filter");

      cards.forEach(function (card) {
        var category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
})();
