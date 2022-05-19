/* trong đây ta sẽ viết cả context và cả provider */

import { useState, createContext } from 'react';

const ThemeContext = createContext();
console.log(ThemeContext)

function ThemeProvider({ children }) { // biến components này ôm dc components khác {} wraper
    const [theme, setTheme] = useState('dark')


    const toggleTheme = () => {
        setTheme(theme === 'dart' ? 'light' : 'dart') // nếu theme = dart thì sẽ đổi thành light, nếu light -> dart
    }


    //
    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }