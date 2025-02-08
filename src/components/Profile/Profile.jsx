import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={css.profile}>
    <div className={css.profile__inner}>
      <img className={css.profile__avatar} src={image} alt={name} />
      <p className={css['profile__user-name']}>{name}</p>
      <p className={`${css['profile__user-tag']} ${css['gray-text']}`}>
        @{tag}
      </p>
      <p className={`${css['profile__user-location']} ${css['gray-text']}`}>
        {location}
      </p>
    </div>
    <ul className={css.profile__list}>
      <li className={css.profile__item}>
        <span
          className={`${css['profile__item-followers']} ${css['soc1al-description']}`}
        >
          Followers
        </span>
        <span
          className={`${css['profile__item-followers-stats']} ${css.stats}`}
        >
          {stats.followers}
        </span>
      </li>
      <li className={css.profile__item}>
        <span
          className={`${css['profile__item-views']} ${css['soc1al-description']}`}
        >
          Views
        </span>
        <span className={`${css['profile__item-views-stats']} ${css.stats}`}>
          {stats.views}
        </span>
      </li>
      <li className={css.profile__item}>
        <span
          className={`${css['profile__item-likes']} ${css['soc1al-description']}`}
        >
          Likes
        </span>
        <span className={`${css['profile__item-likes-stats']} ${css.stats}`}>
          {stats.likes}
        </span>
      </li>
    </ul>
  </div>
);
export default Profile;
