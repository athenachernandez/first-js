// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick() {
    var boxes = document.getElementsByName('mitf');
    var data = {
        'name' : document.getElementById('name').value,
        'date' : document.getElementById('month').value,
        'email' : document.getElementById('email').value,
        'activity' : document.getElementById('yes').checked,
        'levels' : ["None", "Pre-Preliminary", "Preliminary", "Pre-Juvenile", "Juvenile", "Intermediate", "Novice", "Junior", "Senior"],
        'levelsPassed' : [boxes[0].checked, boxes[1].checked, boxes[2].checked, boxes[3].checked, boxes[4].checked, boxes[5].checked, boxes[6].checked, boxes[7].checked, boxes[8].checked],
    };
    localStorage.setItem("name", data['name']);

    // Replace content
    myDiv.innerHTML = "\n";
    
    if (data['activity']) {
        myDiv.innerHTML += "\t\t<h1>" + data['name'] + " likes to figure skate &lt;3</h1>\n";
    } else {
        myDiv.innerHTML += "\t\t<h1>" + data['name'] + " <i>doesn't</i> (!!) like to figure skate >:(</h1>\n";
    }

    // Lists tests passed
    myDiv.innerHTML += "\t\t<h3>You've passed (as of " + data['date'] + "):</h3>\n";
    for (var i = 0; i < data['levels'].length; i++) {
        if (data['levelsPassed'][i]) {
            myDiv.innerHTML += "\t\t<ul>~ " + data['levels'][i] + " :]</ul>\n";
        }
    }
    
    myDiv.innerHTML += "\t\t<p>Local storage saved your name: " + localStorage.getItem("name") + "\n</p>";
    myDiv.innerHTML += "\t\t<p>Dis u? --> " + data['email'] + "<\p>";
}