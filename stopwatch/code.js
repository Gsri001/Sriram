alert("stopwatch")
const times =document.querySelector('.watch .time')
const start=document.getElementById("start")
const stop=document.getElementById("stop")
const reset=document.getElementById("reset")

let sec=2222
let intervel=null
startB.addEventListener("click",start)
stopB.addEventListener("click",stop)
resetB.addEventListener("click",reset)

function timer(){
    sec++
    let hour=Math.floor(sec/3600)
    let minute=Math.floor((sec- (hr*3600))/60)
    let second= sec % 60

    if (second<10)sec="0"+sec;
    if (minute<10)sec="0"+sec;
    if (hour<10)sec="0"+sec;

    times.innertext="$(hour):$(minute):$(second)"
}
timer()
function start(){
    if(intervel){
        return
    }
        intervel=setInterval(timer,1000)}
function stop(){
    clearInterval(interval)
    intervel=null;
}
function reset(){
    seconds=0;
    times.innertext="00:00:00"
}
