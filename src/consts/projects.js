import rickI from '../images/rick-and-com.JPG'
import gold from '../images/gold-rush.JPG'

const rickAndMorty = {
    title : "Rick And Morty Game",
    text : "Real-time multi/single player online game, based on the TV cartoon Rick and Morty",
    gitHub : "https://github.com/tomeraitz/rick-morty-game",
    url : "https://rick-and-morty-space-game.herokuapp.com/",
    img : rickI,
    labels : ['Node.js' , 'React.js', 'Mobx', 'Socket.io', 'Express']
}

const GoldRus = {
    title : "GoldRus Game",
    text : "The nostalgic game 'Gold-Rush' for multiple players",
    gitHub : "https://github.com/tomeraitz/GoldRush-game",
    url : "https://gold-rush-multi.herokuapp.com//",
    img : gold,
    labels : ['Node.js' , 'vanilla js', 'Jquery','handlebar', 'Socket.io', 'Express']
}

const projects = [rickAndMorty, GoldRus]

export default projects