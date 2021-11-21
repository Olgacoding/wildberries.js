const search = function () {
    // const cartBtn = document.querySelector('.button-cart');
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')


    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector('.long-goods-list')

        goodsContainer.innerHTML = ""

        goods.forEach(good => {
            const goodBlock = document.createElement('div')

            goodBlock.classList.add('col-lg-3')
            goodBlock.classList.add('col-sm-6')

            goodBlock.innerHTML = `
            <div class="goods-card">
                <span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
                <img src="db/${good.img}" alt="${good.name}" class="goods-image">
                <h3 class="goods-title">${good.name}</h3>
				<p class="goods-description">${good.description}</p>
                <button class="button goods-card-btn add-to-cart" data-id="${good.id}">
					<span class="${good.price}">$89</span>
				</button >
            </div >
    `
            goodsContainer.append(goodBlock)

            console.log(good);
        })

    }



    // console.log('getGoods');
    const getData = (value) => {
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data) => {
                // перебор массива filter
                const array = data.filter(good => {
                    return good.name.toLowerCase().includes(value.toLowerCase())
                })
                // if (category) {
                //     console.log('есть')
                // } else {
                //     console.log('нет')
                // }

                // category ? console.log('есть') : console.log('нет')
                // тернарный оператор
                localStorage.setItem('goods', JSON.stringify(array))
                // localStorage.setItem('goods', JSON.stringify(data))

                if (window.location.pathname !== "/goods.html") {
                    window.location.href = '/goods.html';
                } else {
                    renderGoods(array)
                }
                // window.location.href = '/goods.html';
                // console.log(window.location);
            })
    }





    console.log(input);
    console.log(searchBtn);

    input.addEventListener('input', (event) => {
        // console.log('ввод');
        console.log(event.target.value);
    })



    try {
        searchBtn.addEventListener('click', () => {
            // console.log(searchBtn);
            console.log(input.value);
        })
    } catch (e) {
        console.error('Уважаемый верстальщик, верните пожалуйста класс');
    }


    searchBtn.addEventListener('click', () => {
        // console.log(searchBtn);
        console.log();
        getData(input.value)
    })
    // HOMEWORK  - check homework and correct me please.
}

search()