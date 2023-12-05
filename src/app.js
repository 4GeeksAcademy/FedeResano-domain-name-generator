import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = generateDomainName();
  });
};

function generateDomainName() {
  let pronoun = ["a", "the", "one"];
  let adj = [
    "awesome",
    "great",
    "impressive",
    "incredible",
    "big",
    "beautiful",
    "fast"
  ];
  let noun = ["racoon", "jogger", "runner", "hero", "pixel", "enigma"];
  let extension = ["com", "net", "org", "dev", "edu", "io", "us", "tv"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let extensionIndex = Math.floor(Math.random() * extension.length);

  let domain =
    pronoun[pronounIndex] +
    "" +
    adj[adjIndex] +
    "" +
    noun[nounIndex] +
    "" +
    extension[extensionIndex];

  return domain;
}
