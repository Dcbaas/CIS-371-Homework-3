const el = document.getElementById("goBtn");
el.addEventListener("click", ev => {
  const inp = document.getElementById("numInput");
  //   alert("Your number is " + inp.value);
  deleteOldList();
  populateList(inp.value);
});

// Delete the old list. Rather than delete the li elements, I delete the whole list.
// Then I restart from scratch.
const deleteOldList = () => {
  let victim = document.querySelector("table");
  if (victim !== null) {
    victim.parentNode.removeChild(victim);
  }
};

// Populates the list with text. Rather than putting all of the functionality in
// Action listener, I send the action listener to a function.
const populateList = async amount => {
  let content = document.getElementById("jsContent");

  let tableNode = await fetch(`https://randomuser.me/api?results=${amount}`)
    .then(response => response.json())
    .then(data => {
      const content = document.getElementById("jsContent");
      const TABLE_HEADERS = ["Name", "Phone Number", "Date of Birth", "Image"];
      const table = document.createElement("table");

      // Add the header.
      const headerRow = document.createElement("tr");
      TABLE_HEADERS.forEach(element => {
        const headerNode = document.createElement("th");
        headerNode.appendChild(document.createTextNode(element));
        headerRow.appendChild(headerNode);
      });
      table.appendChild(headerRow);

      // Add the data
      data.results.forEach(element => {
        const tableRow = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.appendChild(
          document.createTextNode(`${element.name.first} ${element.name.last}`)
        );
        tableRow.appendChild(tdName);

        const tdCellPhone = document.createElement("td");
        tdCellPhone.appendChild(document.createTextNode(element.phone));
        tableRow.appendChild(tdCellPhone);

        const tdBirth = document.createElement("td");
        const dateString = element.dob.date.split("T")[0];
        tdBirth.appendChild(document.createTextNode(dateString));
        tableRow.appendChild(tdBirth);

        const tdImage = document.createElement("td");
        const imgImage = document.createElement("img");
        imgImage.setAttribute("src", element.picture.thumbnail);
        tdImage.appendChild(imgImage);
        tableRow.appendChild(tdImage);

        table.appendChild(tableRow);
      });

      return table;
    });
  content.appendChild(tableNode);
};

// REDUNDENT
const convertResponseToJson = response => response.json();

// REDUNDENT
const showData = data => {
  let content = document.getElementById("jsContent");
  let orderedList = document.createElement("ol");
  data.results.forEach(element => {
    let listItem = document.createElement("li");
    listItem.appendChild(
      document.createTextNode(`${element.name.first} ${element.name.last}`)
    );
    orderedList.appendChild(listItem);
  });

  return orderedList;
};
