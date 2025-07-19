
// function turlari
// setInterval 
// setTimeout

const hour = document.querySelector('#hour')
const minut = document.querySelector('#minut')
const second = document.querySelector('#second')



setInterval(()=>{
const fullTime = new Date ()    
hour.innerHTML=fullTime.getHours()
minut.innerHTML=fullTime.getMinutes()
second.innerHTML=fullTime.getSeconds()
 
} ,1000)

 





