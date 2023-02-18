const title = document.querySelector("h1");
const subTitle = document.querySelector("h2");
const counter = document.querySelector("h3");

// Tar två inputs, det första är ett klick eller mouseover. Det andra är callback, vad som ska ske.
title.addEventListener("click", (e) => {
  console.log(e.target, "Click!!!!");
});

let count = 0;

subTitle.addEventListener("mouseenter", (e) => {
  counter.innerText = count++;
});


