// URL'deki ?q= parametresine göre Yazılar sayfasındaki kartları filtreler.
(function () {
  var params = new URLSearchParams(window.location.search);
  var query = params.get("q");

  var listContainer = document.querySelector(".post-list-cards");
  if (!listContainer || !query) return;

  var input = document.querySelector(".header-search input[name='q']");
  if (input) input.value = query;

  function normalize(str) {
    return str
      .toLowerCase()
      .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
      .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u");
  }

  var q = normalize(query.trim());
  var cards = listContainer.querySelectorAll(".list-card");
  var matchCount = 0;

  cards.forEach(function (card) {
    var titleEl = card.querySelector("h2");
    var catEl = card.querySelector(".tag-mono");
    var haystack = normalize(
      (titleEl ? titleEl.textContent : "") + " " + (catEl ? catEl.textContent : "")
    );
    if (haystack.indexOf(q) !== -1) {
      card.style.display = "";
      matchCount++;
    } else {
      card.style.display = "none";
    }
  });

  document.querySelectorAll(".filter-pill").forEach(function (p) {
    p.classList.toggle("active", p.getAttribute("data-filter") === "all");
  });

  var status = document.createElement("p");
  status.className = "search-status";
  status.textContent =
    matchCount === 0
      ? '"' + query + '" için sonuç bulunamadı.'
      : '"' + query + '" için ' + matchCount + " sonuç bulundu.";

  var clearLink = document.createElement("a");
  clearLink.href = "yazilar.html";
  clearLink.textContent = "Aramayı temizle";
  status.appendChild(clearLink);

  listContainer.parentNode.insertBefore(status, listContainer);
})();
