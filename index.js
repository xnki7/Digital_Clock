const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
// var bg = document.body.style.background;

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h >= 6 && h < 16)
    document.body.style.backgroundImage =
      "url('https://c4.wallpaperflare.com/wallpaper/433/37/319/atardecer-wallpaper-preview.jpg')";
  else if (h >= 16 && h <= 20)
    document.body.style.backgroundImage =
      "url('https://c4.wallpaperflare.com/wallpaper/583/92/973/digital-art-landscape-mountains-palm-trees-wallpaper-preview.jpg')";
  else
    document.body.style.backgroundImage =
      "url('https://c4.wallpaperflare.com/wallpaper/344/980/911/mozilla-illustration-mozilla-firefox-vector-art-wallpaper-preview.jpg')";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
