//****************Pop up model open Code start**********************
const openPopUPBtn = document.getElementById('add_money_popup');
const popUpBox = document.getElementById('popup');
const closePopUpBtn = document.getElementById('close_popup_btn');


function popupModel() {
    popUpBox.classList.remove('hidden');
    
}

function closePopupBox (){
    popUpBox.classList.add('hidden');
}


openPopUPBtn.addEventListener('click', function(){
    popupModel()
});

closePopUpBtn.addEventListener('click', function(){
    closePopupBox ()
});
//****************Pop up model open Code end**********************



//****************money add section code start*********************

const moneyAddBtn = document.getElementById('add_money_btn');


const validPinNumber = 1234;

moneyAddBtn.addEventListener('click', function(e){
    e.preventDefault();
    const popUpBox = document.getElementById('popup');
    const userBank = document.getElementById('user_bank').value;
    const userAccountNumber = document.getElementById('account_number').value;
    const userMoney = parseInt(document.getElementById('add_amount').value);
    const userPin = parseInt(document.getElementById('user_pin').value);

    const oldBalance = parseInt(document.getElementById('balance').innerText);

    if(userAccountNumber.length < 11){
        alert('provide valid account number');
        return;
    }

    if(userPin !== validPinNumber){
        alert('wrong pin');
        return;
    }

    const updateBalance = userMoney + oldBalance;

    document.getElementById('balance').innerText = updateBalance;

    popUpBox.reset();
});

//****************money add section code End*********************