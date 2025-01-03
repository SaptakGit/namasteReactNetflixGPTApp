# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Module not found: Error: Can't resolve 'web-vitals' in '/app/src'
    Step 1: Go to "src" folder then in "index.js"
    Step 2: Delete import reportWebVitals from './reportWebVitals';, reportWebVitals(); 

    this two line of code from there and you are ready to go.

# Netflix GPT
    - Create React App
    - Configure TailwindCss
    - Header
    - Login Form
    - Signup Form
    - Form Validation
    - useRef Hook
    - Firebase Setup
    - Deployinf our App to Production
    - Create Sign Up User Account
    - Implement Sign In user API
    - Created Redux Store with userSlice (**onAuthStateChange)
    - Implemented Sign Out
    - Update Profile Call
    - BugFix: Sign Up user Display Name and Profile picture update
    - BugFix: If the user is not logged in the redirect to Login Page and Vice-versa
    - Unsubscribed to the onAuthStateChange callback
    - Add Hardcoded values to the Constants File
    - Register TMDB API with VPN & Create an App & Get Access Token
    - Get Data from TMDB Now Playing movies list API
    - Custom Hook for Noe Playing Movies
    - Create movieSlice
    - Update Store with movies Data
    - Planning for MainCointainer & SecondaryCointainer
    - Fetch Data for trailer Video
    - Update Stoe eith Trailer Video Data
    - Embeded the Youtube video and make it autoplay and mute
    - Added tailwind classes to make main Cointainer look Awesome.
    - Build Secondary Component
    - Build Movie List
    - Build Movie Card
    - TMDB Image CDN URL
    - Made the browse page good with Tailwind CSS
    - usePopularMovies custom hook
    - GPT Search Page
    - GPT Search Bar
    - Multi-Language Feature in Our App(VVI)
    - Get Open AI Api Key
    - Gpt Search API Call
    - fetched gptMovieSuggestions from TMDB
    - created gptSlice added data
    - Reused Movie List Component to make movie suggestion cointainer
    - Memoization
    - Added .env file
    - Adding .env fileto gitignore
    - Made our Site Responsive


# Features
 - Login/ Signup
   - Signin /Signup form
   - Redirect to Browse page
 - Browse (After Authentication)
   - Header
   - Main Movie
     - Trailer in Background
     - Title $ Description
     - Movie Suggestions
       - Movie List
 
 - NetflixGPT
  - Search Bar
  - Movie Suggestions 

  ** For big forms use a Library like Forming

