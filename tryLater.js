var questionDiv = document.createElement("div");
var quest = document.createElement("p");
var optionsList = document.createElement("ul");
var option1 = document.createElement("button");
var option2 = document.createElement("button");
var option3 = document.createElement("button");
var option4 = document.createElement("button");

var lineBreak1 = document.createElement("br");
var lineBreak2 = document.createElement("br");
var lineBreak3 = document.createElement("br");

optionsList.appendChild(option1);
optionsList.appendChild(lineBreak1);
optionsList.appendChild(option2);
optionsList.appendChild(lineBreak2);
optionsList.appendChild(option3);
optionsList.appendChild(lineBreak3);
optionsList.appendChild(option4);

questionDiv.appendChild(quest);
questionDiv.appendChild(optionsList);

var displayArea = document.querySelector("#main-body");
displayArea.appendChild(questionDiv);
