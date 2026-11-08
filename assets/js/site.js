// Runs the production log once when it comes into view; everything else is static.
(function () {
  document.documentElement.classList.add("js");
  var log = document.querySelector(".log");
  if (!log) return;
  log.querySelectorAll("li").forEach(function (li, i) { li.style.setProperty("--i", i); });
  var start = function () { log.classList.add("is-running"); };
  if (!("IntersectionObserver" in window)) { start(); return; }
  var io = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) { start(); io.disconnect(); }
  }, { threshold: 0.2 });
  io.observe(log);
})();
