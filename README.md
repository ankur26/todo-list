# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode

### Screenshot

![Light Mode](./images/ListLightMode.png)
![Dark Mode](./images/ListDarkMode.png)


### Links

- Solution URL: [Link](https://github.com/ankur26/todo-list)
- Live Site URL: [Live](https://todo-list-2p2mik7rf-ankur26.vercel.app/)

## My process

### Built with

- [Tailwind CSS](http://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned
1. Tailwind CSS while making class naming conventions for the worse does speed up development for CSS pretty well, with a good design system in place and a predefined theme it should be pretty quick to get going
2. Typescript was a first for me and I realized the importance and the assistance that types gives me while development. It also acts as assurance as I was failing my deployment build due typescript errors( which is good regardless of the fact that TS compiles to JS, it's to prevent bad unsafe and invalid code to get out.)
3, This is my first time playing with React context and I really found it useful, especially with the dark mode.

### Continued Work
1. The state is still very clunky and needs to probably be shifted to useReducer calls.
2. The dark mode context ends up being used pretty much in multiple lines of even a single react component,need to work on making it a single condition so that the JSX written on the components are cleaner.
3. Styling is still not up to par. And it's missing Drag and Drop.

## Author

- Website - [Ankur Bhatkalkar](https://www.linkedin.com/in/ankur-bhatkalkar/)
- Frontend Mentor - [@ankur26](https://www.frontendmentor.io/profile/ankur26)

