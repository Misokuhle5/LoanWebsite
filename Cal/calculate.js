const loanAmountSlider = document.getElementById('loan-amout-slider');
const loanInterestSlider = document.getElementById('loan-interest-slider');
const loanTenureSlider = document.getElementById('loan-tenure-slider');
const loanAmountValue = document.getElementById('loan-amout-value');
const loanInterestValue = document.getElementById('loan-interest-value');
const loanTenureValue = document.getElementById('loan-tenure-value');
const loanEMIValue = document.querySelector(".loan-emi .value");
const totalInterestValue = document.querySelector(".total-interest .value");
const totalAmountValue = document.querySelector(".total-amount .value");
const calculateBtn = document.querySelector(".calculate-btn");
//updating slider when it moves
loanAmountSlider.addEventListener('input',()=>{
    loanAmountValue.textContent = loanAmountSlider.value;
});
loanInterestSlider.addEventListener('input',()=>{
    loanInterestValue.textContent = loanInterestSlider.value;
});
loanTenureSlider.addEventListener('input',()=>{
    loanTenureValue.textContent = loanTenureSlider.value;
});
let loanAmount = parseFloat(loanAmountSlider.value);
let interestRate = parseFloat(loanInterestSlider.value);
let loanTenure = parseFloat(loanTenureSlider.value);
let interest = interestRate / 12 / 100;
const calculateEMI = () => {
    let emi = loanAmount * interest * (Math.pow(1 + interest, loanTenure) / (Math.pow(1 + interest, loanTenure) - 1));        
    return emi;  
};
 const updateDate = (emi) => {
    loanEMIValue.innerHTML = Math.round(emi);
    let totalAmount = Math.round(loanTenure * emi);
    totalAmountValue.innerHTML = totalAmount;
    let totalInterestPayable = Math.round(totalAmount - loanAmount);
    totalInterestValue.innerHTML = totalInterestPayable;
};
const init = () => {
    let emi = calculateEMI();
    updateDate(emi);
};
init();
const refreshInputValues = () => {
    loanAmount = parseFloat(loanAmountSlider.value);
    interestRate = parseFloat(loanInterestSlider.value);
    loanTenure = parseFloat(loanTenureSlider.value);
    interest = interestRate / 12 /100;
};
// calculate the loan details
calculateBtn.addEventListener('click',() =>{
    interestRate = parseFloat(loanInterestSlider.value); refreshInputValues();
    let emi = calculateEMI();
    updateDate(emi);
});
// calculate the interest details
calculateBtn.addEventListener('click',() =>{
    interestRate = parseFloat(loanInterestSlider.value); refreshInputValues();  
    let emi = calculateEMI();
    updateDate(emi);
});
// calculate the tenure details
calculateBtn.addEventListener('click',() =>{  
    loanTenure = parseFloat(loanTenureSlider.value); refreshInputValues();
    let emi = calculateEMI();
    updateDate(emi);
});