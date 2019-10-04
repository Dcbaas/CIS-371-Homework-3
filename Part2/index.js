const button = document.getElementById("randBtn");
button.addEventListener("click", event => {
  const input = document.getElementById("randInput");
  if (input.value > 100) {
    alert(`Due to limitations with the api this input can be no more than 100. 
    Enter a lower number.`);
  }
  deleteOldTable();
  createTable(input.value);
});

const deleteOldTable = () => {
  let victim = document.querySelector("table");
  if (victim !== null) {
    victim.parentNode.removeChild(victim);
  }
};

const createTable = async amount => {
  const content = document.getElementById("jsContent");
  const table = document.createElement("table");

  // Add the header.
  const TABLE_HEADERS = ["Match ID", "Team Winner", "Avg Match Making Rank"];
  const headerRow = document.createElement("tr");
  TABLE_HEADERS.forEach(element => {
    const headerNode = document.createElement("th");
    headerNode.appendChild(document.createTextNode(element));
    headerRow.appendChild(headerNode);
  });
  table.appendChild(headerRow);

  const queryPS = await fetch("https://api.opendota.com/api/publicMatches");
  const matchDataResponse = await queryPS.json();

  let finalList = [];
  for (let i = 0; i < amount; i++) {
    finalList.push(matchDataResponse[i]);
  }

  finalList.forEach(element => {
    const tableRow = document.createElement("tr");

    const tdMatchId = document.createElement("td");
    tdMatchId.appendChild(document.createTextNode(element.match_id));
    tableRow.appendChild(tdMatchId);

    const tdWinner = document.createElement("td");
    const winnerStr = element.radiant_win ? "Radiant" : "Dire";
    tdWinner.appendChild(document.createTextNode(winnerStr));
    tableRow.appendChild(tdWinner);

    const tdMMR = document.createElement("td");
    tdMMR.appendChild(document.createTextNode(element.avg_mmr));
    tableRow.classList.add(winnerStr);
    tableRow.appendChild(tdMMR);

    table.appendChild(tableRow);
  });
  content.appendChild(table);
};
