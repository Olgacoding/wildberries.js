const getGoods = function () {
    // console.log('getGoods');
    fetch('/db/db.json')
}
getGoods()

// getGoods.js:3 Fetch API cannot load file:///C:/db/db.json. URL scheme "file" is not supported.
// getGoods @ getGoods.js:3
// 17:34:27.629 getGoods.js:3  Uncaught (in promise) TypeError: Failed to fetch
    // at getGoods (getGoods.js:3)
    // at getGoods.js:5 - такая у меня в консоле ошибка

    // network > all> а name и headers, как у Вас на скриншоте нету(