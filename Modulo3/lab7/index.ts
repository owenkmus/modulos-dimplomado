interface Person {
	nid: number;
	name: string;
	age: number;
	id: number;
	grade: string;
	classroom: number;

	getNid(): number;
	getName(): string;
	getAge(): number;
	getId(); number;
	getGrade(); string;
	getClassroom(); number;

	setNid(nid:number): void;
	setName(name:string): void;
	setAge(age:number): void;
	setId(id:number): void;
	setGrade(grade:string);
	setClassroom(classroom:number);
}

class Student implements Person{
	nid: number;
	name: string;
	age: number;
	id: number;
	grade: string;
	classroom: number;

	constructor(){}

	getNid(): number{
		return this.nid;
	}
	getName(): string{
		return this.name;
	};
	getAge(): number{
		return this.age;
	};

	getId(): number{
		return this.id;
	}
	getGrade(): string{
		return this.grade;
	};
	getClassroom(): number{
		return this.classroom;
	};

	setId(id: number): void{
		this.id = id;
	}
	setGrade(grade: string): void{
		this.grade = grade;
	}
	setClassroom(classroom:number): void{
		this.classroom = classroom;
	}
	setNid(nid: number): void{
		this.nid = nid;
	}
	setName(name: string): void{
		this.name = name;
	}
	setAge(age:number): void{
		this.age = age;
	}
}

var student = new Student();

student.setAge(55);
console.log(student.getAge());

class Teacher implements Person{
	nid: number;
	name: string;
	age: number;
	id: number;
	grade: string;
	classroom: number;

	constructor(){}

	getNid(): number{
		return this.nid;
	}
	getName(): string{
		return this.name;
	};
	getAge(): number{
		return this.age;
	};

	getId(): number{
		return this.id;
	}
	getGrade(): string{
		return this.grade;
	};
	getClassroom(): number{
		return this.classroom;
	};
	setNid(nid: number): void{
		this.nid = nid;
	}
	setName(name: string): void{
		this.name = name;
	}
	setAge(age:number): void{
		this.age = age;
	}
	setId(id: number): void{
		this.id = id;
	}
	setGrade(grade: string): void{
		this.grade = grade;
	}
	setClassroom(classroom:number): void{
		this.classroom = classroom;
	}
}

var teacher = new Teacher();

teacher.setGrade('noveno');
console.log(teacher.getGrade());

teacher.setClassroom(8);
console.log(teacher.getClassroom());
