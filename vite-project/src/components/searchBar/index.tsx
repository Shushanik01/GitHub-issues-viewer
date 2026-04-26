import { FaGithub } from "react-icons/fa";
import { GoIssueOpened } from "react-icons/go";
import styles from './index.module.css'
import { FiSearch } from "react-icons/fi";
// import { VscIssues } from "react-icons/vsc";
import { useState } from "react";


export const SearchBar = ({ onSearch }: {onSearch:(owner:string, repo:string)=>void}) => {

    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        const [owner, repo] = inputValue.split('/');
        onSearch(owner, repo);
    }
    return (
        <div className={styles.Container}>
            <div className={styles.title}>
                <h1>Search for issues based on repository</h1>
                <FaGithub size={24} /> <GoIssueOpened size={24} />
                {/* <VscIssues size={24}/> */}
            </div>
            <div className={styles.inputWrapper}>
                <input
                    placeholder="Write repository name (e.g. facebook/react)"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSearch()}
                />
                <button
                onClick={handleSearch}
                >Search <FiSearch size={20}/></button>
            </div>
        </div>
    );
};