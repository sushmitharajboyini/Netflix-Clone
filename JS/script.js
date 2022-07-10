if(screen.orientation.type==="portrait-primary"){
    let w = screen.availWidth * 0.9;    
document.getElementsByClassName("changeWidth").style.width = w + "vw";
} 



var faq = document.getElementsByClassName("FAQ");
var answers = faq[0].getElementsByClassName("ans");
// function question(id) {
//     answers.forEach(function(div) {
//       if (div.id == id) {
//         console.log(id.classList.toggle('closed'));
//         // Toggle specified DIV

//         console.log(div);
//         console.log(id);
//         // div.style.display = id.style.display == "none" ? "block" : "none";
//       } else {
//         // Hide other DIVs
//         div.style.display = "none";
//       }
//     });
//   }
function ans1(){
    var ans = document.getElementById('ans1');
    var rot = document.getElementById('rotate1');
    rot.classList.toggle('rotate');
    ans.classList.toggle('closed'); 
}
function ans2(){
    var ans = document.getElementById('ans2');
    var rot = document.getElementById('rotate2');
    rot.classList.toggle('rotate');
    ans.classList.toggle('closed');    
}
function ans3(){
    var ans = document.getElementById('ans3');
    var rot = document.getElementById('rotate3');
    rot.classList.toggle('rotate');
    ans.classList.toggle('closed');    
}
function ans4(){
    var ans = document.getElementById('ans4');
    var rot = document.getElementById('rotate4');
    rot.classList.toggle('rotate');
    ans.classList.toggle('closed');    
}
function ans5(){
    var ans = document.getElementById('ans5');
    var rot = document.getElementById('rotate5');
    rot.classList.toggle('rotate');
    ans.classList.toggle('closed');    
}
function ans6(){
    var ans = document.getElementById('ans6');
    var rot = document.getElementById('rotate6');
    rot.classList.toggle('rotate');
    ans.classList.toggle('closed');    
}