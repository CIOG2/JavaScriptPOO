class Student {
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
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
    instagram: 'Zeus2'
}); 






