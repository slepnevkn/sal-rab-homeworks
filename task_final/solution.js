function sendRequest(name, phone, address, goods, sum) {
  let data = {
    client: "",
    order: {},
    goods: []
  };

  let countOfGoods = goods.length;

  for (let i = 0; i < countOfGoods; i += 1) {
    console.log(goods[i].title, goods[i].count);
    let good = {
      title: goods[i].title,
      count: goods[i].count
    };
    data.goods.push(good);
  }
  // ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53
  let fullAddress = "ул. " + address.street + ", дом " + address.house + ", " + address.entrance + " подъезд" + ", " + address.floor + " этаж" + ", кв " + address.flat;
  
  data.order.address = fullAddress;
  console.log(fullAddress);
  data.order.sum = sum;
  data.client = name + " " + phone;

  let fullData = { data };

  let jsonData = JSON.stringify(fullData);

  return jsonData;
}

// Входящие данные для отправки в функцию, которые изменять НЕЛЬЗЯ:
let name = "Иван";
let phone = "+7(987)65-43-210";
let address = {
  street: "Ленина",
  house: "2",
  entrance: "4",
  floor: "5",
  flat: "53"
};
let goods = [
  {
    id: 1,
    title: "Пицца",
    count: 2,
    price: "500.00"
  },
  {
    id: 2,
    title: "Хачапури",
    count: 6,
    price: "800.00"
  }
];
let sum = 900;

// Вызов функции
let result = sendRequest(name, phone, address, goods, sum);

// Вывод результата в консоль
console.log(result);