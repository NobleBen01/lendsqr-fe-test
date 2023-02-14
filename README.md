# LENDSQR-FE-TEST

## LENDSQR WEB APPLICATION

The one thing we think about non-stop at Lendsqr is how we can get every African an access to loans just when they need it. The incredible stories we hear about those who live in developed countries are anchored on ordinary citizens having access to loans to go to school, get their first homes, cards, and even smartphones. In Nigeria and Africa, most dreams are never realized because we don't have access to loans or credit to give us that leg up.

Lendsqr is changing that story. For good!

Over the last few years, Lendsqr has been revolutionizing how everyone can get loans easily by helping lenders with the technology, data, and services they need to launch their digital lending at scale.

## GETTING Setup

This is a demo application built in line with the application requirements for the role of front-end developer at Lendsqr. It is a React typescript application

### Installing Dependencies

#### Installing Node and NPM
This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from https://nodejs.com/en/download.

#### Installing project dependencies
This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root directory of this repository. 

```bash
npm install
```
> _sidenote_: all the pages have only been built and can only be seen by navigating through the React Router.

## Running Your Frontend

NPM ships with a useful development server which detects changes and transpiles as you work. The application is then accessible through the browser on a localhost port. To run the development server, cd into the `frontend` directory and run:

```bash
npm run dev
```

## Other Information
The designs are a bit sketchy, but this is what I come up with in the short time frame.

1. The app opens with the login page.
2. The user page or dashboard exists on '/user' route and should be the next page to pop up if the login flow is implemented to verify the login details from the login interface.
3. The pop up modal on each of the table heads in the table has also been implemented
4. The userprofile page exists on the '/userprofile' route and retreives data from the API using local storage.
