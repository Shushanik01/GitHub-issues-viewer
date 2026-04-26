import {SearchBar} from '../components/searchBar/index';
import { useState, useEffect } from 'react';
import { getIssues } from '../services/githubApi';
import Dashboard from '../components/dashboard/dashboard';
import Theme from '../components/theme/theme';
import Filtering from '../components/filter/filterLogic';
import styles from './App.module.css';
import type { Issue } from '../types';

 export default function App(){
    const [owner, setOwner] = useState('facebook');
    const [repo, setRepo] = useState('react');
    const [allIssues, setAllIssues] = useState<Issue[]>([]);
    const [issues, setIssues] = useState<Issue[]>([]);
    const [page, setPage] = useState(1);
    const [theme, setTheme] = useState<'Light' | 'Dark'>('Light');

    const handleSearch = (owner: string, repo:string)=>{
        setOwner(owner)
        setRepo(repo)        
    };

    useEffect(()=>{
        if(owner && repo && page){
            getIssues(owner, repo, page).then(data => { setAllIssues(data); setIssues(data); })
        }
    },[owner, repo, page]);

    return(
        <>
            <Theme theme={theme} setTheme={setTheme}/>
            <SearchBar onSearch={handleSearch}/>
            <div className={styles.layout}>
                <Filtering data={allIssues} setIssues={setIssues}/>
                <Dashboard data={issues} page={page} setPage={setPage}/>
            </div>
        </>
    )
 }