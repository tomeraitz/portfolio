import rickI from '../images/rick-and-com.JPG'
import gold from '../images/gold-rush.JPG'
import mmsI from '../images/mms-gap.JPG'
import crmI from '../images/crm.JPG'
import quizI from '../images/quiz.JPG'
import doggiesI from '../images/doggies.JPG'
import frogI from '../images/frog.JPG'

const rickAndMorty = {
    title : "Rick And Morty Game",
    text : "Real-time multi/single player online game, based on the TV cartoon Rick and Morty",
    gitHub : "https://github.com/tomeraitz/rick-morty-game",
    url : "https://rick-and-morty-space-game.herokuapp.com/",
    img : rickI,
    labels : ['Node.js' , 'React.js', 'Mobx', 'Socket.io', 'Express'],
    animation : "fade-right"
}

const GoldRus = {
    title : "GoldRus Game",
    text : "The nostalgic 'Gold-Rush' game with multiplayer functionality",
    gitHub : "https://github.com/tomeraitz/GoldRush-game",
    url : "https://gold-rush-multi.herokuapp.com/",
    img : gold,
    labels : ['Node.js' , 'vanilla js', 'Jquery','handlebar', 'Socket.io', 'Express'],
    animation : "fade-left"
}

const MMS = {
    title : "MMS-GAP",
    text : "MMS-GAP is an information system that helps medical experts and their patients communicate",
    gitHub : "https://github.com/mms-gap/code",
    url : "http://avivbr.mtacloud.co.il/index",
    img : mmsI,
    labels : ['PHP' , 'Gmail API', 'Jquery','vanilla js', 'SQL', 'Bootstrap'],
    animation : "fade-right"
}

const crm = {
    title : "ORM-CRM",
    text : "ORM-CRM helps small businesses manage their clients using advanced analytical tools",
    gitHub : "https://github.com/tomeraitz/React-FullStack-CRM-System",
    url : "https://crm-tomer.herokuapp.com",
    img : crmI,
    labels : ['Node.js' , 'React.js', 'MongoDB', 'Express'],
    animation : "fade-left"
}

const quiz = {
    title : "My Future Profession",
    text : "A quiz that will help young adults find their future profession",
    gitHub : "https://github.com/tomeraitz/PHP-Quiz-Your-self",
    url : "http://avivbr.mtacloud.co.il/QuizYourSelf/register.php",
    img : quizI,
    labels : ['PHP' , 'Google API','vanilla js', 'SQL', 'Bootstrap'],
    animation : "fade-right"
}

const doggies = {
    title : "Doogies",
    text : "A Social network for dogs and their humans",
    gitHub : "https://github.com/tomeraitz/doggies",
    url : "https://doggies-app.herokuapp.com",
    img : doggiesI,
    labels : ['Node.js' , 'vanilla js', 'Jquery','handlebar', 'MongoDB', 'Express' , 'StreetMap'],
    animation : "fade-left"
}

const frog = {
    title : "Catch a Frog Game",
    text : "The classic 'catch A frog' game with a levels engine",
    gitHub : "https://github.com/tomeraitz/catchAfrog-game",
    url : "https://tomeraitz.github.io/catchAfrog-game/index.html",
    img : frogI,
    labels : ['vanilla js', 'Jquery','handlebar'],
    animation : "fade-right"
}
const projects = [rickAndMorty, crm  , MMS, GoldRus , quiz , doggies, frog]

export default projects

