window.onload = function(){
    window.setInterval(
     function(){
         let d = new Date();
         document.getElementById("clock").innerHTML = d.toLocaleTimeString();
     }
   , 1000);
 }
