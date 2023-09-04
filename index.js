const scoreMainContainer = document.getElementById("scoreMainContainer");
const AddDetailsButton = document.getElementById("AddDetailsButton");

AddDetailsButton.addEventListener("click", () => {
  const fName = document.getElementById("fName");
  const lName = document.getElementById("lName");
  const country = document.getElementById("country");
  const score = document.getElementById("score");

  const scoreBoard = document.createElement("div");
  scoreBoard.classList.add("scoreBoard");

  scoreBoard.innerHTML = `
  <div>
        <p class="main_player-name">${fName.value} ${lName.value}</p>
        <p class="main_time-stamp">${generateDateAndTime()}</p>
    </div>
    <p class="country">${country.value}</p>
    <p class="score">${score.value}</p>
    <div class="main_scoreboard-btn-container">
            <button>&#x1f5d1;</button>
            <button>+5</button>
            <button>-5</button>
    </div>
  `;

  scoreMainContainer.appendChild(scoreBoard);
  fName.value = "";
  lName.value = "";
  country.value = "";
  score.value = "";

  sortBoard();
  activateBtnEventListener();
});

function sortBoard() {
  const ScoreBoard = document.querySelectorAll(".scoreBoard");
  const arr = [];
  ScoreBoard.forEach((ele) => arr.push(ele));
  const sortedArray = arr
    .map((ele) => {
      return ele;
    })
    .sort((a, b) => {
      let runOfManOne = parseInt(a.children[2].textContent);
      let runOfManTwo = parseInt(b.children[2].textContent);
      if (runOfManOne > runOfManTwo) {
        return -1;
      }
      if (runOfManOne < runOfManTwo) {
        return 1;
      }
    });

  sortedArray.forEach((ele) => {
    scoreMainContainer.append(ele);
  });
}

function activateBtnEventListener(){
    document.querySelectorAll(".main_scoreboard-btn-container").forEach((el)=>{
        el.addEventListener("click", (e)=>{
            let textContent = e.target.textContent;
            console.log(textContent);
            let scorePlayer = e.target.parentElement.parentElement.children[2];
            console.log(scorePlayer);

            if(textContent.length > 2) return;

            console.log(e.target.parentElement.parentElement);
            console.log("hi");

            if(textContent === '🗑')
            return e.target.parentElement.parentElement.remove();

            scorePlayer.textContent = parseInt(scorePlayer.textContent) + parseInt(textContent);

            sortBoard();
        
        });
    });
}

function generateDateAndTime(){
    let dateObject = new Date();
    let month = dateObject.toLocaleString("default", {month:"short"})
    day = dateObject.getDate(),
    year = dateObject.getFullYear(),
    time = dateObject.toLocaleTimeString().slice(0,8);

    let generateResult = `${month} ${day}: ${year} ${time}`

    return generateResult;
}