![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | HTML & CSS - Spotify Clone

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Create a webpage based on provided design and assets.
  - Create and link an external CSS stylesheet with an HTML document.
  - Display images in a webpage using HTML image tags and CSS `background` property.
  - Use the CSS `position` property to position elements on a webpage.
  - Use Flexbox to layout and position elements on a webpage.
  - Center content on a webpage, including images and text.
  - Submit completed work using Git and GitHub by creating a Pull Request.

  <br>
  <hr> 

</details>

## Introduction

Everybody likes music, right? So the odds are that you have heard of **Spotify**.

In this lab, we will be building a simplified version of the Spotify landing page:

![Spotify image](https://i.imgur.com/xVD0bm6.jpg)

<br>

All of the necessary assets and images are already provided. You might also find it useful to resort to the **[full-length PDF version of the website](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/spotify-prototype.pdf)** as a reference.

## Requirements

- Fork this repo
- Clone this repo

## Submission

Upon completion, run the following commands:

```shell
git add .
git commit -m "done"
git push origin master
```

Create Pull Request so your TAs can check up your work.

## Instructions

You are provided with some assets - in the `images` folder, you will find the necessary images, and the text is ready for you in the `index.html` file. Write your HTML and CSS code in the `index.html` and `styles/style.css` files, respectively. Again, remember to follow the best practices.

The page is split into 4 sections, and we have generously cut it down into pieces!

In general, website designs don't just come out of the wild, so you will likely have mockups/sketches that you will have to integrate. Therefore, it is a good practice to help you cut the website into pieces before coding to help you _**structuring**_ your HTML.

_**The last section isn't as detailed as the others ones, good luck**_ :smile:

:muscle: :muscle: :muscle:
<br>
![](https://res.cloudinary.com/ihwebdeb/image/upload/v1571085836/Ironhack/spotify-prototype_1x_ahk8ep.jpg)

Let's do this!

### Iteration 1: Navbar

- The navbar should be `position: fixed`.
- Align the logo to the left and the `ul` with the links to the right, either using `float` or `flex`.

### Iteration 2: Large image background with text

- Check out [this guide](https://css-tricks.com/centering-css-complete-guide/) on centering things.

### Iteration 3: What is on Spotify section

- It looks like the `div`s take up about a third of the container each. How can you represent this in code?

### Iteration 4: The green section

- It looks like we have 2 main sections, a containing element with the text flowing from top to bottom and the image of the Spotify player on the right.
- Position the Spotify logo absolutely according to the _green_ `div`.

<br>

**Happy coding!** :heart: