






const Parag = document.querySelector('p');
const Div = document.querySelector('#divOne');
const DivTwo = document.querySelector('#divTwo');


Parag.addEventListener('dragstart',function(e)
{
    e.dataTransfer.setData("Text", e.target.id);
    console.log("DragStart");
});


Div.addEventListener('dragover',function(e){
    e.preventDefault();
});
Div.addEventListener('drop',function(e){
    let id = e.dataTransfer.getData("Text");
    Div.appendChild(document.getElementById(id));
    e.preventDefault();
});







DivTwo.addEventListener('dragover',function(e){
    e.preventDefault();
});
DivTwo.addEventListener('drop',function(e){
    let id = e.dataTransfer.getData("Text");
    DivTwo.appendChild(document.getElementById(id));
    e.preventDefault();
});




