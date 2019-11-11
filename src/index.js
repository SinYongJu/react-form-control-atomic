import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import LandingPage from './components/page/LandingPage';

const App = () => {
    return (
        <>
        <header>
            <h1>Form control</h1>
        </header>
        <LandingPage></LandingPage>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
