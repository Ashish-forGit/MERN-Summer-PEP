document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let profilePicture = document.getElementById('profile-picture').files[0];
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;

    let formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';
    formContainer.style.border = '3px solid #ccc';
    formContainer.style.textAlign = 'left';

    let profilePictureURL = URL.createObjectURL(profilePicture);

    let idCard = document.createElement('div');
    idCard.className = 'id-card';

    let img = document.createElement('img');
    img.src = profilePictureURL;
    img.alt = 'Profile Picture';
    img.className = 'left-align'; 

    let nameElement = document.createElement('p');
    nameElement.innerHTML = `<strong>${name}</strong>`;
    nameElement.className = 'left-align'; 

    let dobElement = document.createElement('p');
    dobElement.innerText = `Date of Birth: ${dob}`;
    dobElement.className = 'left-align'; 

    let phoneElement = document.createElement('p');
    phoneElement.innerText = `Phone: ${phone}`;
    phoneElement.className = 'left-align'; 

    let emailElement = document.createElement('p');
    emailElement.innerText = `Email: ${email}`;
    emailElement.className = 'left-align'; 

    let addressElement = document.createElement('p');
    addressElement.innerText = `Address: ${address}`;
    addressElement.className = 'left-align'; 

    idCard.appendChild(img);
    idCard.appendChild(nameElement);
    idCard.appendChild(dobElement);
    idCard.appendChild(phoneElement);
    idCard.appendChild(emailElement);
    idCard.appendChild(addressElement);

    formContainer.appendChild(idCard);
});
