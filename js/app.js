document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#emperor-form");

  const firstNameInput = document.querySelector("#first_name");

  // TODO: Ask about this
  firstNameInput.addEventListener("input", (event) => {
    if (firstNameInput.validity.patternMismatch) {
      firstNameInput.setCustomValidity("All good names end in 'us'");
    }
    else {
      firstNameInput.setCustomValidity("");
    }
  });

  const deleteButton = document.querySelector("#delete-button")
  deleteButton.hidden = true;
  const emperorList = document.createElement("ul");
  const emperorListDiv = document.querySelector("#emperor-list");
  emperorListDiv.hidden = true;
  const emperorListTitle = document.querySelector("#emperor_list_title");
  emperorListTitle.hidden = true;

  emperorListDiv.appendChild(emperorList);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    deleteButton.hidden = false;
    emperorListDiv.hidden = false;
    emperorListTitle.hidden = false;

    const firstName = event.target.first_name.value;
    const familyName = event.target.family_name.value;

    function getValueFromTitleCheckBox() {
      let titles = document.querySelectorAll(".titles");
      let values = "";

      for (let i = 0; i < 4; i++) {
        if (titles[i].checked === true) {
          values += titles[i].value + " ";
        }
      }
      return values;
    };

    const reignStart = event.target.reign_start.value;
    const reignEnd = event.target.reign_end.value;
    const dateMilleniun = document.querySelector("input[name='date_choice']:checked").value;
    const meansOfDeath = event.target.means_of_death.value;

    const emperorDetails = document.createElement("li");
    emperorDetails.textContent =
    `${getValueFromTitleCheckBox()} ${firstName} ${familyName}, ruled from ${reignStart} to ${reignEnd} ${dateMilleniun}, died ${meansOfDeath}`;

    emperorList.appendChild(emperorDetails);

    form.reset();
  });

  deleteButton.addEventListener("click", () => {
    emperorList.innerHTML = "";

    deleteButton.hidden = true;
    emperorListDiv.hidden = true;
    emperorListTitle.hidden = true;
  });

});
