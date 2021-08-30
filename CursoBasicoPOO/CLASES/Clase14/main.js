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

class Cursos {
    constructor({
        name,
        clasesCurso = [],
        isFree = false,
        lang = 'spanish'
    }){
        this._name = name;
        this.clasesCurso = clasesCurso;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        if (newName === 'Curso p$)@+') {
            console.error('Web... no')
        } else {
            this._name = newName;
        }
    }
}

function VideoPlay(id) {
    const urlSecreta = 'https://platziVideoSecreto.com/' + id;
    console.log('Reproduciendo Video');
}
function VideoStop(id) {
    const urlSecreta = 'https://platziVideoSecreto.com/' + id;
    console.log('Video Pausado');
}

class CLASES {
    constructor({
        name,
        id,
    }){
        this.name = name;
        this.id = id;
    }
    
    reproducir() {
        VideoPlay(this.id);
    }
    pausar() {
        VideoStop(this.id)
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

class FreeStudent extends Student{
    constructor(props) {
      super(props);   
    }

    CursoAprovado(newCourse) {
        if(newCourse.isFree){
         this.approvedCourses.push(newCourse);
        }else{
            console.warn('Lo siento '+ this     .name +' no puedes tomar este curso');
        }
    }
}

class BasicStudent extends Student{
    constructor(props) {
      super(props);   
    }

    CursoAprovado(newCourse) {
        if(newCourse.leng !== 'english'){
         this.approvedCourses.push(newCourse);
        }else{
            console.warn('Lo siento '+ this.name +' no puedes tomar este curso');
        }
    }

}


class ExpertStudent extends Student{
    constructor(props) {
      super(props);   
    }

    CursoAprovado(newCourse) {
         this.approvedCourses.push(newCourse);  
    }

}


const ClasePOO = new CLASES({
    name: 'Programacion Orientada a Objetos',
    id: 391039292,
});

const CursoDeFronendDeveloper = new Cursos({
    name: 'Curso de Fronend Developer',
    clasesCurso: [
        'clase 1',
        'clase 2',
        'clase 3',
        ClasePOO,
        'clase 5',
        'clase 6',
    ],
    isFree: false,
    lang: 'english',
});


// CursoDeFronendDeveloper.name = 'Curso p$)@+';       
// console.log(CursoDeFronendDeveloper.name);        GET
// CursoDeFronendDeveloper.name = 'Curos 1';         CON SET 
// CursoDeFronendDeveloper.changeName('curso 2')     CON FUNCIONES


const EscuelaDeJavascript = new Escuela({
    name: 'Escuela de JavaScript',
    NumeroCursos: 6,
    Cursos: [
        CursoDeFronendDeveloper,
        'Curso Basico de JavaScript',
        'Curso curso practico de JavaScript',
        'Curso de ECMASsript 6+',
        'Curso de Asincronismo con JavaScript',
        'Curso Curso Profesionl de JavaScript',
    ],
});





const Ivan2 = new FreeStudent({
    name: 'Ivan',
    userName: 'CIOG',
    email: 'Carlos@gmail.com',
    instagram: 'CIOG2',
}); 

const zeus2 = new ExpertStudent({
    name: 'Zues',
    userName: 'ZeusGamer',
    email: 'Zeus@gmail.com',
    instagram: 'Zeus2',
    learningPaths: EscuelaDeJavascript,
}); 


console.log(Ivan2);
console.log(zeus2);