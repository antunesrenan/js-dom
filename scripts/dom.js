 /* for input to be calculated by pressing 'Enter' on keyboard a.k.a. 'keydown' event */
 function handleCostKeyDown() {
    /* to check which event to refer to, use console.log(event) command */
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function calculateTotal() {

    const inputElement = document.querySelector('.js-cost-input');
    /* for 'input' in HTML we need to use .value instead of .innerHTML */
    let cost = Number(inputElement.value);
    /* whenever we get a value from the DOM it will be a string. Hence we need to change to integer for calculation  */

    if (cost < 40) {
        cost += 10;
    }

    document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}`;

}
function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerHTML === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}