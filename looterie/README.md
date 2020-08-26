# React App Initiation

## Props: An important React concept
We can use it like that when calling the component:
`<Component prop1={something1} prop2={something2}/>`
The prop can be used on the component like below:
`const Component = (props) => { {props.prop1} };`

## State: To modify any variable (Speed purposes)
> The Vanilla JS
`let counter;`
> React.js
`const [counter, setCounter] = useState(0);`
`cosnt [toggle, setToggle] = useState(false);`
 - With `useState` we will have access to the `prev` value of counter



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!




