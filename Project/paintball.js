window.onscroll = function() 
{myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky")
  } else 
  {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function() 
{myFunction()
};
        
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction()
 {
  if (window.pageYOffset >= sticky)
   {
    navbar.classList.add("sticky")
  } 
  else 
  {
    navbar.classList.remove("sticky");
  }
}


function openForm()
 {
document.getElementById("popupForm").style.display = "block";
}
function closeForm() 
{
document.getElementById("popupForm").style.display = "none";
}

function validateForm()
 {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") 
  {
    alert("Name must be filled out");
    return false;
  }
}

let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };