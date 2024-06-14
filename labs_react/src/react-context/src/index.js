import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const themeDefault = { border: '10px solid red' };
const themeContext = createContext(themeDefault);

function App() {
    const theme = useContext(themeContext);
    console.log('theme', theme);
    return (
        <themeContext.Provider value={{ border: '10px solid blue' }}>
            <div className="root" style={theme}>
                <h1>Hello World!</h1>
                <Sub1 />
            </div>
        </themeContext.Provider>
    );
}

function Sub1() {
    const theme = useContext(themeContext);
    return (
        <themeContext.Provider value={{ border: '10px solid green' }}>
            <div style={theme}>
                <h1>Sub1</h1>
                <Sub2 />
            </div>
        </themeContext.Provider>
    );
}
function Sub2() {
    const theme = useContext(themeContext);
    return (
        <div style={theme}>
            <h1>Sub2</h1>
            <Sub3 />
        </div>
    );
}
function Sub3() {
    const theme = useContext(themeContext);
    return (
        <div style={theme}>
            <h1>Sub3</h1>
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
