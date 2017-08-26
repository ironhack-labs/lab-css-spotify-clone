![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Spotify Clone

## Introduction

Everyone likes music, right? Odds are if you do, you've heard of Spotify. Today we're going to copy an older (and simpler) version of the Spotify home page:

![Spotify image](https://i.imgur.com/xVD0bm6.jpg)

All of the necessary assets and images are included in the starter code. If you'd like a full length PDF version of the webite as reference, [check out this link](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/spotify-prototype.pdf).

## Exercise

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- You must use 1 descendant selector, and 1 multi selector. You can use more.
- Animate the green Spotify logo in the upper left-hand corner to jump up and down when a user hovers over it.

## Submission Instructions

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

You will receive the images and resources in the starter code. Write your CSS and HTML in the provided files. Remember to follow good practices.

## Steps

The page is split into 4 sections. 

#### Navbar

- The navbar should be `position: fixed`.
- Float the image left, and float a `ul` with the links right.

#### Large image background with text

- Check out [this guide](https://css-tricks.com/centering-css-complete-guide/) on centering things.

#### What's on Spotify section

- It looks like the `div`s take up about a third of the container each. How can you represent this in code?

#### Green Section

- It looks like we have 2 main pieces, a `div` with the text content, and the image of the Spotify player. Position these according to the surrounding green `div`.
- Position the Spotify logo absolutely according to the Green `div`.

### Starter code

The starter-code contains all the files, images, and text content needed to create the page. The text is in the `index.html`, and a css file is created in `main.css` with colors.
