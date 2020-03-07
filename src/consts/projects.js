import rickI from '../images/rick-and-com.JPG'
import gold from '../images/goldrush-min.PNG'
import mmsI from '../images/mms-gap-logo.png'
import crmI from '../images/ORM-CRM.jpg'
import quizI from '../images/quizYourSelf.png'
import doggiesI from '../images/doggies.JPG'
import frogI from '../images/catcgAfrog.png'
import drsImage from '../images/drs.PNG'
import tomerImage from '../images/Tomer Raitz.png'

const rickAndMorty = {
    id: 0,
    title: "Rick And Morty Game",
    text: "Real-time multi/single player online game, based on the TV cartoon Rick and Morty",
    gitHub: "https://github.com/tomeraitz/rick-morty-game",
    url: "https://rick-and-morty-space-game.herokuapp.com/",
    target: "_blank",
    cssDescription: "none",
    cssDescriptionGrid: "none",
    cssClassHover: 'projects-label-des',
    img: rickI,
    labels: [{
        text: 'Nodejs',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'React',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'Mobx',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'WebSokect',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'Express',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'OOP',
        cssClassHover: 'projects-label-des'
    }],
    animation: "fade-right",
}

const crm = {
    id: 1,
    title: "ORM-CRM",
    text: "ORM-CRM helps small businesses manage their clients using advanced analytical tools",
    gitHub: "https://github.com/tomeraitz/React-FullStack-CRM-System",
    url: "https://orm-crm.netlify.com/",
    target: "_blank",
    cssDescription: "none",
    cssDescriptionGrid: "none",
    cssClassHover: 'projects-label-des',
    img: crmI,
    labels: [{
        text: 'Nodejs',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'React',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'MongoDB',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'Express',
        cssClassHover: 'projects-label-des'
    }],
    animation: "fade-left"
}

const MMS = {
    id: 2,
    title: "MMS-GAP",
    text: "MMS-GAP is an information system that helps medical experts and their patients communicate",
    gitHub: "https://github.com/mms-gap/code",
    url: "http://avivbr.mtacloud.co.il/index",
    target: "_blank",
    cssDescription: "none",
    cssDescriptionGrid: "none",
    cssClassHover: 'projects-label-des',
    img: mmsI,
    labels: [{
            text: 'Gmail API',
            cssClassHover: 'projects-label-des'
        },
        {
            text: 'Jquery',
            cssClassHover: 'projects-label-des'
        },
        {
            text: 'vanilla js',
            cssClassHover: 'projects-label-des'
        },
        {
            text: 'SQL',
            cssClassHover: 'projects-label-des'
        },
        {
            text: 'Bootstrap',
            cssClassHover: 'projects-label-des'
        },
        {
            text: 'PHP',
            cssClassHover: 'projects-label-des'
        }
    ],
    animation: "fade-right"
}

const GoldRus = {
    id: 3,
    title: "Gold-Rush Game",
    text: "The nostalgic 'Gold-Rush' game with multiplayer functionality",
    gitHub: "https://github.com/tomeraitz/GoldRush-game",
    url: "https://gold-rush-multi.herokuapp.com/",
    target: "_blank",
    cssDescription: "none",
    cssDescriptionGrid: "none",
    cssClassHover: 'projects-label-des',
    img: gold,
    labels: [{
        text: 'Nodejs',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'vanilla js',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'Jquery',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'WebSokect',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'Express',
        cssClassHover: 'projects-label-des'
    }],
    animation: "fade-left"
}

const quiz = {
    id: 4,
    title: "My Future Profession",
    text: "A quiz that will help young adults find their future profession",
    gitHub: "https://github.com/tomeraitz/PHP-Quiz-Your-self",
    url: "http://avivbr.mtacloud.co.il/QuizYourSelf/register.php",
    target: "_blank",
    cssDescription: "none",
    cssDescriptionGrid: "none",
    cssClassHover: 'projects-label-des',
    img: quizI,
    labels: [{
            text: 'PHP',
            cssClassHover: 'projects-label-des'
        }, {
            text: 'Google API',
            cssClassHover: 'projects-label-des'
        }, {
            text: 'vanilla js',
            cssClassHover: 'projects-label-des'
        }, {
            text: 'SQL',
            cssClassHover: 'projects-label-des'
        },
        {
            text: 'Bootstrap',
            cssClassHover: 'projects-label-des'
        }
    ],
    animation: "fade-right"
}

const doggies = {
    id: 5,
    title: "Doogies",
    text: "A Social network for dogs and their humans",
    gitHub: "https://github.com/tomeraitz/doggies",
    url: "https://doggies-app.herokuapp.com",
    target: "_blank",
    cssDescription: "none",
    cssDescriptionGrid: "none",
    cssClassHover: 'projects-label-des',
    img: doggiesI,
    labels: [{
            text: 'Nodejs',
            cssClassHover: 'projects-label-des'
        }, {
            text: 'vanilla js',
            cssClassHover: 'projects-label-des'
        }, {
            text: 'Jquery',
            cssClassHover: 'projects-label-des'
        }, {
            text: 'handlebar',
            cssClassHover: 'projects-label-des'
        },
        {
            text: 'MongoDB',
            cssClassHover: 'projects-label-des'
        }, {
            text: 'StreetMap',
            cssClassHover: 'projects-label-des'
        },
    ],
    animation: "fade-left"
}

const frog = {
    id: 6,
    title: "Catch a Frog Game",
    text: "The classic 'catch A frog' game with a levels engine",
    gitHub: "https://github.com/tomeraitz/catchAfrog-game",
    url: "https://tomeraitz.github.io/catchAfrog-game/index.html",
    target: "_blank",
    cssDescription: "none",
    cssDescriptionGrid: "none",
    cssClassHover: 'projects-label-des',
    img: frogI,
    labels: [{
            text: 'vanilla js',
            cssClassHover: 'projects-label-des'
        }, {
            text: 'Jquery',
            cssClassHover: 'projects-label-des'
        },
        {
            text: 'handlebar',
            cssClassHover: 'projects-label-des'
        }
    ],
    animation: "fade-right"
}

const drs = {
    id: 7,
    title: "DRS - Architect Portfolio",
    text: "A real live portfolio for architectural - Danielle Shudari",
    gitHub: "https://github.com/tomeraitz/danielle-portfoli",
    url: "https://drs.netlify.com/",
    target: "_blank",
    cssDescription: "none",
    cssDescriptionGrid: "none",
    img: drsImage,
    labels: [{
        text: 'React',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'Redux',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'CSS',
        cssClassHover: 'projects-label-des'
    }, ],
    animation: "fade-right"
}

const tomer = {
    id: 8,
    title: "My Protfolio",
    text: "A real live portfolio for web developer - Tomer Raitz",
    gitHub: "https://github.com/tomeraitz/portfolio",
    url: "#",
    target: "_top",
    cssDescription: "none",
    cssDescriptionGrid: "none",
    img: tomerImage,
    labels: [{
        text: 'React',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'Mobx',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'Nodejs',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'MongoDB',
        cssClassHover: 'projects-label-des'
    }, {
        text: 'Express',
        cssClassHover: 'projects-label-des'
    }],
    animation: "fade-right"
}
const projects = [rickAndMorty, crm, MMS, GoldRus, quiz, doggies, frog, drs, tomer]

export default projects