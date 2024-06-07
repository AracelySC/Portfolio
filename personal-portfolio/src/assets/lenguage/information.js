const information = {
    ES: {
        nav: {
            home: 'Inicio',
            about: 'Sobre mi',
            resume: 'CV',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto',
        },
        home: {
            title: 'Hola, mi nombre es Aracely Sáenz Contreras',
            subtitle: 'Soy Ingeniero de Software y Desarrollador Fullstack',
            welcome:'¡Bienvenido a mi portafolio!',
         },
         about:{
            title:'Sobre mi',
            button:'Descargar mi CV',
            description: 'Bachiller en Informática en la Universidad de Costa Rica con una sólida formación académica en programación, bases de datos y gestión de proyectos. Me considero una persona proactiva, autodidacta y apasionada por lo que hago.',
        },
        resume:{
            general:'Mi CV',
            title1:'Educación',
            title2:'Experiencia',
            title3:'Habilidades',       
            education:[{
                institution:'Universidad de Costa Rica',
                degree:'Bachillerato en Informática Empresarial',
                date:'2018 - 2023',
            },
            {   institution:'Colegio Técnico Profesional de Oreamuno',
                degree:'Técnico Medio en Informática de Desarrollo de Software',
                date:'2015 - 2017',
            }],
            experience:[{
                company:'Universidad de Costa Rica - Proyecto de Investigación FUNREAD',
                position:'Líder de equipo y Desarrollador web',
                description:"Como pasante trabajé con tecnologías como Jira, React, Bootstrap, JavaScript, Python y aplicativos inteligentes, utilizando la metodología Scrumban.",
                date:'01/2023 - 12/2023',
            },],
            skills:{ 
                languages:['Español (Nativo)', 'Inglés (B1)'],   
                programmingLanguages:['Java', 'Python', 'JavaScript', 'C#', 'HTML', 'CSS', 'SASS'],
                databases:['SQL Server', 'MySQL', 'PostgreSQL'],
                tools:['Git','Github', 'Jira', 'Postman', 'Visual Studio', 'Visual Studio Code'],
                framework:['.NET','React', 'Angular', 'Bootstrap', 'Node.js', 'Express']
                
            },
        },
        projects:[{
            title:'Proyectos',
            description:'Estos son algunos de los proyectos en los que he trabajado. Si quieres saber más, no dudes en contactarme.',
        },{}],
        contact:{
            title:'Contactame',  
            email:'Correo: arasaenz15@gmail.com',
            phoneNumber:'Telefono: (+506) 8637 9015',
            address:'Dirección: Cartago, Costa Rica',     
        },
    },
    EN: {
        nav: {
            home: 'Home',
            about: 'About Me',
            resume: 'Resume',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        home:{
            title:'Hello, my name is Aracely Sáenz Contreras',
            subtitle:'I am Software Engineer & Fullstack Developer',
            welcome:'Welcome to my portfolio!',
        },
        about:{
            title:'About Me',
            button:'Download my resume',
            description:'Bachelor in Computer Science at the University of Costa Rica with a solid academic background in programming, databases and project management. I consider myself a proactive person, self-taught and passionate about what I do.',
        },
        resume:{
            general:'My Resume', 
            title1:'Education',
            title2:'Experience',  
            title3:'Skills',
            education:[{
                institution:'University of Costa Rica',
                degree:'Bachelor in Business Informatics',
                date:'2018 - 2023',
            },
            {   institution:'Technical Professional College of Oreamuno',
                degree:'Middle Technician in Software Development Informatics',
                date:'2015 - 2017',
            }],
            experience:[{
                company:'University of Costa Rica - FUNREAD Research Project',
                position:'Team Leader and Web Developer',
                description:"As an intern, I worked with technologies such as Jira, React, Bootstrap, JavaScript, Python and intelligent applications, using the Scrumban methodology.",
                date:'01/2023 - 12/2023',
            },],
            skills:{ 
                languages:['Spanish (Native)', 'English (B1)'],   
                programmingLanguages:['Java', 'Python', 'JavaScript', 'C#', 'HTML', 'CSS', 'SASS'],
                databases:['SQL Server', 'MySQL', 'PostgreSQL'],
                tools:['Git','Github', 'Jira', 'Postman', 'Visual Studio', 'Visual Studio Code'],
                framework:['.NET','React', 'Angular', 'Bootstrap', 'Node.js', 'Express']
            },
        },  
        projects:[{
            title:'Projects',
            description:'These are some of the projects I have worked on. If you want to know more, do not hesitate to contact me.',
        },{}],
        contact:{
            title:'Contact Me',  
            email:'Email: aracelysaenzc@gmail.com',
            phoneNumber:'Phone: (+506) 8637 9015',
            address:'Address: Cartago, Costa Rica',
        } 
 
    },
};

export default information;