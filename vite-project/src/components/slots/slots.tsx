import styles from './slots.module.css';
import type { Issue } from '../../types';

const Slots = ({ data }: { data: Issue }) => {
    return(
        <div className={styles.slotContainer}>
            <span className={styles.headerWrapper}>
                <h2 data-title={data.title}><span>{data.title}</span></h2>
                <p className={styles.stateBadge}>{data.state}</p>
            </span>

            <div className={styles.dates}>
                <p>Created: {data.created_at.replace('T', ' ').slice(0, 16)}</p>
                <p>Updated: {data.updated_at.replace('T', ' ').slice(0, 16)}</p>
            </div>

            <section className={styles.userInfo}>
                <a href={data.user.html_url}>
                    <img src={data.user.avatar_url} className={styles.images} alt="profile pic" />
                </a>
                <p>{data.user.login}</p>
            </section>

            <div className={styles.footer}>
                <button className={styles.viewBtn}>View comments</button>
                <a href={data.html_url} className={styles.inspectLink}>View on GitHub 🔎</a>
            </div>
        </div>
    )
}
export default Slots
