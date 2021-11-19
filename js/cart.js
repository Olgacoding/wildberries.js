const cart = function () {
    const cartBtn = document.querySelector('.button-cart');
    // const cart = document.querySelector('#modal-cart');
    const cart = document.getElementById('modal-cart');
    const modalClose = cart.querySelector('.modal-close');


    // console.log(cartBtn);
    // console.dir(cartBtn);

    // cartBtn.onclick = function () {
    //     console.log('click');
    // }

    // cartBtn.onclick = function () {
    //     console.log('click1'); - сработала 2я ф-я,  а первая - нет
    // }




    cartBtn.addEventListener('click', function () {
        cart.style.display = 'flex';
    })

    // cartBtn.addEventListener('click', function () {
    //     console.log('click1');
    // })

    modalClose.addEventListener('click', function () {
        // cart.style.display = 'none';
        cart.style.display = '';
    })
}
// обьявили функцию и сразу

cart()
// вызвали её
