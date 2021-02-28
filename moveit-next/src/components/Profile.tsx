import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/47649607?s=460&u=a0d9af6ed56fbb185185931534d112856f1ea826&v=4" alt="Marco Antonio Giacomini"/>
      <div>
        <strong>Marco Antonio Giacomini</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}