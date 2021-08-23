class Escuela {
    constructor({
        name,
        NumeroCursos,
        Cursos = [],
    }){
        this.name = name;
        this.NumeroCursos = NumeroCursos;
        this.Cursos = Cursos;
    }
}




class Student {
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths,
    }){
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const EscuelaDeJavascript = new Escuela({
    name: 'Escuela de JavaScript',
    NumeroCursos: 6,
    Cursos: [
        'Curso de Fronend Developer',
        'Curso Basico de JavaScript',
        'Curso curso practico de JavaScript',
        'Curso de ECMASsript 6+',
        'Curso de Asincronismo con JavaScript',
        'Curso Curso Profesionl de JavaScript',
    ],
})

const Ivan2 = new Student({
    name: 'Ivan',
    userName: 'CIOG',
    email: 'Carlos@gmail.com',
    instagram: 'CIOG2'
}); 

const zeus2 = new Student({
    name: 'Zues',
    userName: 'ZeusGamer',
    email: 'Zeus@gmail.com',
    instagram: 'Zeus2',
    learningPaths: EscuelaDeJavascript,
}); 


console.log(Ivan2);
console.log(zeus2);
console.log(EscuelaDeJavascript);