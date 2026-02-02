class Human {
  speak() {
    console.log("Human is speaking");
  }
}

class Teacher extends Human {
  speak() {
    console.log("Teacher is teaching");
  }
}

class Student extends Human {
  speak() {
    console.log("Student is learning");
  }
}

let people = [
  new Human(),
  new Teacher(),
  new Student()
];

people.forEach(person => {
  person.speak();
});
