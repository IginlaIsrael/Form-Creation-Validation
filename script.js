document.addEventListener('DOMContentLoaded', function(e){
    const form = document.getElementById('#registration-form');
    const feedbackDiv = document.getElementById('#form-feedback');
    const name = document.getElementById('username').value.trim();
    const mail = document.getElementById('#email').value.trim();
    const passWord = document.getElementById('#password').value.trim();
    
    let isValid = true;
    //Add message error array here
    form.addEventListener('submit', function(event){
        event.preventDefault();
        if(username.length < 3){
            isValid = false;
            //Add error message
        }
        if(!email.includes('@'&&'.')){
            isValid = false;
            //Add error message
        }
        if(passWord.length <= 7){
            isValid = false;
            //Add error messahe here
        }
        feedbackDiv.style.display = "block";
        if(isValid == true){
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else{
            feedbackDiv.style.color = "#dc3545";
        }
    })
});

