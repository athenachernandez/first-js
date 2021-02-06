function saveData() {
  /*
        Purpose: Saves the most recent data entered by the user.
        Parameters: None.
        Returns: None.
    */
  var boxes = document.getElementsByName("mitf");
  // Makes a JSON!
  var data = {
    name: document.getElementById("name").value,
    date: document.getElementById("month").value,
    email: document.getElementById("email").value,
    activity: document.getElementById("yes").checked,
    levels: [
      "None",
      "Pre-Preliminary",
      "Preliminary",
      "Pre-Juvenile",
      "Juvenile",
      "Intermediate",
      "Novice",
      "Junior",
      "Senior",
    ],
    levelsPassed: [
      boxes[0].checked,
      boxes[1].checked,
      boxes[2].checked,
      boxes[3].checked,
      boxes[4].checked,
      boxes[5].checked,
      boxes[6].checked,
      boxes[7].checked,
      boxes[8].checked,
    ],
  };

  // Calls the function display
  display(data, true);

  // Makes a temporary list and appends the new data to the old
  var dataList = localStorage.getItem("data");
  if (dataList == null) {
    dataList = [];
  }
  dataList = JSON.parse(dataList);
  dataList.data.push(data);
  localStorage.setItem("data", JSON.stringify(dataList));
}

function display(data, clear) {
  /*
        Purpose: Displays the most recent data entered.
        Parameters: 'data' which is the JSON file and 'clear' which is a boolean that 
                    decides whether this was called from the other search function.
        Returns: None.
    */
  var currentDiv;
  if (clear) {
    currentDiv = myDiv;
    myDiv.innerHTML = "\n";
    currentDiv.innerHTML += "\t\t<h1><u>Today...</u></h1>\n";
  } else {
    currentDiv = previousAns;
  }

  // From the radio input
  if (data.activity) {
    currentDiv.innerHTML +=
      "\t\t<h2>" + data.name + " likes to figure skate! :D</h2>\n";
  } else {
    currentDiv.innerHTML +=
      "\t\t<h2>" + data.name + " doesn't like to figure skate. :(</h2>\n";
  }

  // Goes through each selected checkbox and displays what they've passed!
  currentDiv.innerHTML +=
    "\t\t<h3>You've passed (as of " + data["date"] + "):</h3>\n";
  for (var i = 0; i < data["levels"].length; i++) {
    if (data["levelsPassed"][i]) {
      currentDiv.innerHTML += "\t\t<ul>~ " + data["levels"][i] + " :]</ul>\n";
    }
  }

  // Only displays if this function was NOT called from the search
  if (clear) {
    currentDiv.innerHTML +=
      "\t\t<h1><u>Search your previous entries...</u></h1>\n";
    currentDiv.innerHTML +=
      "\t\t<h3>Please input something in both boxes!</h3>\n";
    currentDiv.innerHTML +=
      "\t\t\t<p>Who are you looking for? <input id='searchName'></input></p><br />\n";
    currentDiv.innerHTML +=
      "\t\t\t<p>What date (format = year-month)? <input id='searchDate'></input></p><br />\n";
    currentDiv.innerHTML +=
      "\t\t\t<button onclick='searchStored()'>Let's search!</button><br />\n";
  }
}

function searchStored() {
/*
        Purpose: Displays the searched data by checking they strings that the user
                 entered from the display() function.
        Parameters: None.
        Returns: None.
    */
  previousAns.innerHTML = "\n";
  var data = JSON.parse(localStorage.getItem("data")).data;

  var name = document.getElementById("searchName").value;
  var date = document.getElementById("searchDate").value;

  for (var i = 0; i < data.length; i++) {
    if ( data[i].date == date && data[i].name == name) {
      display(data[i], false);
    }
  }
}
