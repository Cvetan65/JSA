function Product(name, category, hasDiscount, price) {
  this.name = name;
  this.category = category;
  this.hasDiscount = hasDiscount;
  this.price = price;
}

let productArr = [
  new Product(
    'vowel Notebook Samsung Chromebook 4 N4020/4GB/32GB',
    'Notebooks & Equpiments',
    false,
    40
  ),
  new Product(
    'Notebook Mediacom SmartBook Edge 13 Intel Dual N3350/4GB/64GB',
    'Notebooks',
    true,
    35
  ),
  new Product(
    'Notebook Lenovo IP3 15-IML05 5205U 4GB/256GB SSD/15.6" HD LED AG/Platinium Grey/DOS',
    'Notebooks',
    true,
    28
  ),
  new Product(
    'Tablet PC Firefly B7300 Purple Quad Core 1.2 GHz/8GB/7"',
    'Tablets',
    true,
    19
  ),
  new Product(
    'vowel Tablet PC Amazon Kindle Fire 7 2019 1GB DDR3/16GB/7" IPS',
    'Tablets',
    true,
    20
  ),
  new Product(
    'vowel Smartphone 5.5" 18:9 DOOGEE X55 Black Quad Core',
    'Smartphones',
    false,
    25
  ),
  new Product(
    'Alcatel 5002D 1B LTE Dual-Sim Pine Green',
    'Smartphones',
    true,
    15
  ),
  new Product(
    'Smartphone 6.1" HD 18:9 DOOGEE X93 Green Quad Core',
    'Smartphones',
    true,
    25
  ),
  new Product(
    'vowel Monitor 22" Philips 223V5LHSB2/00 V-Line, Full HD, 5ms, VGA,HDMI,',
    'Monitors',
    true,
    21
  ),
  new Product(
    'Monitor 22" Dell E2220H FullHD TN VGA/DP Vesa mount',
    'Monitors',
    true,
    18
  ),
  new Product(
    'vowelMonitor 24" LG 24MP59G-P Gaming IPS 75Hz,1ms, FHD, VGA, HDMI, DP,',
    'Monitors',
    false,
    50
  ),
  new Product('Jogurt', 'food', false, 19),
  new Product('vowelSolt', 'food', false, 15),
  new Product('Meet', 'food', true, 25),
  new Product('Bred', 'food', true, 28),
];

let productPriceGreaterThen20 = productArr
  .filter((product) => product.price >= 20)
  .forEach((product) => {
    console.log(
      `All products with price greater than price of 20: "${product.name}" Price: ${product.price}`
    );

    document.getElementById(
      'output'
    ).innerHTML += `<ul><li>"${product.name}" Price: ${product.price}</li></ul>`;
  });

let foodProductOnDiscount = productArr
  .filter((product) => product.category == 'food')
  .filter((product) => product.hasDiscount == true)
  .forEach((product) => {
    console.log(`Food on dicount: '${product.name}' ${product.price}`);

    document.getElementById(
      'disc'
    ).innerHTML += `<ul><li>"${product.name}" Price: ${product.price}</li></ul>`;
  });

let averagePriceOfAllDiscountArr = productArr
  .filter((product) => product.hasDiscount == true)
  .map((product) => product.price);
let averagePriceOfAllDiscount = averagePriceOfAllDiscountArr.reduce(
  (sum, price) => (sum += price / averagePriceOfAllDiscountArr.length)
);
console.log(averagePriceOfAllDiscount);
document.getElementById(
  'allProdAver'
).innerHTML += `<h4>${averagePriceOfAllDiscount}</h4>`;

let productsStartingWithVowel = productArr
  .filter((product) => product.name.startsWith('vowel'))
  .filter((product) => product.hasDiscount == false)
  .forEach((product) => {
    console.log(
      `Product name: '${product.name}' Product price:${product.price}`
    );

    document.getElementById(
      'startingVowel'
    ).innerHTML += `<ul><li>"Product name: ${product.name}, " Product price: ${product.price} ETH</li></ul>`;
  });

function copyArrayProduct(array) {
  let copied = [];
  array.forEach((x) => copied.push(x));
  return copied;
}
let sortedProducts = copyArrayProduct(productArr);

sortedProducts
  .sort((product1, product2) => product1.price - product2.price)
  .forEach((product) => {
    console.log(product);
    document.getElementById('arrWithSort').innerHTML += `
    <tr>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.hasDiscount}</td>
      <td>${product.price}</td>
    </tr>
`;
  });
