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


## Fetching User Object
Here we focus on user authentication state management.\
Goal is to ensure that the user state persists across different pages of the application and even after refreshing the page.\
The two key steps to achieve this are:-
1. Create a __useEffect hook__ to fetch the user state and save it in Redux.
2. Establish __private routes__ to ensure only authenticated users access certain parts of the app.

   
### Process:-
1. Create a __useEffect hook__: The hook will fetch the user state using the __onAuthStateChanged__  method from Firebase. Once fetched, the state is saved in Redux. This hook ensures that the user state is available on every page of the application.
2. Use the __onSnapshot function__: This function triggers whenever something changes in our document. It fetches the document of the current user from the database. If the document exists, it gets all the user data and stores it.
3. Implement __User State Check__: To avoid errors due to the asynchronous nature of fetching user state, implement a loading state. This way, certain parts of the app will only render when the user state is available.



## Private Routes
Establish Private Routes: To keep some parts of the app accessible only to authenticated users, create a separate component for private routes.\
Use a package such as react-firebase to help with this process.\
To install dependencies:-\
CMD:- ```npm i react-firebase-hooks```\
More information:- ```https://www.npmjs.com/package/react-firebase-hooks```


## Create a Podcast Page
This feature is integral to our podcast platform as it allows users to add new podcasts to the platform.\
We used the React framework, specifically the React Router and the useState and useEffect hooks, to manage the application's state and route between different pages.

### Process:-
1. Set up the __'Create a Podcast'__ route: We began by setting up a new route in our router file. This route leads to a 'Create a Podcast' page that contains a form for users to input details about their podcast.
2. Built the 'Create a Podcast' form: We created a form with fields for the podcast's title, description, and images. For image uploads, we created a custom file input component, which improves the user interface (UI) experience by providing a custom styled file picker.
3. Handle form submission: We created a function to handle form submissions. Upon submission, the form data is collected, validated, and ready to be sent to a server for processing.
4. Implement authentication: We ensured that only authenticated users can access the 'Create a Podcast' page. This is important to track who created a podcast and maintain the security of our platform.



## Uploading Podcast Page Files on Firebase
 The primary focus is the construction of a 'Create a Podcast' page, an essential feature enabling users to upload new podcasts and their corresponding banner and display images.\
 Firebase's storage service is employed to manage the file uploads and generate accessible, downloadable URLs for future use.

### Process
1. Started by preparing for file upload: Import required Firebase services (storage and database) and initialize the image references.
2. Created a function to manage the file uploads to Firebase Storage. This function should take the file from the form input, generate a unique storage reference based on user's ID and current date, and upload the file using the __uploadBytes function__.
3. Once the file is uploaded, retrieve the download URL using Firebase's __getDownloadURL function__. This URL can be used for downloading the file at a later stage.
4. Store the podcast's data, including title, description, and file URLs, in the Firebase Database by creating a new document in the 'Podcasts' collection and setting its data to the podcast's information.



## Podcast Page
Fetching all of our podcasts and storing them in Redux, so they are readily available for future page visits.
1. Created a new slice in Redux: Just like we previously created a user slice, we created a new slice called the __podcast slice__. This slice includes reducers and actions to manage the podcast data in our __Redux store__.
2. Implemented the podcast slice in the Redux store: After creating the podcast slice, we implemented it in our Redux store. This way, we can use the slice to store and manage podcast data.
3. Fetched all podcasts: We fetched all of our podcasts from the database. To accomplish this, we used the Firebase __onSnapshot method__, which provides real-time updates of our data.
4. Stored podcasts in Redux: After fetching the podcasts, we stored them in our Redux store. This way, we will be able to access the podcasts across our application without having to fetch them from the database each time.
5. Displayed podcasts on the podcast page: Lastly, we created a podcast page that will display all of our podcasts. If no podcasts are found, the page will display a message indicating that no podcasts are currently available.



## Podcast Details Page
We have created a podcast details page that fetches podcast details and episodes from Firebase.\
Fetched the specific podcast details using __React's useEffect__ and handled potential errors.\
Styled the page for a better user interface, including aligning text, adding banner images, and adjusting color schemes.

### Process
1. __Created the Podcast Details Page__: A new page called __podcast details.js__ is created for displaying individual podcast details.
2. __Add the Page to the Router__: The newly created page is added to the router to make it accessible.
3. __Fetch Podcast Details__: Using __React's use Effect__ and the podcast's unique ID, the specific podcast details are fetched from Firebase.
4. __Create a use State for the Podcast__: A use State is created to store the podcast details fetched from the database.
5. __Display the Podcast Details__: The fetched podcast details are displayed on the page, including the title and the description.
6. __Styling the Page__: The page is styled for a better user interface using CSS.

### Due to local system issues _React_ folder was deleted so here I have used Git to restore the code
I have used ```git clone <repository address>``` command and code saved in github was cloned in local system thus saving a lot of time.\
Resumed the project without any hastle just needed was to install previously installed dependecies again thanks to my documentation habit it was also easy to reinstall all the dependencies.



## Create An Episode
Created an 'episode page' for a podcast application, where users can add new episodes to an existing podcast.\
The process involves creating a new page, designing a form for users to fill out, and implementing the logic to handle user input and interaction.\
Here, we're using JavaScript, along with libraries like React, and a Firebase database to store our data.

### Process
1. Created a new page: Begin by creating a new JavaScript file for the 'Create an Episode' page. This page should include a form for users to input details about the new episode.
2. Worked on the router: Update your router to include a route to your new page.
3. Implemented the form: The form should include fields for the title, description, and an audio file for the episode. Use the useState React Hook to manage the input states.
4. Handle form submission: Upon form submission, validate the user input and handle any errors. If all fields are filled correctly, upload the audio file to your Firebase storage and create a new document in the episodes collection of your Firebase database.
5. Fetched and displayed episodes: Finally, in the podcast details page, fetch the episodes data from the Firebase database and display it.

