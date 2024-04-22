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

## User Authentication and Saving User Information
For this Firebase was used as some of its features are __user authentication__ and __data storage__.\
__Flow__ of the code is in __SignUp__ page.\
1.Creating user's account\
2.Saving user's data\
3.Save data in redux, call the redux action\
4.Navigate to profile page

__Flow__ of the code in __Login__ page.\
1.Creating user's account.\
2.Save data in redux, call the redux action.\
3.Navigate to profile page.

Firebase functions like ```createUserWithEmailand Password```  ```signInWithEmailandPassword``` ```getDoc``` ```setDoc``` ```Doc``` were used to create and set account.\
Redux functions like ```dispatch``` which is used to call actions from redux was used.\
__Navigate__ accesses the React Router history object and navigates to the other routers using the push or replace methods was used to navigate to profile page after creating and saving data.

## React Toastify and Error Handling
__React Toastify__ is a free, popular, and MIT-licensed package that you can use to add toast notifications to your React application.\
In this part we are focused on enhancing the user experience by implementing form validations and user feedback.\
We'll use a simple NPM package called React Toast to show feedback messages or 'toasts'.\
Additionally, we'll work on setting up protected routes and fetching user details upon site visit.

To install Toastify dependency:-\
CMD:- ```npm i react-toastify```\
More information:- ```https://www.npmjs.com/package/react-toastify?activeTab=readme```

__Applications__\
Used Toasts for Feedback: Wrapped the entire application in the Toast Container. This enabled the use of toasts on all the different pages in the application.

Implemented Form Validations: Performed checks on the signup form and the login form. For example, checked if the password matches the confirm password, if the password is more than six characters long, etc. Used __toast.error__ to show error messages when validations fail.

Show Success Messages: Upon successful user creation or login, show a success message using __toast.success__.

Implement Loading State: Showing a loading state when the signup or login process is in progress. Disabled the signup/login button during this time to prevent multiple clicks.
