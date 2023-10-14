# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

# News Homepage Readme

## Overview

This project aims to revolutionize the way users consume news, providing a comprehensive platform that curates and delivers the latest and most relevant news articles.

### The Challenge

The challenge was to create a user-friendly and intuitive news homepage that aggregates news from various reliable sources, providing a seamless experience for users.

### Screenshot

(no screenhot)

### Links

- [https://frontend-mentor-news-homepage-black.vercel.app/](#) - Insert the link to the live demo.
- [https://github.com/jelilking/Frontend-Mentor-News-homepage](#) - Insert the link to the GitHub repository.

## My Process

During the development of this project, I followed a structured approach to ensure the best possible outcome.

### Built With

- HTML5
- CSS3
- JavaScript

### What I Learned

Throughout this project, I gained valuable insights into news aggregation, front-end development, and user experience design. I also enhanced my skills in utilizing CSS Grid and Flex properties to create dynamic and interactive interfaces.

## Author

- Name: [Jelilking]
- GitHub: [https://github.com/jelilking](#)

## Codes I am Proud Of

``html`
<picture id="home">

  <source
    media="(min-width: 376px)"
    srcset="/news-homepage-main/assets/images/image-web-3-desktop.jpg" />
  <img
    src="/news-homepage-main/assets/images/image-web-3-mobile.jpg"
    alt="Future of Web 3.0"
/></picture>
```

```css
main {
  margin-top: 5.4rem;
  display: grid;
  grid-template-columns: minmax(350px, 730px) auto;
  grid-template-rows: repeat(3, max-content);
  gap: 3rem;
  grid-template-areas: "picture new" "news new" "popular popular";
}

picture {
  grid-area: picture;
}

.news {
  grid-area: news;
}

.new {
  grid-area: new;
  max-width: 34.8rem;
  margin: 0;
}

.popular {
  grid-area: popular;
}
```

```js
for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", () => {
    iconMenu.classList.toggle("hide");
    closeMenu.classList.toggle("hide");
    menu.classList.toggle("hide");
  });
}
```

### Continued Development

In the future, I plan to expand the features of the news homepage, implementing personalized user recommendations and refining the UI/UX for an even more engaging experience.

### Useful Resources

- [CSS-Tricks-Grid](https://www.w3schools.com/css/css_rwd_grid.asp) - A website about web design and development.

## Author

- Website - [Jelilking](https://www.your-site.com)
- Frontend Mentor - [@jelilking](https://www.frontendmentor.io/profile/jelilking)
- Twitter - [@maliking25](https://www.twitter.com/maliking25)

## Acknowledgments

I would like to express my gratitude to W3 Schools website for their guidance and support throughout this project.
