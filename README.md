# Podcast-Platform

## Objective:- To showcase Front-End Development Skills.

## Project Details:-
1. Building a **Podcast Platform** using **React** integrated with **Firebase** and **Redux Toolkit**.
2. __Firebase__ is used for authentication, storage and Database features.
3. __Redux Toolkit__ is used for Effective State Management.
4. Figma link:- ``` https://www.figma.com/file/FwPqdG48VI7UcVtm2ElCUj/Podcast-Platform?node-id=0%3A1&t=wZuYLaRi6ROreQSF-1```


## CodeBase Setup:-
1.In CMD ```npx create-react-app project_name``` to create a react app.\
2.Clean the code by removing unnecessary files and folder.\
3.Import fonts from desired library.\
4.Created __root variables__  which allows us to create variables for colors.

### Note:- __Font library__ used **Google Fonts**

## Firebase Setup
Firebase works as a Backend As A Service[BAAS]\
There are various services provided by Firebase but here I am using Authemtication and Firestore Database.\
To install Firebase CMD ```npm install firebase```\
To initialise Firebase services visit  ```https://console.firebase.google.com/```

__Firebase Documentation__:- ```https://firebase.google.com/docs?hl=en&authuser=0&_gl=1*aq0kuz*_ga*MTg5OTg3Mzg4Ni4xNzEzMjQxMzEz*_ga_CW55HF8NVT*MTcxMzI0ODc3OS4yLjEuMTcxMzI0OTAyMy41Ni4wLjA.```

## Redux Toolkit Setup
CMD:- ```npm install react redux```\
      ```npm install @reduxjs/toolkit```

### Note:- You can check the dependencies in ```Package.json``` file.

__Redux__ is a state management tool that allow to manage state, create global state and keeps the record of actions and state.\
__Reducer__ a part in redux which deals with entire state, it contains file that contains data and actionables perform on state.\
__Provider__ is used to provide all the data of redux throughout the App.\
More information:- ```https://redux-toolkit.js.org/usage/usage-guide```


## React-Router-DOM Setup
CMD:- ```npm install react-router-dom```\
It enables dynamic routing on Web App.\
It facilitates component-based routing according to the needs of the app and platform.\
More information:- ```https://reactrouter.com/en/main/start/tutorial```


## Header Section
Here we have actually started coding and making components.\
Structuring the Header Section using __JSX__ and styling it via __CSS__.\
__useLocation()__ hook was used, this hook returns the current location object.\
This can be useful if you'd like to perform some side effect whenever the current location changes.\
In this site the state of navbar links changes whenever there is change in location.\
Along with this __Ternery Operators__ were used for conditional rendering.

More information about useLocation Hook :- ```https://reactrouter.com/en/main/hooks/use-location```

## SignUp Page
Here componenets were organised in Common Components and SignUp components folders for better organisation of code and also for better reusabilty.\
Input form was made to insert data by the user.
