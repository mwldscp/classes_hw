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
// -------------------------------------------------------

class Student {
  public name: string;
  private course: number;

  constructor(name: string, course: number) {
    this.name = name;
    this.course = course;
  }

  levelUp() {
    if (this.course < 5) {
      this.course++;
    } else {
      console.log("Студент уже на последнем курсе!");
    }
  }

  getCourse() {
    return this.course;
  }
}

const student = new Student("Max", 1);
console.log(student.getCourse()); //1
student.levelUp(); //2
student.levelUp(); //3
student.levelUp(); //4
student.levelUp(); //5
student.levelUp(); //Студент уже на последнем курсе!

console.log(student.getCourse()); //5
