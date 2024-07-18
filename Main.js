const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");

//show error function

const showError = (input , message) => {
        let parentElement = input.parentElement;
        parentElement.classList ='form-controler error';
        const small = parentElement.querySelector("small");
        const ErrorIcon = parentElement.querySelectorAll("i")[0];
        const SuccessIcon = parentElement.querySelectorAll("i")[1];
        ErrorIcon.style.visibility ='visible';
        SuccessIcon.style.visibility ='hidden';
        small.innerText = message;
    }
// show success input
const showSuccess = (input) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-controler success';
    const ErrorIcon = parentElement.querySelectorAll("i")[0];
    const SuccessIcon = parentElement.querySelectorAll("i")[1];
    
    ErrorIcon.style.visibility ='hidden';
    SuccessIcon.style.visibility ='visible';
}

//checking email

const checkEmail = (email) =>{
    const regularEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regularEx.test(email.value)){
        showSuccess(email);
    }
    else{
        showError(email,"Invalid Email");
    }
}

// checking password length
const checkPassword = (input, min , max) =>{
    if(input.value.length < min){
        showError(input, `password at least ${min} charactor`);
    }
    else if(input.value.length > max){
        showError(input, `maximum password is ${max} charactor`);
    }
}

//checking password similarity

function checkPS(Elements){
    // let parentElement = input.parentElement;
    // const small = parentElement.querySelector("small");
    // let password = document.getElementById("#password").value;
    // let confirmpassword = document.getElementById("#confirmPassword").value;

    // Elements.forEach((element) => {

    //     if(password.length !=0){
    //      if(password == confirmpassword){
    //          showSuccess(element);
    //      }
    //      else{
    //          showError(element , "password doesn't match")
    //      }
    //     }
    //     else{
    //         alert('password matched');
    //     }
    // })


}

//checking empty input
const checkEmpty =(elements)=>{
    
    elements.forEach((element) =>{
        if(element.value === ""){
            showError(element , "input required:");
        }
        else{
            showSuccess(element)
        }
    });
}

form.addEventListener("submit" , (event) =>{
    event.preventDefault();

    checkEmpty([username,email,password,confirmpassword]);
    checkEmail(email);
    checkPassword(password,5,10);
    checkPassword(confirmpassword,5,10);
    checkPS([password , confirmpassword]);
    
   
})

