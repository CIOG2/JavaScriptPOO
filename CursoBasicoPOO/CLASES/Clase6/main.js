//Objetos literales
const Ivan = {
    name: 'Ivan',
    edad: 20,
    cursosAprovados: [
      'Curso Definitivo de HTML y CSS',
      'Curso Practico de HTML y CSS'  
    ],
    aprovarCurso(CursoAprovado) {
        this.cursosAprovados.push(CursoAprovado);
    }
};


//Prototipos
function Student(name, age, cursosAprovados) {
    this.name = name;
    this.age = age;
    this.cursosAprovados = cursosAprovados;
}

Student.prototype.aprovarCurso = function(CursoAprovado){
    this.cursosAprovados.push(CursoAprovado);
}

//Instancias de prototipos
const zeus = new Student(
    'zeus', 
    4, 
    [
        'Curso de dormir',
        'curso de comer y dormir'
    ],
)  
  


//Prototipos con la sintaxis de clases
class Student2 {
    constructor(name, age, cursosAprovados){
        this.name = name;
        this.age = age;
        this.cursosAprovados = cursosAprovados;
    }
    //Metodos
    aprovarCurso(curso){
        this.cursosAprovados.push(curso);
    }
} 

const Carlos = new Student2('Carlos', 20,['Curso de POO JavaScript']);
Carlos.cursosAprovados.push('Curso de introduccion a React.js')

console.log(Carlos);


