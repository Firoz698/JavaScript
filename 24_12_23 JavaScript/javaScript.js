

var MyDive = document.querySelector(".myDive");


let p2 = MyDive.children[0];
p2.textContent = "I am Heading One";

// MyDive.appendChild(p2)


var btnCl = document.querySelector(".btn");
var Messages = document.querySelector(".Message");
btnCl.addEventListener("click",MessageShowMethdo);

function MessageShowMethdo(){
    let count = 1;
    Messages.textContent=count;

    setInterval(()=>{
        count++;
        Messages.textContent=count;
    },1000)

    // Messages.textContent = "User Save Succesfull";
    // setTimeout(()=>{
    //     Messages.textContent = "";
    // },3000)
}

setTimeout(()=>{
    console.log("hello")
},3000);

setTimeout(displayF ,2000);

function displayF(){
    console.log("Display Functon Called")
}

