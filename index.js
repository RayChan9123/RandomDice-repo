var rndNum1 = Math.floor(Math.random() * 6 ) + 1;
document.querySelector("img.img1").setAttribute("src", `images/dice${rndNum1}.png`)

var rndNum2 = Math.floor(Math.random() * 6 ) + 1;
document.querySelector("img.img2").setAttribute("src", `images/dice${rndNum2}.png`)

if (rndNum1 > rndNum2)
{
  document.querySelector("h1").innerHTML = "Player 1 Win ! 🚩";
}
else if (rndNum1 < rndNum2)
{
  document.querySelector("h1").innerHTML = "Player 2 Win ! 🚩";
}
else
{
  document.querySelector("h1").innerHTML = "That is a Draw!!!";
}

setTimeout("location.reload(true)", 5000)













// var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
// document.querySelector("img.img1").setAttribute("src",`images/dice${randomNumber1}.png`);
//
// var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
// document.querySelector("img.img2").setAttribute("src",`images/dice${randomNumber2}.png`);
//
// if (randomNumber1 == randomNumber2)
// {
//   document.querySelector("h1").innerHTML = "DRAW !";
// }
// else if (randomNumber1 > randomNumber2)
// {
//   document.querySelector("h1").innerHTML = "Player 1 Wins !🚩";
// }
// else
// {
//   document.querySelector("h1").innerHTML = "Player 2 Wins !🚩";
// }
//
// setTimeout("location.reload(true);", 5000)
