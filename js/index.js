let j = 0;
let k=0;
lineBreak = document.createElement("br");
for (let i = 0; i < 40; i++) {
  j = j + 1;
  console.log(j);
  var balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.id = i;
  console.log(balloon.id);
  balloon.addEventListener("mouseover", function (event) {
     
    if (event.target.id < 40 ) {
      console.log(event.target.id);
      event.target.style.backgroundColor = "white";
      if(event.target.innerHTML !== "Popped")
      {
        event.target.append("Popped");
        event.target.style.color = "green";
        k= k+1
        console.log(k)
      }

      if (k===40){
        setTimeout(function(){ alert("Congratulation You Won \n Your Score is: 40"); }, 500);
      }
    }
  });
  var x = Math.floor(Math.random() * 4 + 1);
  if (x == 1) {
    balloon.style.backgroundColor = "pink";
  } else if (x == 2) {
    balloon.style.backgroundColor = "red";
  } else if (x == 3) {
    balloon.style.backgroundColor = "green";
  } else if (x == 4) {
    balloon.style.backgroundColor = "yellow";
  }

  document.getElementById("game").appendChild(balloon);
  if (j == 8) {
    document.getElementById("game").appendChild(lineBreak);
    j = 0;
  }
}

function popBalloon(balloonNumber) {
  let popBalloon = "red";
}
