var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(nid, name, age) {
        this.nid = nid;
        this.name = name;
        this.age = age;
    }
    Person.prototype.setNid = function (nid) {
        this.nid = nid;
    };
    Person.prototype.getNid = function () {
        return this.nid;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(id, classes) {
        _super.call(this, 1, 'camilo', 27);
        this.nid = id;
        this.classes = classes;
    }
    Student.prototype.setId = function (id) {
        this.id = id;
    };
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    Student.prototype.getClasses = function () {
        return this.classes;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, grade, classroom) {
        _super.call(this, 2, 'cristian', 28);
        this.classroom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        this.nid = id;
        this.grade = grade;
        this.classroom = classroom;
    }
    Teacher.prototype.setId = function (id) {
        this.id = id;
    };
    Teacher.prototype.getId = function () {
        return this.id;
    };
    Teacher.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Teacher.prototype.getGrade = function () {
        return this.grade;
    };
    Teacher.prototype.setClassroom = function (classroom) {
        this.classroom = classroom;
    };
    Teacher.prototype.getClassroom = function () {
        return this.classroom;
    };
    return Teacher;
}(Person));
