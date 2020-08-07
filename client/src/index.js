import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { CurrentUserProvider } from "./components/CurrentUserContext";
import { TweetProvider } from "./components/Tweet/Tweet";

const rootElement = document.getElementById('root');

ReactDOM.render(
    <TweetProvider>
        <CurrentUserProvider>
            <App />
        </CurrentUserProvider>
    </TweetProvider>
    , rootElement
);
