const timeel =document.querySelector('.time')
const startB=document.getElementById("start")
const stopB=document.getElementById("stop")
const resetB=document.getElementById("reset")

let seconds=0;
let intervel=null;

 startB.addEventListener("click",start)
 stopB.addEventListener("click",stop)
 resetB.addEventListener("click",reset)

function timer(){
    seconds++
    let hour=Math.floor(seconds/3600)
    let minute=Math.floor((seconds -(hour*3600))/60)
    let sec= seconds % 60
    // if (sec==0)minute++

    if (sec<10)sec="0"+sec;
    if (minute<10)minute="0"+minute;
    if (hour<10)hour="0"+hour;
	timeel.innerText = `${hour}:${minute}:${sec}`;
    // timeel.innerText= `${hour}:${minute}:${sec}`
}
// timer()

function start(){
    if(intervel){
        return
    }
        intervel=setInterval(timer,100)}
function stop(){
    clearInterval(intervel)
    intervel=null;
}
function reset(){
	stop()
    seconds=0;
    timeel.innerText="00:00:00"
}