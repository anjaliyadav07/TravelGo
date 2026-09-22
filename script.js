AOS.init({duration:1000,once:true});

const navbar=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
window.scrollY>60?navbar.classList.add("scrolled"):navbar.classList.remove("scrolled");
});

const tabs=document.querySelectorAll(".service");
tabs.forEach(tab=>{
tab.onclick=()=>{
tabs.forEach(t=>t.classList.remove("active"));
tab.classList.add("active");
};
});

const counters=document.querySelectorAll(".counter");
let started=false;
function startCounter(){
counters.forEach(counter=>{
const target=+counter.dataset.target;
function update(){
const current=+counter.innerText;
const inc=Math.ceil(target/150);
if(current<target){
counter.innerText=current+inc;
setTimeout(update,15);
}else{
counter.innerText=target.toLocaleString();
}
}
update();
});
}

window.addEventListener("scroll",()=>{
const stats=document.querySelector(".stats");
if(!stats)return;
if(window.scrollY>stats.offsetTop-500&&!started){
started=true;
startCounter();
}
});

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
topBtn.style.display=window.scrollY>500?"flex":"none";
});

topBtn.onclick=()=>{
window.scrollTo({top:0,behavior:"smooth"});
};

document.querySelectorAll(".nav-link").forEach(link=>{
link.onclick=()=>{
const nav=document.querySelector(".navbar-collapse");
if(nav.classList.contains("show")){
bootstrap.Collapse.getInstance(nav).hide();
}
};
});


const title=document.querySelector(".hero h1");
if(title){
const text=title.textContent;
title.textContent="";
let i=0;
(function type(){
if(i<text.length){
title.textContent+=text.charAt(i++);
setTimeout(type,60);
}
})();
}

window.addEventListener("scroll",()=>{
const hero=document.querySelector(".hero");
if(hero)hero.style.backgroundPositionY=window.scrollY*.4+"px";
});

const ripple=document.createElement("style");
ripple.innerHTML="@keyframes ripple{to{transform:scale(4);opacity:0}}";
document.head.appendChild(ripple);


/* ========= LOGIN ========= */

const loggedUser =
JSON.parse(localStorage.getItem("loggedInUser"));

if(loggedUser){

document
.getElementById("loginBtn")
.classList.add("d-none");

document
.getElementById("userMenu")
.classList.remove("d-none");

document
.getElementById("username")
.innerHTML=loggedUser.name;

}

function logout(){

localStorage.removeItem("loggedInUser");

location.reload();

}
const flights = [

{id:1,airline:"IndiGo",flight:"6E-534",from:"Delhi",to:"Mumbai",depart:"09:20 AM",arrive:"11:35 AM",duration:"2h 15m",price:5299,logo:"🟦"},
{id:2,airline:"Air India",flight:"AI-245",from:"Delhi",to:"Mumbai",depart:"01:10 PM",arrive:"03:25 PM",duration:"2h 15m",price:6499,logo:"🔴"},
{id:3,airline:"Vistara",flight:"UK-812",from:"Delhi",to:"Mumbai",depart:"06:00 PM",arrive:"08:15 PM",duration:"2h 15m",price:7399,logo:"🟣"},
{id:4,airline:"Akasa Air",flight:"QP-202",from:"Delhi",to:"Mumbai",depart:"08:30 PM",arrive:"10:45 PM",duration:"2h 15m",price:4899,logo:"🟠"},

{id:5,airline:"IndiGo",flight:"6E-771",from:"Delhi",to:"Goa",depart:"08:00 AM",arrive:"10:45 AM",duration:"2h 45m",price:6199,logo:"🟦"},
{id:6,airline:"Air India",flight:"AI-391",from:"Delhi",to:"Goa",depart:"03:20 PM",arrive:"06:05 PM",duration:"2h 45m",price:6999,logo:"🔴"},

{id:7,airline:"IndiGo",flight:"6E-822",from:"Delhi",to:"Bangalore",depart:"07:30 AM",arrive:"10:20 AM",duration:"2h 50m",price:5799,logo:"🟦"},
{id:8,airline:"Akasa Air",flight:"QP-310",from:"Delhi",to:"Bangalore",depart:"04:00 PM",arrive:"06:50 PM",duration:"2h 50m",price:5599,logo:"🟠"},

{id:9,airline:"Vistara",flight:"UK-645",from:"Delhi",to:"Hyderabad",depart:"09:40 AM",arrive:"12:00 PM",duration:"2h 20m",price:5299,logo:"🟣"},
{id:10,airline:"Air India",flight:"AI-902",from:"Delhi",to:"Hyderabad",depart:"05:00 PM",arrive:"07:20 PM",duration:"2h 20m",price:5899,logo:"🔴"},

{id:11,airline:"IndiGo",flight:"6E-111",from:"Mumbai",to:"Goa",depart:"09:00 AM",arrive:"10:15 AM",duration:"1h 15m",price:3199,logo:"🟦"},
{id:12,airline:"Akasa Air",flight:"QP-104",from:"Mumbai",to:"Goa",depart:"06:30 PM",arrive:"07:45 PM",duration:"1h 15m",price:2999,logo:"🟠"},

{id:13,airline:"Air India",flight:"AI-440",from:"Mumbai",to:"Bangalore",depart:"11:00 AM",arrive:"12:50 PM",duration:"1h 50m",price:4499,logo:"🔴"},
{id:14,airline:"Vistara",flight:"UK-980",from:"Mumbai",to:"Bangalore",depart:"08:00 PM",arrive:"09:50 PM",duration:"1h 50m",price:4899,logo:"🟣"},

{id:15,airline:"IndiGo",flight:"6E-500",from:"Kolkata",to:"Delhi",depart:"07:00 AM",arrive:"09:10 AM",duration:"2h 10m",price:4999,logo:"🟦"},
{id:16,airline:"Air India",flight:"AI-870",from:"Jaipur",to:"Mumbai",depart:"01:30 PM",arrive:"03:20 PM",duration:"1h 50m",price:4399,logo:"🔴"},
{id:17,airline:"IndiGo",flight:"6E-723",from:"Pune",to:"Bangalore",depart:"10:45 AM",arrive:"12:05 PM",duration:"1h 20m",price:3899,logo:"🟦"},
{id:18,airline:"Vistara",flight:"UK-300",from:"Ahmedabad",to:"Delhi",depart:"03:45 PM",arrive:"05:25 PM",duration:"1h 40m",price:4299,logo:"🟣"},
{id:19,airline:"Akasa Air",flight:"QP-777",from:"Lucknow",to:"Mumbai",depart:"08:30 AM",arrive:"10:45 AM",duration:"2h 15m",price:4799,logo:"🟠"},
{id:20,airline:"IndiGo",flight:"6E-989",from:"Chandigarh",to:"Delhi",depart:"09:30 AM",arrive:"10:30 AM",duration:"1h",price:2499,logo:"🟦"}

];

function searchFlights(){

if(!loggedUser){

alert("Please Login First");

window.location="login.html";

return;

}

let from=document.querySelectorAll(".form-control")[0].value||"Delhi";

let to=document.querySelectorAll(".form-control")[1].value||"Mumbai";

let result=flights.filter(f=>

f.from.toLowerCase()==from.toLowerCase()

&&

f.to.toLowerCase()==to.toLowerCase()

);

localStorage.setItem(

"searchResults",

JSON.stringify(result)

);

window.location="flights.html";

}