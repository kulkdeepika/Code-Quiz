var goBack = document.querySelector("#goBack");
var clearHS = document.querySelector("#ClearHighscores");
var hsList = document.querySelector("#highScrList");

var dataObject = JSON.parse(localStorage.getItem("dataKey"));
var sortedObject = [];

sortedObject = dataObject.sort(function(a, b){ return b.score - a.score;});

produceList();

function produceList()
{
    let x = sortedObject.length >= 5 ? 5 : sortedObject.length;

    for(let i=0; i<x; i++)
    {
        let listItem = document.createElement("li");

        let listItemContent = i+1 + "." + " " + sortedObject[i].name + " - " + sortedObject[i].score;
        listItem.textContent = listItemContent;

        listItem.setAttribute("style", "background-color:midnightblue; opacity:0.8; width:25%; border-style:solid; border-width:thick; border-color:midnightblue;margin:2%; list-style-type:none");

        hsList.appendChild(listItem);

    }

    console.log(sortedObject);
}

goBack.addEventListener("click", () => {location.assign("index.html");});
clearHS.addEventListener("click", () => {dataObject = ""; sortedObject = "";
                                         localStorage.setItem("dataKey" , JSON.stringify(dataObject));
                                         hsList.innerHTML = "";});