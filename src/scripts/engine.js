const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector("#enemy"),
    timeLeft:document.querySelector("#time-left"),
    score:document.querySelector("#score"),
  },
  values: {},
};

function randomSquare() {
    state.view.forEach((square) =>{
        square.classList.remove("enemy");
 })
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy")
}


function addListenerHitBox(params) {
    state.view.squares.forEach((square) =>  {})

}

function init() {
    
    randomSquare()
}
init();