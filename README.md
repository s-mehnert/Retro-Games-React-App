# [React App](https://s-mehnert.github.io/Retro-Games-React-App/) for Playing Retro Games

The React App brings together several retro games I coded in plain JavaScript along my JS learning journey. All the games exist as separate projects with their own URLs. 
At this point I simply wanted to have a central access point for all of them that gives a nice overview and lets you play the game right there as well as access the game page itself. Plans for the future include integrating all the games right into the React App, see [below](#Planned for future versions).


## Technology used

React (create-react-app), JavaScript, HTML, CSS  


## Available Games

- Memory - [Repo](https://github.com/s-mehnert/memory_game)
- Whack the Mole - [Repo](https://github.com/s-mehnert/whackTheMole_game)
- Connect Four - [Repo](https://github.com/s-mehnert/connectFour_game)
- Space Invaders - [Repo](https://github.com/s-mehnert/spaceInvaders_game)
- Snake - [Repo](https://github.com/s-mehnert/snake_game)
- Frogger - [Repo](https://github.com/s-mehnert/frogger_game)
- Tetris - [Repo](https://github.com/s-mehnert/tetris_game)

## Features

- All games are displayed with small icons
- Games are accessed through clicking on icons
- Game websites are displayed through iframes


## Usage

To play the games, visit [Retro Games](https://s-mehnert.github.io/Retro-Games-React-App/).

(Note that not all games run correctly in the iframe in all browsers. In that case, access the game site directly by clicking on the link provided.) 

## Installation

For using the code on your own machine you need to first clone the repo and have node.js installed. 
Then you need to install the necessary dependencies by running the following code from within the project folder:

```bash 
npm install
``` 

To see the project in your browser on http://localhost:3000/ you need to run the application:

```bash 
npm start
``` 

For anything beyond that, please refer to the official documentation:
- [React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [How to clone a GitHub Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)


## Planned for future versions

- Integrate games into React App by turning them into React Components
- Display best scores in current session for all games played
- Store personal highscores with username in a database
- Display all times best player scores


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Acknowledgements

The JavaScript games were inspired by a [tutorial](https://www.youtube.com/watch?app=desktop&v=lhNdUVh3qCc&t=1657s) by [Ania Kubów](https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw).