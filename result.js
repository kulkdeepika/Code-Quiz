var scoreData = [];

var currentScr = document.querySelector("#score");
currentScr.textContent = JSON.parse(localStorage.getItem("currentScore"));

var newScore = currentScr.textContent;

var submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", () => { event.preventDefault(); 
                                            var newInitials = document.querySelector("#initials").value;
                                            
                                            scoreData = JSON.parse(localStorage.getItem("dataKey"));
                                            if(scoreData != ""){
                                                scoreData.push({"name" : newInitials , "score" : newScore});
                                                localStorage.setItem("dataKey", JSON.stringify(scoreData));
                                            }
                                            else{
                                                scoreData = [{"name" : newInitials , "score" : newScore}];
                                                localStorage.setItem("dataKey", JSON.stringify(scoreData));
                                            }
                                            console.log(scoreData);
                                            console.log("score ", newScore);
                                            console.log("name ", newInitials);
                                            location.assign("highscores.html")});



