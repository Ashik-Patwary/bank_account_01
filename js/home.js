//****************Pop up model open Code start**********************
const openPopUPBtn = document.getElementById('add_money_popup');
const cashOutPopupBtn = document.getElementById('cash_out_popup');
const transactionPopupBtn = document.getElementById('transaction_popup_btn'); 
const popUpBox = document.getElementById('popup');
const cashOutPopup = document.getElementById('Cash_out_popup');
const transactionPopup = document.getElementById('transaction_popup');



function popupModelAddCash() {
    popUpBox.classList.remove('hidden');
    cashOutPopup.classList.add('hidden');
    transactionPopup.classList.add('hidden');
    
}


function popupModelCashOut() {
    popUpBox.classList.add('hidden');
    cashOutPopup.classList.remove('hidden');
    transactionPopup.classList.add('hidden');
    
}


function popupModelTransactionPopup() {
    popUpBox.classList.add('hidden');
    cashOutPopup.classList.add('hidden');
    transactionPopup.classList.remove('hidden');
    
}



openPopUPBtn.addEventListener('click', function(){
   popupModelAddCash()
});

cashOutPopupBtn.addEventListener('click', function(){
    popupModelCashOut()
});

transactionPopupBtn.addEventListener('click', function(){
    popupModelTransactionPopup()
});

const closePopUpBtn = document.querySelectorAll('.close_popup_btn');


closePopUpBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        popUpBox.classList.add('hidden');
        cashOutPopup.classList.add('hidden');
        transactionPopup.classList.add('hidden');
    });
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