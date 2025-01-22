const percentage = [
    { "id": 0, "name": "10%", "value": 10 },
    { "id": 1, "name": "15%", "value": 15 },
    { "id": 2, "name": "20%", "value": 20 },
    { "id": 3, "name": "25%", "value": 25 },
    { "id": 4, "name": "30%", "value": 30 },
    { "id": 5, "name": "35%", "value": 35 },
    { "id": 6, "name": "40%", "value": 40 },
    { "id": 7, "name": "50%", "value": 50 },
    { "id": 8, "name": "60%", "value": 60 },
    { "id": 9, "name": "70%", "value": 70 },
    { "id": 10, "name": "80%", "value": 80 },
    { "id": 11, "name": "More", "value": 100 },
];
const full_price = document.getElementById('full_price');
const discount_input = document.getElementById('discount_input');
const latest_price = document.getElementById('last_price');
const discount_price = document.getElementById('discount_price');



function discountList(percentage) {
    const dataList = document.getElementsByClassName('discount-block')[0];
    percentage.forEach(item => {
        const block = document.createElement('div');
        block.className = 'block';

        const block_text = document.createElement('p');
        block_text.textContent = item.name; 

        // Store the value as a data attribute on the block
        block.setAttribute('data-value', item.value);

        // Append the <p> tag to the block
        block.appendChild(block_text);
        
        dataList.appendChild(block);

    });
}

function manualCalculate(){
    document.getElementById('calculateBtn').addEventListener('click', function(event){
        event.preventDefault()
        const percent_calculate1 = (parseFloat(full_price.value) * discount_input.value)/100;
        const last_price1 = parseFloat(full_price.value) - percent_calculate1;

        latest_price.value = last_price1.toFixed(2)
        discount_price.value = '-' + percent_calculate1.toFixed(2)
    });
}

function calculation(){
    const allBtn = document.querySelectorAll('.block');
    const discount_form = document.getElementById('discount_form');
    var i = 1;


    allBtn.forEach((button, index) => {

        button.addEventListener('click', function() {
            const percent = button.getAttribute('data-value');
            const fullPriceValue = parseFloat(full_price.value)
            const percent_calculate = (fullPriceValue * percent)/100;
            const last_price = fullPriceValue - percent_calculate;
            if(percent == 100){
                if(i == 1){
                    discount_form.style.display = 'block'
                    discount_input.focus()
                    i = 0;
                }else{
                    discount_form.style.display = 'none'
                    i = 1;
                }
            }else{
                discount_price.value = '-' + percent_calculate.toFixed(2);
                latest_price.value = last_price.toFixed(2);
            }
        });
    });
    

}

discountList(percentage);
manualCalculate()
calculation();


