class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

const products = [
  new Product('Apple', 2, 5, 'Goldenabc'),
  new Product('Banana', 1.45, 15, 'Nendrum'),
  new Product('Orange', 1.23, 12, 'Hamlin'),
  new Product('Grapes', 0.5, 5, 'Aligote'),
  new Product('Melon', 1, 10, 'Aman'),
  new Product('Watermelon', 2, 15, 'Kaiy'),
  new Product('Peach', 1.24, 12, 'Temira'),
  new Product('fd', 2, 5, 'abc')
];

const filters = { 
  contains: 'fd',
  priceMax: 2,
  quantityMin: 5,
  descriptionEnds: 'abc'
};

const filteredProducts = products.filter(product => {
  let passesFilters = true;
  
  if (filters.contains && !product.name.includes(filters.contains)) {
    passesFilters = false;
  }
  
  if (filters.priceMax && product.price > filters.priceMax) {
    passesFilters = false;
  }
  
  if (filters.quantityMin && product.quantity < filters.quantityMin) {
    passesFilters = false;
  }
  
  if (filters.descriptionEnds && !product.description.endsWith(filters.descriptionEnds)) {
    passesFilters = false;
  }
  
  return passesFilters;
});

console.log(filteredProducts);
