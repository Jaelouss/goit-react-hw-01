import React from 'react';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
  return (
    <div>
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
    </div>
  );
};
