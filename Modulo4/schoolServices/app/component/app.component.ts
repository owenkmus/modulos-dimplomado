import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';
import {StudentService} from '../service/student.service';
import {TeacherService} from '../service/teacher.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html',
  providers: [StudentService, TeacherService]
})
export class AppComponent implements OnInit{

    constructor(private studentService: StudentService, 
                private teacherService: TeacherService){}

    title: string = "Estudiantes";
    title2: string = "Profesores";
    selected: Student;
    students: Student[];
    selected1: Teacher;
    teachers: Teacher[];

    ngOnInit(){
        this.studentService.getStudents()
        .then(students => this.students = students)
        .catch(error => console.log(error));

        this.teacherService.getTeachers()
        .then(teachers => this.teachers = teachers)
        .catch(error => console.log(error));
    }
    
    onSelect(student: Student) {
        this.selected = student;
    }

    onSelectTeacher(teacher: Teacher) {
        this.selected1 = teacher;
    }
}

