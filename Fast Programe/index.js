

const lebels = document.createElement("label");
lebels.innerHTML= "Name : ";
lebels.style.marginRight = "10px"
lebels.style.fontSize = "30px"
lebels.setAttribute('for','NameLebels');//lebels
const inputBo = document.createElement('input');
inputBo.setAttribute('placeholder','Enter Name ');
inputBo.setAttribute('id','NameLebels');
inputBo.style.marginRight = '40px';//input box

const lebels2 = document.createElement("label");
lebels2.innerHTML= "User Name : ";
lebels2.classList.add('lebelStyle');
lebels2.setAttribute('for','UserName');//lebels
const InputAddress = document.createElement('input');
InputAddress.setAttribute('placeholder','User Name')
InputAddress.setAttribute('id','UserName');//input box

const lebels3 = document.createElement("label");
lebels3.innerHTML= "Contact : ";
lebels3.classList.add('lebelStyle');
lebels3.setAttribute('for','ContactLebel');//lebels
const InputContact = document.createElement('input');
InputContact.setAttribute('placeholder','Contact ');
InputContact.setAttribute('id','ContactLebel');
InputContact.style.marginRight = '40px';//input box

const lebels4 = document.createElement("label");
lebels4.innerHTML= "About : ";
lebels4.style.marginRight = "10px"
lebels4.style.fontSize = "30px"
lebels4.setAttribute('for','AboutLebels');//lebels
const InputAbout = document.createElement('input');
InputAbout.setAttribute('placeholder','About ');
InputAbout.style.marginRight= '40px';
InputAbout.setAttribute('id','AboutLebels');//input box

const ButtonInfo = document.createElement('button');//button Is here
ButtonInfo.classList.add('Addbutonn');
ButtonInfo.style.marginTop= ('30px');
ButtonInfo.addEventListener('click',function(){
    const NameValue = document.getElementById('NameLebels').value;
    const UsrNameValue = document.getElementById('UserName').value;
    const ContactValue = document.getElementById('ContactLebel').value;
    const AboutValue = document.getElementById('AboutLebels').value;
    console.log(NameValue,UsrNameValue,ContactValue,AboutValue);
    const Output = document.createElement('li');
    Output.innerHTML = 'Your Name : ' + NameValue;

    const UserNameOut = document.createElement('li');
    UserNameOut.textContent = "User Name : " + UsrNameValue;

    const ContatOut = document.createElement('li');
    ContatOut.textContent = "Contact Number : "+ ContactValue;

    const AboutOut = document.createElement('li');
    AboutOut.textContent = "Your About : " + AboutValue;
    
    const GetId = document.getElementById('MainDivId');
    GetId.append(Output);
    GetId.append(UserNameOut);
    GetId.append(ContatOut);
    GetId.append(AboutOut);


})
ButtonInfo.innerHTML = 'Add Data';


FormId.appendChild(lebels);
FormId.append(inputBo); //the end
FormId.appendChild(lebels2);
FormId.append(InputAddress);//the end
FormId.appendChild(lebels3);
FormId.append(InputContact);//the end
FormId.appendChild(lebels4);
FormId.append(InputAbout);//the end

FormId.append(ButtonInfo);//button

// const  Items = document.querySelectorAll('ul > li:nth-child(1)')
// console.log(Items[0].textContent)
// console.log(element.getAttribute('data'));

// const StoreTagName = document.getElementsByTagName('ul');
// console.log(StoreTagName);

// const Result = UlIdName.getAttribute('data');
// console.log(UlIdName.getAttribute('data'));
// console.log(UlIdName.setAttribute('order-placed','Panding'));

// console.log(UlIdName.getAttribute('order-placed'));
// console.log(UlIdName.hasAttribute('order-placed'));
// console.log(UlIdName.attributes);
// System.out.print('hello World');

// const CardDiv = document.createElement('div');
// CardDiv.classList.add("card");
// const CardHeader = document.createElement('div');
// CardHeader.classList.add('card-header');
// CardHeader.innerHTML = "Card Header";
// CardDiv.append(CardHeader);
// const HeadDiv = document.createElement('div');
// HeadDiv.classList.add('card-body');
// HeadDiv.classList.add('p-0');
// const iMage = document.createElement('img');
// iMage.setAttribute("src", "two.jpg");
// iMage.innerHTML= "Body";
// HeadDiv.appendChild(iMage);
// CardDiv.appendChild(HeadDiv);
// const CardFooter = document.createElement('div');
// CardFooter.classList.add('card-footer');
// CardFooter.innerHTML = "Card Footer";
// CardDiv.append(CardFooter);
// document.getElementById('MainDivId').appendChild(CardDiv);


const TestInput = document.querySelector('input[name=name]');
TestInput.addEventListener('change',Mymothod);
function Mymothod(e){
    console.log(e.target.value);
}

const ChackBox = document.querySelectorAll('input[name=Program]');
 Array.from(ChackBox).map((ProG)=>{
    ProG.addEventListener('change',ProgrameMethod);
 });
 function ProgrameMethod(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
 }

const SElectOpti = document.querySelector('#Department');
SElectOpti.addEventListener('change',HandelDepartment);
function HandelDepartment(e){
    console.log(e.target.value);
}

// console.log(ChackBox);

// console.log(TestInput);