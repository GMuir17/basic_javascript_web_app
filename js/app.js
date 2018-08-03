document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#emperor-form");
  const emperorList = document.createElement("ul");
  const emperorListDiv = document.querySelector("#emperor-list");
  emperorListDiv.appendChild(emperorList);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });






});
