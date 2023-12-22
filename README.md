# Ohp

#### React application that connects tattoo artists with clients. Uses Firebase for the backend.

#### By Jake Elsberry

## Technologies Used

- JavaScript
- React 
- Node 
- npm 
- Firebase/Firestore
- CSS
- HTML
- Material UI

## Description
Ohp is intended to connect those looking to get a tattoo with an artist who is available to work. Users can create an account and see a list of artists, look at past work, and book an appointment(WIP).

## Setup & Installation
* Clone repository at https://github.com/Schmelzberry/Capstone

### Firebase 

Step 1:
* Create Firebase Account for hosting database here. https://firebase.google.com/
* Create a Firebase Project. Go to the Firebase Console.
Click on the "Add Project" button.
* Enter a name for your project and choose your country/region. Click "Next."
* Review your project configuration and click "Create Project."

Step 2: 
* Enable Authentication
In the Firebase Console, click on "Authentication" in the left menu.

* Choose the "Sign-in method" tab.
Enable the authentication methods you want to use (Email/Password, Google).
* Configure each authentication method and save the changes.

Step 3:

* Set Up Your Web Application
In the Firebase Console, click on the gear icon and select "Project Settings."

* In the General tab, scroll down to the "Your apps" section.

* Click on the "</>" icon to add a new app to your project.

* Register your app by providing a nickname (e.g., Ohp) and click "Register App."

* Copy the Firebase SDK configuration code snippet. It looks like this:


```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```
* Copy the Firebase SDK values into the values below, then create a .env file(add it to .gitignore and save file in order to ignore sensitive info)

* The .env file should look as such with your personal values pasted on the right side of the equal sign, replacing the words "YOUR_API_KEY.
```
REACT_APP_FIREBASE_API_KEY = "YOUR_API_KEY"
REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR_AUTH_DOMAIN"
REACT_APP_FIREBASE_PROJECT_ID = "YOUR_PROJECT_ID"
REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR_STORAGE_BUCKET"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR_MESSAGING_SENDER_ID"
REACT_APP_FIREBASE_APP_ID = "YOUR_APP_ID"
```
### Run Project
* Now that firebase is installed, we can run the project. 

* Navigate to topmost folder in project directory, install necessary packages with ```$ npm install```

* run project in local web browser with ```$ npm run start```

## Known Bugs


* Loading User Information - collection is coming back null when trying to pull user data.

* When editing information, existing values don't populate text fields and therefore need to be re-entered even if the value isnt being changed. 

* Booking form complete - need to send data and store it in each artist 

## License

MIT License

Copyright (c) 2023 Jake Elsberry


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



## Research & Planning Log
### Friday, 12/01

``` 
8:10: decide how to proceed today - React or C#? Both?

8:30: Follow along with React tutorial making a React App that changes state and contains information about the React Library: 

https://www.youtube.com/watch?v=bMknfKXIFA8

9:05: Done setting up Scrimba, the code editor for projects. 

10:00: Navbar style for project not updating, bug resolved around 9:40.

10:50: Main information section is functional, a static site made with simple components but haven't used vanilla React before

11:30: Finish up information site and look ahead to AirBnB Clone later in same React course, https://www.youtube.com/watch?v=bMknfKXIFA8


12:10: Last commit before lunch, done with React for today and want to research Blazor after lunch ~1pm.

1:00: Read Microsoft Docs on Blazor, seems quite similar to MVC with slight name changes. Also checking Youtube for information.

1:30: Learned that Blazor and React are very comparable. Blazer is Microsoft's answer to React, it's meant to dynamically change UIs similar to how React can. Video: 

https://www.youtube.com/watch?v=HHPQ0KIWCKU


2:20: Video on why Blazer is an important skill to have and discusses how it improves on React

https://www.youtube.com/watch?v=OUUlO8fQOfE

3:00: Started following this tutorial on a full stack Blazor app. Ran into an issue with .NET not being installed on my PC and spent some time troubleshooting/reinstalling.


https://www.youtube.com/watch?v=YwZdtLEtROA

3:50: Still following video from 3:00, I have ran into a lot of bugs where im trying to type too fast to keep up. Need to slow video down and think about why Im adding the code that I am.


4:40: Still working on Blazor application but really like the idea of using C# and Blazor as opposed to React after spending the afternoon researching. I feel like next week I will be ready to start coding if I can definitively decide on the technology I want to use.
```

### Friday, 12/08

```
8:30 Work on research proposal log, committing to React

11:50 step back from coding before lunch and go to draw.io to better plan state management for react app

1:05 back from lunch and working on draw.io diagram

1:25 done with basic diagram, back to coding normally

~2:30 encountered a bug with the artist form, and now it works but it wont display information in DOM. Still a WIP @ 3:45
```

### Sunday, 12/10

```
6:50 UI inspiration. Looking at Netflix, Air BnB, Spotify

7:20 Follow code along of semi recent Netflix clone

https://www.youtube.com/watch?v=HW5roUF2RLg

8:00 : Continue netflix clone

8:40: netflix clone continued, search bar functionality seems like it will transfer well to my project

9:15 wrap up code along project, @ 1 hour 33 minutes currently

```

### Friday, 12/15
```
8:15: Look at Material UI documentation - DataGrid was very helpful on past project

9:00: Back to coding project, Material UI will need to come later after i'm closer to MVP

*CODED NORMALLY BETWEEN 9 and 12, commits show this

11:50 Review noSQl and Hooks before refactor

12:30 considered Redux for state management, going to proceed with hooks as I am more comfortable with that

3:20 Looking back to LHTP to see how we implemented hooks in help queue, need to see a success case to get back on track

4:00 - Researching hooks vs class state management in react

4:30 - know how to proceed tomorrow to refactor state management, followed along with help queue to figure it out.
```
### Sunday, 12/17
```


9:00pm - want to have a clickable calendar that can schedule, looking at example repo from https://fullcalendar.io/

9:30 - cloned down full calendar repo and following basic example @ 

https://github.com/fullcalendar/fullcalendar-examples/tree/main/webpack

10:10: Adding calendar to my project, done researching

12:00 Read full calendar docs again

1:00 abandon calendar for now, back to coding
```
### Monday, 12/18
```

9:30 - plan day, between new client form and adding authenticantion

9:30-12:30 coding

12:30 - research alternate firebase authorization schemes

code from 12:30 - 4:30

* Tomorrow plan - build out user component and allow artists to add past work in a portfolio component

```

### Tuesday, 12/19
```
* 5:30 Pivot from styling to planning for tomorrow and organizing README

* EOD, start with artist appointments tomorrow, then try and tackle user data?
```
