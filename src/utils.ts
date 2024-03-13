export type projectType = {
    name:string,
    url:string;
    liveDemo?:string;
    techstack:string[];
    image:string;
    description:string;
    type?:string;
}

export const projects:projectType[] = [
    {
        name:'Form Builder',
        url:"",
        liveDemo:"",
        techstack:["Nextjs","Tailwind,Radix UI,ShadCN","Dnd Kit","PostgreSQL"],
        image:"/form-builder-1.png",
        description:"This is a Form Builder Web app where a user can build there own form using the drag and drop builder I have provided and then the form could be published to other people they can further fill and submission analytics visits,bounce rate etc could be tracked on details page",
        type:"WebApp"
    },
    {
        name:'Tinder Clone',
        url:"",
        techstack:["React with Redux","Nodejs/Express","MongoDB and Redis","MapBox for location","SockerIO","Material UI"],
        image:"/tinderlogo.jfif",
        description:"MERN stack tinder clone built with scalable chat system using redis pubsub and socket IO",
        type:"WebApp"
    },
    {
        name:'Form Builder',
        url:"",
        techstack:["Nextjs","Tailwind,Radix UI,ShadCN","Dnd Kit","PostgreSQL"],
        image:"/JobsterImage.jpg",
        description:"This is a Form Builder Web app where a user can build there own form using the drag and drop builder I have provided and then the form could be published to other people they can further fill and submission analytics visits,bounce rate etc could be tracked on details page",
        type:"WebApp"
    },
    {
        name:'Chatting Application IOS',
        url:"",
        techstack:["React with Redux","Nodejs/Express","MongoDB and Redis","MapBox for location","SockerIO","Material UI"],
        image:"/tinderlogo.jfif",
        description:"MERN stack tinder clone built with scalable chat system using redis pubsub and socket IO",
        type:"WebApp"
    },

]