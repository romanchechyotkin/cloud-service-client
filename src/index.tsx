import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app/App';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {StoreProvider} from "app/providers/StoreProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <StoreProvider>
                <App />
            </StoreProvider>
        </ThemeProvider>
    </BrowserRouter>
);
