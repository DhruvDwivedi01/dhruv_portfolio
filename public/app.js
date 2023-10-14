const contactForm = document.querySelector('.contact-form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let country = document.getElementById('country');
let description = document.getElementById('description');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('Submit Clicked')
    let formData={
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        country: country.value,
        description: description.value
    }
    // console.log(formData);
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type' , 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent');
            fname.value='';
            lname.value='';
            email.value='';
            country.value='';
            description.value='';
        }
        else{
            alert('Something went wrong');
        }
    }

    xhr.send(JSON.stringify(formData))

})