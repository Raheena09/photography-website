

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {AllFunction()};

function AllFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      console.log('at top');
    document.getElementById("top").style.padding = "50px 78px";
    document.getElementById("top").style.backgroundColor = "black";



  } else {
    console.log('at back');
    document.getElementById("top").style.padding = " 20px 78px;";
    document.getElementById("top").style.backgroundColor = "transparent";
    

  }
}


mybutton.addEventListener('click',function(){
    window.scrollTo(window.scroll({
        top: 0,
        behavior: 'smooth',
      }));
})
