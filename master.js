
function clickMasterButton(){
    //console.log('I am here hurray I got clicked')
    const getIncome=getElementValue('income-value');
    //console.log(getIncome);
    // Expenses
    const getFoodCost=getElementValue('food-cost');
    const getRentCost=getElementValue('rent-cost');
    const getClothesCost=getElementValue('clothes-cost');
    //console.log(getFoodCost ,getRentCost ,getClothesCost)
    const totalExpenses=getFoodCost+getRentCost+getClothesCost;
    //console.log(totalExpenses);
   setElementValue('total-expense',totalExpenses);
   const totalBalance=getIncome-totalExpenses;
   setElementValue('total-balance',totalBalance);


}



// Function to get value

function getElementValue(elementId){
    const getValue=document.getElementById(elementId);
    const valueElement=getValue.value;
    const pasreValueToNum=parseFloat(valueElement);
    return pasreValueToNum;
}

//Set function

function setElementValue(elementId,newText){
    const setElement=document.getElementById(elementId);
    setElement.innerText=newText;
    
}
