function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
// 🌸 IP/location + name saving code
fetch("https://ipapi.co/json/")
  .then((response) => response.json())
  .then((data) => {
    const visitorName = localStorage.getItem("visitorName") || "Unknown";

    const payload = {
      name: visitorName,
      ip: data.ip,
      city: data.city,
      country: data.country,
      browser: navigator.userAgent,
      time: new Date().toLocaleString()
    };

    navigator.sendBeacon("https://script.google.com/macros/s/AKfycbyunTrF_ci7CKdq5oL-EfsZqI5q7L04KBRd3dAEW_Jan1InwgGanm5Ky7-aWZ_Ewds/exec", JSON.stringify(payload));
  });
