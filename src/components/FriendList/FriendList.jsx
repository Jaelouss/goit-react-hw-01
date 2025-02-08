import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friend__item}>
            <img
              className={css.friend__avatar}
              src={friend.avatar}
              alt={friend.name}
              width={48}
            />
            <p className={css.friend__name}>{friend.name}</p>
            <p
              className={`${css.friend__status} ${
                friend.isOnline
                  ? css.friend__status_online
                  : css.friend__status_offline
              }`}
            >
              {friend.isOnline ? 'Online' : 'Offline'}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
