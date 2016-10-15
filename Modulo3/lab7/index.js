var Student = (function () {
    function Student() {
    }
    Student.prototype.getNid = function () {
        return this.nid;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    ;
    Student.prototype.getAge = function () {
        return this.age;
    };
    ;
    Student.prototype.setNid = function (nid) {
        this.nid = nid;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setAge = function (age) {
        this.age = age;
    };
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    ;
    Student.prototype.getClassroom = function () {
        return this.classroom;
    };
    ;
    Student.prototype.setId = function (id) {
        this.id = id;
    };
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.setClassroom = function (classroom) {
        this.classroom = classroom;
    };
    return Student;
}());
var student = new Student();
student.setAge(55);
console.log(student.getAge());
var Teacher = (function () {
    function Teacher() {
    }
    Teacher.prototype.getNid = function () {
        return this.nid;
    };
    Teacher.prototype.getName = function () {
        return this.name;
    };
    ;
    Teacher.prototype.getAge = function () {
        return this.age;
    };
    ;
    Teacher.prototype.getId = function () {
        return this.id;
    };
    Teacher.prototype.getGrade = function () {
        return this.grade;
    };
    ;
    Teacher.prototype.getClassroom = function () {
        return this.classroom;
    };
    ;
    Teacher.prototype.setNid = function (nid) {
        this.nid = nid;
    };
    Teacher.prototype.setName = function (name) {
        this.name = name;
    };
    Teacher.prototype.setAge = function (age) {
        this.age = age;
    };
    Teacher.prototype.setId = function (id) {
        this.id = id;
    };
    Teacher.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Teacher.prototype.setClassroom = function (classroom) {
        this.classroom = classroom;
    };
    return Teacher;
}());
var teacher = new Teacher();
teacher.setGrade('noveno');
console.log(teacher.getGrade());
teacher.setClassroom(8);
console.log(teacher.getClassroom());
