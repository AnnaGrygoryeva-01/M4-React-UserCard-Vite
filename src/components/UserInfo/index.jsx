import styles from "./UserInfo.module.css";

function UserInfo({ user }) {
  const { name, surname, gender, location, stats, media } = user;

  const fullName = `${name} ${surname}`;
  const userGenderStyle = {
    boxShadow: `0 0 15px ${gender === "female" ? "purple" : "navy"}`,
  };

  return (
    <article className={styles.userCard}>
      <img className={styles.backgroundImg} src={media?.backgroundImg} alt="" />
      <img
        className={styles.userImage}
        style={userGenderStyle}
        src={media?.imgSrc}
        alt={fullName}
      />
      <h2 className={styles.userName}>{fullName}</h2>
      <p>
        {location?.city}, {location?.country}
      </p>
      <ul className={styles.userStats}>
        <li className={styles.userStat}>
          <p className={styles.label}>Tweets</p>
          <p>{stats?.numberOfTweets}</p>
        </li>
        <li className={styles.userStat}>
          <p className={styles.label}>Following</p>
          <p>{stats?.numberOfFollowings}</p>
        </li>
        <li className={styles.userStat}>
          <p className={styles.label}>Followers</p>
          <p>{stats?.numberOfFollowers}</p>
        </li>
      </ul>
    </article>
  );
}

export default UserInfo;
