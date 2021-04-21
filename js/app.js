const nav = document.querySelector('.nav-container')
const mybars = document.querySelector('#trigger')
const triger2 = document.querySelector('#trigger2')
const mylist = document.querySelector('.mylist')
const tayp = document.querySelector('.type')



triger2.addEventListener('click', () => {
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



// let list = document.querySelector('.mylist')
// let mylistChild = list.getElementsByTagName("a")

// for (let i = 0; i < mylistChild.length; i++){
//     mylistChild[i].addEventListener('click', () => {
//         list.getElementsByClassName('active')[0].classList.remove('active')
//         mylistChild[i].classList.add('active')
//     })

   
// }

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


// let tabHeader = document.getElementsByClassName("tab-header")[0];
// let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
// let tabBody = document.getElementsByClassName("tab-body")[0];

// let tabsPane = tabHeader.getElementsByTagName("div")[0];
// const photography = document.querySelector('.photography')
// const hobbies = document.querySelector('.hobbies')
// const skills = document.querySelector('.skills')
// const bts = document.querySelector('.bts')

// for(let i = 0; i < tabsPane.length; i++){
//     tabsPane[i].addEventListener('click', () => {
//         // tabs active
//         tabHeader.getElementsByClassName("active")[0].classList.remove('active');
//         tabsPane[i].classList.add("active");

//         tabBody.getElementsByClassName("active")[0].classList.remove("active");
//         tabBody.getElementsByTagName("div")[i].classList.add('active')

//         if(photography.classList.contains('active')){
//             document.getElementsByClassName('tabs')[0].style.height = "800px"
//         }
//         if(hobbies.classList.contains('active')){
//           document.getElementsByClassName('tabs')[0].style.height = "400px"
//         }
//         if(skills.classList.contains('active')){
//           document.getElementsByClassName('tabs')[0].style.height = "800px"
//         }
//         // if(photography.classList.contains('active')){
//         //     document.getElementsByClassName('photography')[0].style.background = "red"
//         // }
       
//     });
// }

  window.addEventListener('scroll', () => {
    
    var reveals = document.querySelector('.projects')
    var windowHeight =  window.innerHeight;
    var revealTop = reveals.getBoundingClientRect().top;
    var revealPoint = 420;

    if(revealTop < windowHeight - revealPoint){
      const numbers = document.querySelectorAll('.number');
      numbers.forEach((num) => {
        const incrementCounter = () => {
            const targetNumber = +num.getAttribute('data-target-number');
            const currentNumber = parseInt(num.innerText);
    
            if(currentNumber < targetNumber){
                num.innerText = Math.floor(currentNumber + targetNumber / 100);
                setTimeout(incrementCounter, 70)
            }
            else{
                num.innerText = targetNumber.toLocaleString();
            }
        }
        incrementCounter();
    });
    }
})





// const tab = document.querySelectorAll('.tab');


// tab.forEach( i => {
//     i.addEventListener('click', () => {
//         const tabnav = document.getElementsByClassName('tab-nav')[0];
//         tabnav.getElementsByClassName("active")[0].classList.remove('active')
//         i.classList.add('active');        
//     })

   
// })