const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}


//typewriter effect

const textDisplay = document.getElementById('text');
const phrases = ["Yusra Ahmed✨ ", 'Fullstack Developer'];
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('');
  
  if(i < phrases.length) {

    if(!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++    
        textDisplay.innerHTML = currentPhrase.join('');
    

    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
       textDisplay.innerHTML = currentPhrase.join(''); 
    }


    if(j == phrases[i].length){
      isEnd = true
      isDeleting = true

    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if(i == phrases.length) {
        i = 0
      }
    }
    

  }
  const speedUp = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (300 - 200) + 200
  const time = isEnd ? 2000 : isDeleting ? speedUp :normalSpeed
  setTimeout(loop, time)
}
loop()