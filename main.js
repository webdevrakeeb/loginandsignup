function timeClock(){
  const d = new Date();
  
  var h = d.getHours()
  var m = d.getMinutes()
  var s = d.getSeconds()
  
  document.getElementById("clock").innerHTML=h+":"+m+":"+s
  setTimeout(timeClock,1000)
}
timeClock()