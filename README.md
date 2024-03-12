# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page
-   **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

**Mobile**
![](/screenshot/mobile-screenshot.png)

**Desktop**
![](/screenshot/desktop-screenshot.png)

### Links

-   Solution URL: [GitHub](https://github.com/mikailafsin/frontend-mentor-results-summary-component-solution)
-   Live Site URL: [Vercel](https://frontend-mentor-results-summary-component-solution-ten.vercel.app/)

## My process

### Built with

-   HTML5 markup
-   Flexbox
-   Mobile-first workflow
-   [Tailwind CSS](https://tailwindcss.com/) - CSS framework

### What I learned

While working on this project, I learnt how to use JavaScript to dynamically change the HTML document according to the information in the JSON file.

Some code about project:

```html
<div class="px-9 py-5 lg:w-1/2 lg:pb-10 lg:pt-7">
    <h3 class="mb-5 font-bold lg:text-xl">Summary</h3>
    <ul id="list" class="mb-6 space-y-4 lg:mb-8"></ul>
    <a
        class="inline-block w-full rounded-full bg-neutral-dark-gray-blue p-3 text-center font-extrabold text-neutral-white transition-colors hover:bg-gradient-to-b hover:from-gradients-light-slate-blue hover:to-gradients-light-royal-blue"
        href="#"
        >Continue</a
    >
</div>
```

```js
fetch("data.json")
    .then((response) => response.json())
    .then((data) => populateList(data))
    .catch((error) => console.error("JSON yüklenirken hata oluştu: ", error));
```

### Continued development

I will try to focus on JS Async in future projects.

### Useful resources

-   [Tailwind CSS Docs](https://tailwindcss.com/docs) - This document page helped me to understand which class names the properties written in native css are written in tailwind css.

## Author

-   Frontend Mentor - [@mikailafsin](https://www.frontendmentor.io/profile/mikailafsin)
-   Instagram - [@mikail.afsin](https://www.instagram.com/mikail.afsin)
