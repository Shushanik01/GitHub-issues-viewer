import { useEffect } from "react";
import type { Dispatch, SetStateAction } from 'react';
import styles from './theme.module.css';

interface ThemeProps {
    theme: 'Light' | 'Dark';
    setTheme: Dispatch<SetStateAction<'Light' | 'Dark'>>;
}

function Theme({ theme, setTheme }: ThemeProps) {

    const handleThemeChange = () =>{
        setTheme(prevTheme => prevTheme === 'Light' ? 'Dark' : 'Light')
    };

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme) setTheme(savedTheme as 'Light' | 'Dark')
    }, []);

    useEffect(()=>{
        localStorage.setItem('theme', theme);
        document.body.setAttribute('data-theme', theme.toLowerCase());
    },[theme])

    return(
        <button
        className={styles.toggleBtn}
        onClick={handleThemeChange}
        >{theme === 'Light' ? '🌙 Dark' : '☀️ Light'} Mode</button>
    )
}
export default Theme