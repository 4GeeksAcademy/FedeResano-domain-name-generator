import "bootstrap";
import "./style.css";

window.onload = () => {
  const domainArray = generateDomainName();
  const domainString = domainArray.join("<br>");
  document.querySelector("#domain").innerHTML = domainString;
};

function generateDomainName() {
  const pronoun = ["the", "one"];
  const adj = [
    "awesome",
    "great",
    "impressive",
    "incredible",
    "big",
    "beautiful",
    "fast"
  ];
  const noun = ["racoon", "jogger", "runner", "hero", "pixel", "enigma"];
  const extension = [
    ".com",
    ".net",
    ".org",
    ".dev",
    ".edu",
    ".io",
    ".us",
    ".tv"
  ];

  let domain = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let n = 0; n < extension.length; n++) {
          domain.push(
            pronoun[i] + "" + adj[j] + "" + noun[k] + "" + extension[n]
          );
        }
      }
    }
  }
  return domain;
}
