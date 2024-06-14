This is a full-stack app for reskilling perpuses using React.js TailwindCSS Node.js and Express.js .

The app consist off 2 apps.

1) reskill-frontend-app Is the front end React app.
2) reskill-backend-app Is the backend Node app using the Express.js framework.

To run the apps open 2 terminals

For backend (non dev build) to start the server:

```
    cd reskill-backend-app
    npm install
    npm start
```

And to build (non dev build) and preview the frontend:

```
    cd reskill-frontend-app
    npm install
    npm run build
    npm run preview
```
<br/>
<br/>

NOTE: The backend server starts in port 5000 and frontend will try to fetch from this port. In order to change this the PORT constants must be changes in the following files:

```
    reskill-backend-app/server.js
    reskill-frontend-app/src/Post.jsx
    reskill-frontend-app/src/HomePage/PostHomePage.jsx
```
