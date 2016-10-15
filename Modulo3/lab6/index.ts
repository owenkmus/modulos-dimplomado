class Person{
	nid: number;
	name: string;
	age: number;
 
	constructor(nid: number,name: string,age: number){
		this.nid = nid;
		this.name = name;
		this. age = age;
	}

	setNid(nid: number): void{
		this.nid = nid;
	}
	getNid(): number{
		return this.nid;
	}
	
	setName(name: string): void{
		this.name = name;
	}
	getName(): string{
		return this.name;
	}

	setAge(age: number): void{
		this.age = age;
	}
	getAge(): number{
		return this.age;
	}

}

class Student extends Person {
	id: number;
	classes: Array<string>;

	constructor(id: number, classes: Array<string> ){
		super (1, 'camilo', 27);
		this.nid = id;
		this.classes = classes;

	}

	setId(id: number): void{
		this.id = id;
	}
	getId(): number{
		return this.id;
	}
	setClasses(classes: Array<string>): void{
		this.classes = classes;
	}
	getClasses(): Array<string>{
		return this.classes;
	}
}

class Teacher extends Person {
	id: number;
	grade: Array<string>;
	classroom: Array<number> = [1,2,3,4,5,6,7,8,9,10,11];

	constructor(id: number, grade: Array<string>, classroom: Array<number>){
		super (2, 'cristian', 28);
		this.nid = id;
		this.grade = grade;
		this.classroom = classroom;
	}

	setId(id: number): void{
		this.id = id;
	}
	getId(): number{
		return this.id;
	}
	setGrade(grade: Array<string>): void{
		this.grade = grade;
	}
	getGrade(): Array<string>{
		return this.grade;
	}
	setClassroom(classroom: Array<number>): void{
		this.classroom = classroom;
	}
	getClassroom(): Array<number>{
		return this.classroom;
	}
}

var person = new Person (1, 'Juan',30);
var student = new Student (2, ['RaulGonzalez']);
var teacher = new Teacher (3, ['Undecimo'], [8,9,10,11]);

console.log (person);
console.log (student);
console.log (teacher);
