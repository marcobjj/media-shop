import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Body from './components/body'
import Header from './components/header'
import Detail from './components/detail'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Body/>
    <Detail  image="./assets/fightclub.png" title="Fight Club" price="39.90"
         description="A depressed man (Edward Norton) suffering from insomnia meets
          a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds 
          himself living in his squalid house after his perfect apartment is destroyed. 
          The two bored men form an underground club with strict rules and fight other 
          men who are fed up with their mundane lives. Their perfect partnership frays 
          when Marla (Helena Bonham Carter), a fellow support group crasher, attracts 
          Tyler's attention."/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
