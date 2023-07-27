# QRcode Uploader

Project to test upload a video from smartphone

## Summary

- [Getting Started](#getting-started)
- [Runing the tests](#running-the-tests)
- [Deployment](#deployment)
- [Built With](#built-with)

## Getting Started

These instructions will get you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on how to deploy the project on a live system.

### Images
![Untitled design](https://github.com/dminatto/qrcode-uploader/assets/12018609/057072e2-e6bd-4e69-9e42-66bc2240d63c)

### Prerequisites

This project use node **v17.6.0**, you can use nvm to change the version

    nvm use

### Installing

Clone the repository:


    git clone git@github.com:dminatto/qrcode-uploader.git


Install the packages:

    npm i

Go to project directory:

    cd qrcode-uploader

In the project directory, you can run:

    npm start

Runs the app in the development mode.

Open http://localhost:3000 to view it in your browser.


## Built With

- [React](https://create-react-app.dev/) - Used for create web app
- [react-dropzone](https://react-dropzone.js.org/) - Used to upload videos
- [MUI](https://mui.com/) - UI tools
- [Amazon S3](https://aws.amazon.com/pt/s3/) - Used for video storage
- [qrcode](https://www.npmjs.com/package/qrcode) - Used to create qrcode
