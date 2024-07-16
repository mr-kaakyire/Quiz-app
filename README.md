# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

<img src="./darkmodeP.jpg" alt="screenshot" width="400" />
<img src="./lightmodeP.jpg" alt="screenshot" width="400" />



### Links

- Sourcode: [Quiz-app/github](https://github.com/mr-kaakyire/Quiz-app)
- Live Site: [quiz-app.live](https://quiz-92dpwnunp-mrboahens-projects.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React-router-dom](https://reactrouter.com/en/main) - React library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

####React Router
Implementing React-router allowed me to navigate between different pages without reloading the entire page, making the app feel like a single-page application.
It also allows for dynamic segments which allows URL parameters to be passed to the link.
```js
 #####main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './routes/LayOut.tsx';
import HomePage from './pages/HomePage.tsx';
import ExercisePage from './pages/ExercisePage.tsx';
import CompletedPage from './pages/CompletedPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut children={undefined}/>,
    children:[
      {path:'/',element:<HomePage/>},
      {path:'/:exercise-type',element:<ExercisePage/>},
      {path:'/completed/:exercise-type/:score',element:<CompletedPage/>},
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [react-router-dom](https://reactrouter.com/en/main) - I used this for client-side routing. I really love this because it was quick and intuitive to use.
- [styled-components](https://styled-components.com/docs/basics) - This is also an amazing react library that allows you to manipulate your CSS with Javascript. It's usage is very intuitive and easy as well. And it made my life a whole lot easier when I was implementing the darkmode feature. I would probably recommend this over frontend libraries like tailwind

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Mr-Kaakyire](https://mrkaakyire.vercel.app/)
- Linkedin - [Emmanuel Boahen](https://www.linkedin.com/in/emmanuel-boahen-351850206/)



