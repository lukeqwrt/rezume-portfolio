const nav = document.querySelector('.nav-container')
const mybars = document.querySelector('#trigger')
const triger2 = document.querySelector('#trigger2')
const mylist = document.querySelector('.mylist')
const tayp = document.querySelector('.type')


mybars.addEventListener('click', () => {
    if(triger2.classList.contains('fa-bars')){
        triger2.classList.remove('fa-bars')
        triger2.classList.add('fa-close')
        
  
        mylist.classList.add('down')

    }else {
    triger2.classList.remove('fa-close')
    triger2.classList.add('fa-bars')

    mylist.classList.remove('down')
 
    
    }
})




window.addEventListener("scroll", function(){
    var header = document.querySelector('.nav-container');
    header.classList.toggle("sticky", window.scrollY > 0)
})


const texts = ["DEVELOPER", "DESIGNER", "GAMER"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 400)
})();