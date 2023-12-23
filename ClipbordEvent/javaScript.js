
const inputVal = document.querySelector('input');
const p =document.querySelector("p");

inputVal.addEventListener('copy',function(e){
    console.log('You Have Copy Value');
    p.innerHTML= "Copy Value: "+ e.target.value;
})
inputVal.addEventListener('cut',function(e){
    console.log('You Have cut Value');
    p.innerHTML="Cut Value: "+e.target.value;
})
inputVal.addEventListener('paste',function(e){
    debugger
    console.log('You Have paste Value');
    p.innerHTML="paste Value: "+e.target.value;
})







