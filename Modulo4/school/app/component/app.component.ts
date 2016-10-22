import { Component } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';

const STUDENTS: Student[] = [
    {
        id: 1,
        name: "Cristian",
        classes: ["Matematicas","Quimica"],
        grade: 8
    },
    {
        id: 2,
        name: "Camilo",
        classes: ["Español","Ingles"],
        grade: 9
    },
    {
        id: 3,
        name: "Ricardo",
        classes: ["Biologia","Sociales"],
        grade: 10
    }
];

const TEACHERS: Teacher[] = [
    {
        id: 1,
        name: "Fernando",
        rooms: ["Septimo","Octavo"],
        studies: ["Sociales","Español","Ingles"]
    },
    {
        id: 2,
        name: "Alejandro",
        rooms: ["Noveno","Decimo"],
        studies: ["Matematicas","Quimica","Fisica"]
    },
    {
        id: 3,
        name: "Andres",
        rooms: ["Undecimo","Noveno"],
        studies: ["Biologia","Quimica"]
    }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
})
export class AppComponent {

    title: string = "Estudiantes";
    title2: string = "Profesores";
    selected: Student;
    students: Student[] = STUDENTS;
    selected1: Teacher;
    teachers: Teacher[] = TEACHERS;
    
    onSelect(student: Student) {
        this.selected = student;
    }

    onSelectTeacher(teacher: Teacher) {
        this.selected1 = teacher;
    }
}

