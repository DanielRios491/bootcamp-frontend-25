import { createContext, useContext, useState } from 'react';

const LanguageProvider = createContext();

const languages = ['JavaScript', 'Python'];

export function useImageSize() {
    return useContext(LanguageProvider);
}

export function FavoriteLanguageProvider({ children }) {
    const [language, setLanguage] = useState(languages);

    return (
        <LanguageProvider.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageProvider.Provider>
    );
}
