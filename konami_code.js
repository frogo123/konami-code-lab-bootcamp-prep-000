var i = 0;
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//const input = document.body;
 function init(){
   let res = 0; 
document.body.addEventListener('keydown', function(e) {
  console.log(e.which)
  var num = parseInt(e.which || e.detail);
if (num === code[i]){
  if (i === code.length -1){
    alert("Bingo");
  }
  i++
}

else{
  i =  0;
}

})
}
init();
