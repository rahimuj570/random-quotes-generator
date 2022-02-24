// ========== Catch Html Element ========
const getElem = (idClass) => {
  const elem = document.getElementById(idClass);
  const elemText = elem.innerText;
  return [elem, elemText];
};

// =========== Fetch API ===========
const fetchApi = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => catchApi(data));
};
fetchApi();

// ========= Show API Data =========
const catchApi = (data) => {
  getElem("quote")[0].innerText = data.quote;
  console.log(data.quote);
};

// ========= Try Another Handler =========
getElem("try-another-btn")[0].addEventListener("click", () => {
  fetchApi();
});

// ========= Copy Handler =========
getElem("copy-btn")[0].addEventListener("click", (e) => {
  const copyTarget = getElem("quote")[0].innerText;
  navigator.clipboard.writeText(copyTarget);
  e.target.innerText = "Copied";
  e.target.style.background = "green";
  setTimeout(() => {
    e.target.innerText = "Copy";
    e.target.style.background = "rgb(236 72 153)";
  }, 1000);
});
