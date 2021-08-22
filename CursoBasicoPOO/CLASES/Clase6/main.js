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

// Ivan.name = 'carlos'


function Student(name, age, cursosAprovados) {
    this.name = name;
    this.age = age;
    this.cursosAprovados = cursosAprovados;
}

Student.prototype.aprovarCurso = function(CursoAprovado){
    this.cursosAprovados.push(CursoAprovado);
}


const zeus = new Student('zeus', 4, ['Curso de dormir', 'curso de comer y dormir'] )

console.log(zeus);
console.log(Ivan);

