'use strict'

{
  const productName = 'Яблоко';
  let productQuantity = 13;
  const productCategory = 'Фрукт';
  let productCost = 200;

  // console.log('Название товара', productName);

  // console.log('Общая сумма', productQuantity * productCost);
}

{
  const productName = 'Батат';
  let productQuantity = 25;
  const productCategory = 'Овощ';
  let productCost = 300;

  // console.log('Название товара', productName);

  // console.log('Общая сумма', productQuantity * productCost);
}

{
  const productName = prompt('Наименование товара', '');
  let productQuantity = +prompt('Количество товара', '');
  const productCategory = prompt('Категория товара', '');
  let productCost = +prompt('Цена товара', '');


  if (!isNaN(productQuantity) && !isNaN(productCost)) {
    console.log(`На складе ${productQuantity} единицы товара "${productName}" на сумму ${productQuantity * productCost} деревянных`);
  } else {
    console.log('Вы ввели некорректные данные');
  }

}