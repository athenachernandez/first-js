// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick () {
    var name = document.getElementById('name').value;
    var activity = document.getElementById('yes').checked;
    var boxes = document.getElementsByName('mitf');
    var levels = ["None", "Pre-Preliminary", "Preliminary", "Pre-Juvenile", "Juvenile", "Intermediate", "Novice", "Junior", "Senior"];
    // Without storing these values early on, they are lost
    var levelsPassed = [boxes[0].checked, boxes[1].checked, boxes[2].checked, boxes[3].checked, boxes[4].checked, boxes[5].checked, boxes[6].checked, boxes[7].checked, boxes[8].checked];

    // Replace content
    myDiv.innerHTML = "\n";
    
    if (activity) {
        myDiv.innerHTML += "\t\t<h1>" + name + " likes to figure skate &lt;3</h1>\n";
    } else {
        myDiv.innerHTML += "\t\t<h1>" + name + " <i>doesn't</i> (!!) like to figure skate >:(</h1>\n";
    }

    // Lists tests passed
    myDiv.innerHTML += "\t\t<h3>You've passed: </h3>\n";
    for (var i = 0; i < levels.length; i++) {
        if (levelsPassed[i]) {
            myDiv.innerHTML += "\t\t<ul>~ " + levels[i] + " :]</ul>\n";
        }
    }
}