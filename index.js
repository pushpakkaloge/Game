
// Button press



document.querySelector(".button").addEventListener("click", clickEvent);

// keyboard press
// document.addEventListener("keypress",clickEvent);

rand=0;
function clickEvent(){
  if (rand === 4){
    rand =0;
   }
 var audio= new Audio("sounds/button-09.mp3");
  audio.play();
  rand=rand+1;
  let image1 = "images/image"+rand+".png";
   $("img")[1].setAttribute("src", image1 );
   globalThis.rand;
  };


// Falling Balls Animation:
function timeBreak(){

    ballRandom = Math.floor(Math.random()*4)+1;
    let image = "images/ball"+ballRandom+".jpg";
    globalThis.ballRandom;
     $("img")[0].setAttribute("src", image );
     slidedown();


     i++;

     if (i<500){

       Myloop();

     }
}



var i=0;
function Myloop(){

     setTimeout(timeBreak , 2200);
};
count=0;
Myloop();



function slidedown(){
  $(".ballimage").css({"margin-top":"0px"});
  $(".ballimage").animate({marginTop: "450px"},2000,"linear",setTimeout(Score ,2100 ));


};


function Start(){
  alert("Refresh Website To Play Again __Thank You")
}

function Score(){
  console.log(rand)
  console.log(ballRandom)
  if(rand === ballRandom){
    count++;
    document.getElementById("h1").innerHTML=count;
}else{
    document.getElementById("h1").innerHTML="ERROR !";
      Start();
}

}
