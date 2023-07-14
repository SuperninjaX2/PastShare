let counts = setInterval(updated,1000);
let upto = 0.0;

function updated() {
  let count = document.getElementById("counter");
  count.innerHTML = upto++;
  if (upto === 14.1) {
    clearInterval(counts);
  }
}