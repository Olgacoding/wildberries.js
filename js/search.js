const search = function () {
    // const cartBtn = document.querySelector('.button-cart');
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')

    console.log(input);
    console.log(searchBtn);

    input.addEventListener('input', (event) => {
        // console.log('ввод');
        console.log(event.target.value);
    })




    // searchBtn.addEventListener('click', () => {
    //     // console.log(searchBtn);
    //     console.log(input.value);
    // }) - HOMEWORK  - check homework and correct me please.
}

search()