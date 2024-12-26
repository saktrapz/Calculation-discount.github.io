const percentage = [
    { "id": 1, "name": "10%", "value": 10 },
    { "id": 2, "name": "15%", "value": 15 },
    { "id": 3, "name": "20%", "value": 20 },
    { "id": 4, "name": "25%", "value": 25 },
    { "id": 5, "name": "30%", "value": 30 },
    { "id": 6, "name": "35%", "value": 35 },
    { "id": 7, "name": "40%", "value": 40 },
    { "id": 8, "name": "45%", "value": 45 },
    { "id": 9, "name": "50%", "value": 50 },
    { "id": 10, "name": "60%", "value": 60 },
    { "id": 11, "name": "70%", "value": 70 },
    { "id": 12, "name": "80%", "value": 80 },
];

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
        
        //calulation
        // block.addEventListener('click', () => {
        //     const value = block.getAttribute('data-value');
        //     alert(`The value of ${item.name} is: ${value} and ${full_price}`);
        // });
    });
}

function calculation(){
    const full_price = document.getElementById('full_price');
    const allBtn = document.querySelectorAll('.block');
    const discount_price = document.getElementById('discount_price');
    allBtn.forEach((button, index) => {
        button.addEventListener('click', function() {
            const percent = button.getAttribute('data-value');
            const fullPriceValue = parseFloat(full_price.value)
            const percent_calculate = (fullPriceValue * percent)/100;
            // const last_price = parseFloat(full_price - percent_calculate);
            const last_price = fullPriceValue - percent_calculate;
            console.log(percent_calculate, 'and', last_price)
            discount_price.value = last_price.toFixed(2);
        });
    });
}

discountList(percentage);
calculation();

// var btn = document.querySelectorAll('.block')
// var value = document.querySelectorAll('.block p');
// btn.forEach((button, index) => {
//     button.addEventListener('click', function() {
//         console.log(`You clicked Button ${index + 1}!`);
//         console.log(value)
//     });
// });
