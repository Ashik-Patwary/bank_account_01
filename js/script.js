//**************Log ing from js code***************************


const logInBtn = document.getElementById('login_btn');

logInBtn.addEventListener('click', function(){
    
    const phoneNumber = 123456789;
    const pinNumber = 1234;
  
    const userPhone = document.getElementById('phone_number').value;
    const userPin = document.getElementById('pin_number').value;

    const userPhoneNumber = parseInt(userPhone);
    const userPinNumber = parseInt(userPin);

    if(userPhoneNumber === phoneNumber && userPinNumber === pinNumber){
        window.location.href='home.html'
    }else{
        alert('Try again');
    }
});

//**************Log ing from js code end***************************



//***************add money code start*************************





//***************add money code end***************************