"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var STUDENTS = [
    {
        id: 1,
        name: "Cristian",
        classes: ["Matematicas", "Quimica"],
        grade: 8
    },
    {
        id: 2,
        name: "Camilo",
        classes: ["Español", "Ingles"],
        grade: 9
    },
    {
        id: 3,
        name: "Ricardo",
        classes: ["Biologia", "Sociales"],
        grade: 10
    }
];
var TEACHERS = [
    {
        id: 1,
        name: "Fernando",
        rooms: ["Septimo", "Octavo"],
        studies: ["Sociales", "Español", "Ingles"]
    },
    {
        id: 2,
        name: "Alejandro",
        rooms: ["Noveno", "Decimo"],
        studies: ["Matematicas", "Quimica", "Fisica"]
    },
    {
        id: 3,
        name: "Andres",
        rooms: ["Undecimo", "Noveno"],
        studies: ["Biologia", "Quimica"]
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Estudiantes";
        this.title2 = "Profesores";
        this.students = STUDENTS;
        this.teachers = TEACHERS;
    }
    AppComponent.prototype.onSelect = function (student) {
        this.selected = student;
    };
    AppComponent.prototype.onSelectTeacher = function (teacher) {
        this.selected1 = teacher;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map