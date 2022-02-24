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
catchApi();
