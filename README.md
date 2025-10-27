# NetFlix GPT ->

- Created using Vite
- Configured Tailwind CSS
- Header
- Routing of app
- Login form
- sign up form
- Form validations
- useRef Hook
- firebase setup
- deploy app to production
- create sign up user account
- Implement sign in user api
- Created redux store with userSlice (npm i -D @reduxjs/toolkit and npm i react-redux)
- Implemented Sign out
- Bug fix: Sign up user display name
- Bug fix: if the user is not logged in then redirect /browse to login page and vice a versa
- Unsubscibe to onAuthStateChange Callback
- In react as strict mode api is called twice only while developing mode locally becoz react does extra rendering of comp to check for inconsistence between the calls and it does not happen in production.
- Registered TMDB api & create an app & get access token
- get data from TMDB now playing movie list api
- custom hook for now playing, top rated, upcoming, popular movies
- fetch and update store for trailer video
- build movies list and card

# Features

- Login / Sign Up
  - Sign In / Sign Up Form
  - redirect to browse Page
- Browse (After Authetication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - Movie x N
- Netflix GPT
  - Search Bar
  - Movie Suggestions
