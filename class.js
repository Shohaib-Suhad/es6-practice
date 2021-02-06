class Student{
  constructor(sid,nName){
    this.name = nName;
    this.id = sid;
    this.school = "cant public";
  }
}
const student1 = new Student(22,"tapi");
const student2 = new Student(23,"shimu");
const student3 = new Student(23,"shimu");
console.log(student1,student2);
console.log(student1,student2);