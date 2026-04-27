import styles from "./UserInfo.module.css";

function UserInfo(props) {
  const {
    name,
    surname,
    gender,
    location: { city, country },
    stats,
    media,
  } = props.user;

  const fullName = `${name} ${surname}`;
  const userGenderStyle = {
    boxShadow: `0 0 15px ${gender === "female" ? "purple" : "navy"}`,
  };

  return (
    <article className={styles.userCard}>
      <img
        className={styles.backgroundImg}
        src={media.backgroundImg}
        alt={fullName}
      />
      <img
        className={styles.userImage}
        style={userGenderStyle}
        src={media.imgSrc}
        alt={fullName}
      />
      <h2 className={styles.userName}>{fullName}</h2>
      <p>
        {city}, {country}
      </p>
      <div className={styles.userStats}>
        <div className={styles.userStat}>
          <p className={styles.label}>Tweets</p>
          <p>{stats.numberOfTweets}</p>
        </div>
        <div className={styles.userStat}>
          <p className={styles.label}>Following</p>
          <p>{stats.numberOfFollowings}</p>
        </div>
        <div className={styles.userStat}>
          <p className={styles.label}>Followers</p>
          <p>{stats.numberOfFollowers}</p>
        </div>
      </div>
    </article>
  );
}

export default UserInfo;
