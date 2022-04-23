let a;
let date;
let time;
const options = {
    weekday: 'long',
    year:'numeric',
    month:'long',
    day:'numeric',
};

setInterval(() =>{

 a = new Date(); 
 date = a.toLocaleDateString(undefined, options);
// console.log(date); 

 time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
// console.log(time);

document.getElementById('time').innerHTML = time + "<br>On " + date;

},1000);