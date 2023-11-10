const userName = document.querySelector('#userName')
const score = document.getElementById('scor');
let  hScore = document.getElementById('hiscore');
const again = document.getElementById('again')
const btwUnderline = document.querySelector('.betwwn')
const para = document.getElementById('para1')
const guess = document.querySelector('#guess')
const container = document.querySelector('#countainer')
const vdeo = document.getElementById('videos')
const imge = document.getElementById('img2')
const heading = document.getElementById('"heading')

// function answerhandler(){}
//     score.textContent = userName.value
//     if(userName.value == ""){ 
//      alert("Please enter a valid number")}
//    else{
//         const random = Math.floor(Math.random()*20)+1;
// console.log(random);
// if (userName.value == random){
// para.textContent= userName.value
// again.textContent = "won"
// guess.textContent = "javab bilkul drust hai"
// console.log('hogya')
// }else{
//     para.textContent = "?"
//     again.textContent = "again!"
   
//    }
//    if(userName.value < 10){
//     guess.innerText = " Too low!"
//    }else{
//     guess.innerText = "Too high!"
//    }
//    if(userName.value > 20){
//     alert("Numbers should be less than 20")
//    }
//    if(userName.value){
//     hScore.textContent = (userName.value + 3) 
//    }
//    userName.value = ""
// }


function myHandler(){
  let sc =  score.textContent -= 5                                                        
   if(userName.value == ""){ 
    alert("Please enter a valid number")
   }else{  
   const randomNum =Math.floor(Math.random() * 20) + 1;

   if(userName.value == randomNum){
   
     para.textContent = userName.value
     again.src = "R (1).png"
     imge.src = "R.png"
     container.style.backgroundColor = "green"
    const audio = document.createElement('audio');
     audio.setAttribute('src', 'Kbc - Right Answer Sound.mp3');
     audio.play();
    
   }else{

    para.textContent = "?"
    again.src = "try-removebg-preview.png"
    container.style.backgroundColor = "red"
    const adi = document.createElement('audio');
    adi.setAttribute('src', 'Milena Wrong Answer.mp3');
    adi.play();

console.log(randomNum);
    
   }
   if(userName.value < 10){
    guess.innerText = " Too low!"
   }else{
    guess.innerText = "Too high!"
   }
   if(userName.value > 20){
    alert("Numbers should be less than 20")
   }
   if(userName.value){
    hScore.innerHTML-= 1
   }
}
   userName.value = ""
   
}
