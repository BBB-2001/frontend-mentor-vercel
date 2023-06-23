let btn = document.querySelector("#advice-btn");
window.onload = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (res.ok) {
        console.log("SUCCSESS");
        return res.json();
      } else {
        console.log("NOT SUCCESS");
      }
    })
    .then((data) => {
      console.log("data", data);

      console.log("id", data.slip.id);
      const idHtml = document.getElementById("id");
      idHtml.innerText = data.slip.id;

      const advice = data.slip.advice;
      console.log("advice", advice);
      const h2 = document.getElementById("text");
      h2.innerText = advice;
      return advice;
    })
    .then((advice) => {
      console.log(advice);
    })
    .catch((error) => console.log("ERROR"));
};

btn.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (res.ok) {
        console.log("SUCCSESS");
        return res.json();
      } else {
        console.log("NOT SUCCESS");
      }
    })
    .then((data) => {
      console.log("data", data);

      console.log("id", data.slip.id);
      const idHtml = document.getElementById("id");
      idHtml.innerText = data.slip.id;

      const advice = data.slip.advice;
      console.log("advice", advice);
      const h2 = document.getElementById("text");
      h2.innerText = advice;
      return advice;
    })
    .then((advice) => {
      console.log(advice);
    })
    .catch((error) => console.log("ERROR"));
});

window.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("img");

  function changeImageSrc() {
    if (window.innerWidth < 550) {
      img.src = "images/pattern-divider-mobile.svg";
    } else if (window.innerWidth > 550) {
      img.src = "images/pattern-divider-desktop.svg";
    } else {
      img.src = "image-large.jpg";
    }
  }

  window.addEventListener("resize", changeImageSrc);
  changeImageSrc();
});
