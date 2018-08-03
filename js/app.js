document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#emperor-form");
  const emperorList = document.createElement("ul");
  const emperorListDiv = document.querySelector("#emperor-list");
  emperorListDiv.appendChild(emperorList);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = event.target.first_name.value;
    const lastName = event.target.last_name.value;
    // TODO: do this for all the other form elements

    const emperorDetails = document.createElement("li");
    emperorDetails.textContent = `${firstName} ${lastName}`;

    emperorList.appendChild(emperorDetails);


    form.reset();
  });






});
