Q1. What are components?
=> Components are the javascript files which contain HTML and JavaScript together to create a user interface.

Q2. What are props??
=> React Props are like function arguments in JavaScript and attributes in HTML.

Q3. How to Use CSS in React
Explain all methods by using a small code snippet.
=> 
# Inline Styling
class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}

# By using js object
class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div>
      <h1 style={mystyle}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}

# In App.css
body {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Arial;
  text-align: center;
}

# Index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
      </div>
    );
   
}
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));

# App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './mystyle.module.css'; 

class Car extends React.Component {
  render() {
    return <h1 className={styles.bigblue}>Hello Car!</h1>;
  }
}

export default Car;
 
 
# Index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './App.js';

ReactDOM.render(<Car />, document.getElementById('root'));
