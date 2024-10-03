document.addEventListener('DOMContentLoaded', function(e){
    const form = document.getElementById('#registration-form');
    const feedbackDiv = document.getElementById('#form-feedback');
    const name = document.getElementById('username').value.trim();
    const mail = document.getElementById('#email').value.trim();
    const passWord = document.getElementById('#password').value.trim();
    
    let isValid = true;
    //Add message error array here
    let messages = [];
    form.addEventListener('submit', function(event){
        event.preventDefault();
        if(username.length < 3){
            isValid = false;
            //Add error message
            messages.push("Username has to be more than 2 characters long")
        }
        if(!email.includes('@'&&'.')){
            isValid = false;
            //Add error message
            messages.push("email doesn`t include an @ or .");
        }
        if(passWord.length <= 7){
            isValid = false;
            //Add error messahe here
            messages.push("Password has to be atleast 8 characters long");
        }
        feedbackDiv.style.display = "block";
        if(isValid == true){
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else{
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    })
});

