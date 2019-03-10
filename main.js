const result = document.querySelector(".result");
const gramsResult = document.getElementById("gramsResult");
const poundsResult = document.getElementById("poundsResult");
const ouncesResult = document.getElementById("ouncesResult");

result.style.visibility = "hidden";

document.getElementById("kgInput").addEventListener("input", function(e) {
  result.style.visibility = "visible";
  let kg = e.target.value;
  gramsResult.innerText = kg * 1000;
  poundsResult.innerText = kg * 2.2046;
  ouncesResult.innerText = kg * 35.2739619;
});
