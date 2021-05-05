# Frontend Mentor - Ping coming soon page solution

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

## Overview

![](./design/desktop-preview.jpg)

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](https://s3-us-west-1.amazonaws.com/marjoree.e.f-images/projects/ping-coming-soon-page/screencapture-marjoree-ping-coming-soon-page-netlify-app-2021-04-28-12_18_53.png)
![](https://s3-us-west-1.amazonaws.com/marjoree.e.f-images/projects/ping-coming-soon-page/screencapture-marjoree-ping-coming-soon-page-netlify-app-2021-04-28-12_19_38.png)

### Links

- Solution URL: [Add solution URL here](https://marjoree-ping-coming-soon-page.netlify.app/)
- Live Site URL: [https://marjoree-ping-coming-soon-page.netlify.app/](https://marjoree-ping-coming-soon-page.netlify.app/)

## My process

This is a project that allowed me to utilize my knowledge in HTML5 Semantic Markup and CSS concepts such as Mobile-first workflow using Flexbox.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
  <header class="header">
    <img class="logo" src="./images/logo.svg">
    <section class="intro-content">
      <p class="headliner">We are launching <strong>soon</strong>!</p>
      <p class="subscribe">Subscribe and get notified</p>
      <div class="email-component">
        <input type="email" placeholder="example@email/com">
        <button type="submit">Notify Me</button>
      </div>
    </section>
  </header>
```
```css
.email-component{
    display: flex;
    flex-direction: row;
}
@media screen and (max-width: 375px){
  .email-component{
        flex-direction: column;
        justify-content: center;
        width: 80%;
    }
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Marjoree E.F.](https://www.marjoree.com)
- Frontend Mentor - [@mfargas](https://www.frontendmentor.io/profile/mfargas)
- Twitter - [@marjoree_js](https://www.twitter.com/yourusername)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

