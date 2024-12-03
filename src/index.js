import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import App from './App';

import en from './locales/en.json'; // Import English translations
import ru from './locales/ru.json';
import uz from './locales/uz.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

i18n.init({
    interpolation: { escapeValue: false },
    lng: 'uz',
    resources: {
        en: { translation: en },
        ru: { translation: ru },
        uz: { translation: uz },
    }
});

root.render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
);
