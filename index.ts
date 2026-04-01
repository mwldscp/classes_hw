class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const toyota = new Car("Toyota", "Camry", 2022);
console.log(toyota);

const bmw = new Car("BMW", "X5", 2020);
console.log(bmw);
