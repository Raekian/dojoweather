function loadingAlert (){
    alert ("Loading weather report")
}

var alert = document.querySelector("#cookiecontainer")

function removeAlert(element) {
    // var alertbox =  document.getElementById(element)
    // var alertboxparent = alertbox.parentNode
    // var alertboxGrandParent = alertboxparent.parentNode
    // alertboxGrandParent.remove()
    document.getElementById(element).parentNode.parentNode.remove()
}

// var arrDegreeCel = [[23.9, 18.3], [26.7, 18.9], [20.6, 16.1], [25.6, 21.1]]
// var arrDegreeFar = [[75.02, 64.94],[80.6, 66.02], [69.08, 60.98],[78.08, 69.98]]

// function convert() {
//     if (document.getElementById(cel) == document.getElementById(cel)
//     arrDegreeCel = arrDegreeCel
//     else (document.getElementById(cel) != document.getElementById(cel)
//     arrDegreeCel =  arrDegreeFar
//

// set variables for Cel & Fahr arrays
// make a function that swaps the arrays based on whether or not cel or fahr is selected in the dropdown

//unsure how to assign array values to the temp values in each box
// a bit too advanced for me at the moment, would like to revist the challenge
