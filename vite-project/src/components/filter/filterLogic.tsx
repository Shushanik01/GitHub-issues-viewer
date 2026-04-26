import React, { useState } from "react";
import styles from "./filterLogic.module.css";
import type { Issue } from "../../types";

interface FilteringProps {
    data: Issue[];
    setIssues: React.Dispatch<React.SetStateAction<Issue[]>>
}

const Filtering = ({ data, setIssues } :FilteringProps) => {

    const [createdFilter, setCreatedFilter] = useState('');
    const [updatedFilter, setUpdatedFilter] = useState('');

    const createdAt = [
        ...new Set(data.map(item => item.created_at.split('T')[0]))
    ];

    const updatedAt = [
        ...new Set(data.map(item => item.updated_at.split('T')[0]))
    ];

    const applyFilters = (created: string, updated: string) => {
        setIssues(data.filter(issue => {
            const matchCreated = created ? issue.created_at.split('T')[0] === created : true;
            const matchUpdated = updated ? issue.updated_at.split('T')[0] === updated : true;
            return matchCreated && matchUpdated;
        }));
    };

    const handleSelectedCreatedDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setCreatedFilter(val);
        applyFilters(val, updatedFilter);
    };

    const handleSelectedUpdateDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setUpdatedFilter(val);
        applyFilters(createdFilter, val);
    };


    return (
        <div className={styles.container}>
            <div className={styles.filterGroup}>
                <label>Filter by Creation Date</label>
                <select name="time" onChange={handleSelectedCreatedDate}>
                    <option value="">All</option>
                    {createdAt.map((date) => (
                        <option key={date} value={date}>{date}</option>
                    ))}
                </select>
            </div>
            <div className={styles.filterGroup}>
                <label>Filter by Updated Date</label>
                <select name="updatedTime" onChange={handleSelectedUpdateDate}>
                    <option value="">All</option>
                    {updatedAt.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default Filtering