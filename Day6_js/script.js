

//using getElementsByTagName
// const s2 = document.getElementsByTagName('section');
// const secondSection = s2[1];
// const title =  secondSection.getElementsByTagName('h4');
// title[0].innerText = 'js Callback'

// using query Selector
// const title = document.querySelectorAll('section')[1].querySelector('h4');
// title.innerText = "Js callback";
// title.style.color = 'brown';
// title.className = 'cs1';
// title.setAttribute('name','ashish');

//adding a new p tag in a section dom (creating and attaching)
// const  p = document.createElement('p');
// const se =  document.getElementsByTagName('section')[0];
// p.textContent = 'Hi i am new <p> tag'
// se.appendChild(p);

// se.append('hello world!')
// se.appendChild('hello world!') it will not work

// Node v element 
// html collection vs Array

// events
// function inputClicked() {
//     console.log('inputClicked');  
// }

// function inputKeyDown(e) {
//     console.log('inputKey Down');
//     console.log(e.target.value);
    
// }
// function inputChange(e) {
//     console.log('inputChange',e);
//     console.log(e.target.value); 
    
// }


function handleUserName(e) {
    console.log('Name:', e.target.value);
    
}
function handleUserAge(e) {
    console.log('Age:', e.target.value);
    
}
function handleSubmit(e) {
    e.preventDefault();
    console.dir(e.target);
    const username = e.target[0].value
    const userage = e.target[1].value
    console.log(username, userage);

    if (userage>30) {
        document.body.append("Please enter less age ");
        
    } else {
        document.body.append("validation Successful")
    }
    
}
