window.onload = function(){
	setTimeout(function(){
	var loader = document.getElementsByClassName("loader")[0];
	loader.className="loader fadeout" ;
	setTimeout(function(){loader.style.display="none"},300)
	},1000)
}
// let aside_active = document.getElementById("aside_active");
//     let menu_toggle = document.getElementById("menu_toggle");
//     menu_toggle.addEventListener('click', ()=>{
//         aside_active.classList.toggle("active");
//     });
//     let body = document.getElementById('body');
//     body.addEventListener('click',function(){
//       aside_active.classList.add("active");
//       menu_toggle.classList.remove('active');
//     });
//     menu_toggle.addEventListener('click', function(){
//       menu_toggle.classList.toggle('active');
//     });

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //   var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("aside_active").style.left = "0";
    //   } else {
    //     document.getElementById("aside_active").style.left = "-270px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }

    
// Search Bar 
function myFunction() {
  var input, filter, ul, li, a, i, txtValue, search_box;
  search_box = document.querySelector(".search_box");
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  search_box.style.display = "block";
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            search_box.style.display = "block";
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
            if (input.value.length == 0) {
              search_box.style.display = "none"        
            }
        }
}
    // Form Submission
    let username = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    let send_message = document.getElementById('submit');
    if (username.value.length == 0 && email.value.length == 0 && message.value.length == 0) {
      send_message.classList.add('disabled')
      send_message.setAttribute('disabled','disabled');
    }
    username.addEventListener('input', ()=>{
      if (username.value.length > 0 && email.value.length > 0 && message.value.length > 0) {
      send_message.classList.remove('disabled');
      send_message.removeAttribute('disabled');
    }
      else{
      send_message.classList.add('disabled')
      send_message.setAttribute('disabled','disabled');
      }
    })
    email.addEventListener('input', ()=>{
      if (username.value.length > 0 && email.value.length > 0 && message.value.length > 0) {
      send_message.classList.remove('disabled');
      send_message.removeAttribute('disabled');
    }
      else{
      send_message.classList.add('disabled')
      send_message.setAttribute('disabled','disabled');
      }
    })
    message.addEventListener('input', ()=>{
      if (username.value.length > 0 && email.value.length > 0 && message.value.length > 0) {
      send_message.classList.remove('disabled');
      send_message.removeAttribute('disabled');
      }
      else{
      send_message.classList.add('disabled')
      send_message.setAttribute('disabled','disabled');
      }
    });
