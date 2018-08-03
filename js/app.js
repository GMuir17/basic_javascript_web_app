document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#emperor-form");
  const emperorList = document.createElement("ul");
  const emperorListDiv = document.querySelector("#emperor-list");
  emperorListDiv.appendChild(emperorList);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = event.target.first_name.value;
    const familyName = event.target.family_name.value;
    const title = event.target.title.value;
    const reignStart = event.target.reign_start.value;
    const reignEnd = event.target.reign_end.value;
    // TODO: do this for all the other form elements

    const emperorDetails = document.createElement("li");
    emperorDetails.textContent = `${firstName} ${familyName} ${title}, ruled from ${reignStart} to ${reignEnd} AD`;

    emperorList.appendChild(emperorDetails);


    form.reset();
  });






});
