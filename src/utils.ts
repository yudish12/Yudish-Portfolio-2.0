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
        liveDemo:"asd",
        techstack:["Nextjs","Tailwind,Radix UI,ShadCN","Dnd Kit","PostgreSQL"],
        image:"/form-builder-1.png",
        description:"This is a Form Builder Web app where a user can build there own form using the drag and drop builder I have provided and then the form could be published to other people they can further fill and submission analytics visits,bounce rate etc could be tracked on details page",
        type:"WebApp"
    },
    {
        name:'Tinder Clone',
        url:"",
        liveDemo:"asd",
        techstack:["React with Redux","Nodejs/Express","MongoDB and Redis","MapBox for location","SockerIO","Material UI"],
        image:"/tinderlogo.jfif",
        description:"MERN stack tinder clone built with scalable chat system using redis pubsub and socket IO",
        type:"WebApp"
    },
    {
        name:'Jobster',
        url:"",
        liveDemo:"asd",
        techstack:["Nextjs","Tailwind,Radix UI,ShadCN","Dnd Kit","PostgreSQL"],
        image:"/JobsterImage.jpg",
        description:"This is a Form Builder Web app where a user can build there own form using the drag and drop builder I have provided and then the form could be published to other people they can further fill and submission analytics visits,bounce rate etc could be tracked on details page",
        type:"WebApp"
    },
    {
        name:'Chatting Application IOS',
        url:"",
        liveDemo:"asd",
        techstack:["React with Redux","Nodejs/Express","MongoDB and Redis","MapBox for location","SockerIO","Material UI"],
        image:"/chatting-social-media-software-logo-which-will-fit-upscaled.jpg",
        description:"MERN stack tinder clone built with scalable chat system using redis pubsub and socket IO",
        type:"WebApp"
    },

]