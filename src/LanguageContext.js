import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import i18n from 'i18next'; // Your i18next config

// Create the context
export const LanguageContext = createContext();

// Context Provider component
export const LanguageProvider = ({ children }) => {
    const location = useLocation();
    const [language, setLanguage] = useState('en'); // Default language

    useEffect(() => {
        // Extract 'lan' query parameter
        const params = new URLSearchParams(location.search);
        const lan = params.get('lan') || 'en'; // Default to 'en'

        // Update state and i18next language
        setLanguage(lan);
        i18n.changeLanguage(lan);
    }, [location]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
