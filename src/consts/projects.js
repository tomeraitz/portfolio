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
    text : "The nostalgic game 'Gold-Rush' for multiple players",
    gitHub : "https://github.com/tomeraitz/GoldRush-game",
    url : "https://gold-rush-multi.herokuapp.com/",
    img : gold,
    labels : ['Node.js' , 'vanilla js', 'Jquery','handlebar', 'Socket.io', 'Express'],
    animation : "fade-left"
}

const MMS = {
    title : "MMS-GAP",
    text : "MMS-GAP is an information system for integrating the patient progress information between patients, doctors, trainers, and nutritionists",
    gitHub : "https://github.com/mms-gap/code",
    url : "http://avivbr.mtacloud.co.il/index",
    img : mmsI,
    labels : ['PHP' , 'Gmail API', 'Jquery','vanilla js', 'SQL', 'Bootstrap'],
    animation : "fade-right"
}

const crm = {
    title : "CRM System",
    text : "This project simulates a real CRM system",
    gitHub : "https://github.com/tomeraitz/React-FullStack-CRM-System",
    url : "https://crm-tomer.herokuapp.com",
    img : crmI,
    labels : ['Node.js' , 'React.js', 'MongoDB', 'Express'],
    animation : "fade-left"
}

const quiz = {
    title : "Quiz Your Self",
    text : "This Application quiz that checks what professions that fit you according to your answers",
    gitHub : "https://github.com/tomeraitz/PHP-Quiz-Your-self",
    url : "http://avivbr.mtacloud.co.il/QuizYourSelf/register.php",
    img : quizI,
    labels : ['PHP' , 'Google API','vanilla js', 'SQL', 'Bootstrap'],
    animation : "fade-right"
}

const doggies = {
    title : "Doogies",
    text : "Dog parks based social network",
    gitHub : "https://github.com/tomeraitz/doggies",
    url : "https://doggies-app.herokuapp.com",
    img : doggiesI,
    labels : ['Node.js' , 'vanilla js', 'Jquery','handlebar', 'MongoDB', 'Express' , 'StreetMap'],
    animation : "fade-left"
}

const frog = {
    title : "Catch a Frog Game",
    text : "'catch A frog' is a game whose entire logic is based on a coordinate system, the game have a countdown and levels engine",
    gitHub : "https://github.com/tomeraitz/catchAfrog-game",
    url : "https://tomeraitz.github.io/catchAfrog-game/index.html",
    img : frogI,
    labels : ['vanilla js', 'Jquery','handlebar'],
    animation : "fade-right"
}
const projects = [rickAndMorty, GoldRus , MMS, crm , quiz , doggies, frog]

export default projects