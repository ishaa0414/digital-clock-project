function ClockStart(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    if(hours>=12){
        hours=hours-12;
        let am=document.getElementById('am');
        am.innerText="PM";
    }
    else{
        let am=document.getElementById('am');
        am.innerText="AM";
    }
   console.log(hours,minutes,seconds);
    let hrs=document.getElementById("hrs");
hrs.innerText=hours;
let min=document.getElementById("min");
min.innerText=minutes;
let sec=document.getElementById("sec");
sec.innerText=seconds;

}
setInterval(()=>{
    ClockStart();
},1000)