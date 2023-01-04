import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import UserContext from './Contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContext>
            <App />
            <ToastContainer autoClose={1000} />
        </UserContext>
    </React.StrictMode>
);

reportWebVitals();
