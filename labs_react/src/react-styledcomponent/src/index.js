import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';

function App() {
    const SimpleButton = styled.button`
        color: white;
        background-color: green;
    `;

    const LargeButton = styled(SimpleButton)`
        font-size: 50px;
    `;

    const ReactButton = (props) => {
        console.log('props', props);
        return <button className={props.className}>{props.children}</button>;
    };

    const ReactLargeButton = styled(ReactButton)`
        font-size: 50px;
    `;

    const PrimaryButton = styled.button`
        color: ${(props) => (props.primary ? 'white' : 'black')};
        background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
    `;
    return (
        <div>
            <SimpleButton>Simple</SimpleButton>
            <LargeButton>Large</LargeButton>
            <ReactButton>React</ReactButton>
            <ReactLargeButton>React Large</ReactLargeButton>
            <PrimaryButton>Normal</PrimaryButton>
            <PrimaryButton primary>Primary</PrimaryButton>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
