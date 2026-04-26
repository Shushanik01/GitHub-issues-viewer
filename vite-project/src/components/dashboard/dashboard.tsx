import styles from './dashboard.module.css';
import Slots from '../slots/slots';
// import { useState } from 'react';

const Dashboard = ({ data, page, setPage }) => {

    const handlePrevious = () => {

        setPage(prevPage => prevPage - 1)
    };

    const handleNext = () => {
        setPage(prevPage => prevPage + 1)
    }

    return (
        <div className={styles.container}>

            {data.map(issue => <Slots key={issue.id} data={issue} />)}
            <div className={styles.btns}>
                <button
                    onClick={handlePrevious}
                    disabled={page === 1}
                >Previous</button>
                <span className={styles.pageNumber}>{page}</span>
                <button
                    onClick={handleNext}
                >Next</button>
            </div>
        </div>
    )
}
export default Dashboard