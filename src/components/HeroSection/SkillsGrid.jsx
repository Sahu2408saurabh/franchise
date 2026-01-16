import styles from './skillgrid.css';

const SkillsGrid = () => {
  return (
    <div className={styles.skillsGrid}>
      <div className={styles.skillItem}>
        <div className={styles.skillTitle}>Financial Literacy</div>
      </div>
      <div className={styles.skillItem}>
        <div className={styles.skillTitle}>Maths</div>
      </div>
      <div className={styles.skillItem}>
        <div className={styles.skillTitle}>Personality Development</div>
      </div>
      <div className={styles.skillItem}>
        <div className={styles.skillTitle}>Confidence Building</div>
      </div>
      <div className={styles.skillItem}>
        <div className={styles.skillTitle}>Public Speaking</div>
      </div>
    </div>
  );
};

export default SkillsGrid;