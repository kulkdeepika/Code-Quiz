
var currentScr = document.querySelector("#score");
currentScr.textContent = JSON.parse(localStorage.getItem("currentScore"));

var newScore = currentScr.textContent;

function initializeLocalStorage(){
    localStorage.removeItem("dataKey");
    if(!("dataKey" in localStorage))
    { 
        var scoreData = [];
        localStorage.setItem("dataKey", JSON.stringify(scoreData));
    }
}

var submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", () => { event.preventDefault(); 
                                            initializeLocalStorage();

                                            var newInitials = document.querySelector("#initials").value;
                                            
                                            var scoreData = JSON.parse(localStorage.getItem("dataKey"));
           
                                            scoreData.push({"name" : newInitials , "score" : newScore});
                                            localStorage.setItem("dataKey", JSON.stringify(scoreData));
                                            
                                            console.log(scoreData);
                                            console.log("score ", newScore);
                                            console.log("name ", newInitials);
                                            location.assign("highscores.html")});



