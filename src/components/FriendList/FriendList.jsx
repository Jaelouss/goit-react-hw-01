import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friend__item}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
