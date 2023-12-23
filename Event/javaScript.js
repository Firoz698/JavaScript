
const inputData = document.querySelector('input');
inputData.addEventListener('focus',function(){
    console.log("focus Is called");
})

inputData.addEventListener('focusin',function(){
    console.log("focusin Is called");
})

inputData.addEventListener('focusout',function(){
    console.log("focusout Is called");
})

inputData.addEventListener('blur',function(){
    console.log("blur Is called");
})



// window.addEventListener('load',function(){
//     console.log("load");
// });


 
// const Detilesl = document.querySelector('details');

// Detilesl.addEventListener('toggle',function(e){
//     console.log(e.target.open); 
// });


// const OnMouseOve = document.querySelector('.good');

// OnMouseOve.addEventListener('dblclick',function(){
//     console.log('called');
// });
// console.log(OnMouseOve);







