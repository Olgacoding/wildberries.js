const getGoods = function () {
    const links = document.querySelectorAll('.navigation-link')

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
    const getData = (value, category) => {
        fetch('/db/db.json')
            // .then(function (response) {
            //     // console.log(response);
            //     return response.json()
            // })
            // .then(function (data) {
            //     console.log(data)
            // })

            .then((res) => res.json())
            // console.log(response);
            .then((data) => {
                // console.log(data)
                // перебор массива filter
                const array = category ? data.filter((item) => item[category] === value) : data

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

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const linkValue = link.textContent
            const category = link.dataset.field

            getData(linkValue, category)
        })
    })
    if (localStorage.getItem('goods') && window.location.pathname === "/goods.html") {
        renderGoods(JSON.parse(localStorage.getItem('goods')))
    }

    localStorage.setItem('goods', JSON.stringify({ name: 'all' }))
    // сохранили в локалсторе обьект
    localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5]))
    // сохранили массив
    // console.log(localStorage.getItem('goods'));
    const goods = JSON.parse(localStorage.setItem('goods'));
    console.log(goods)

    localStorage.removeItem('goods')
    console.log(localStorage)
}
getGoods()

