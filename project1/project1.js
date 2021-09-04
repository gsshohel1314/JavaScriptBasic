let a;
let time;
let date;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  a = new Date();
  time = a.toLocaleTimeString();
  date = a.toLocaleDateString(undefined, options);
  // document.getElementById('time').innerHTML = time +" <br>on "+ date;
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
}, 1000);
