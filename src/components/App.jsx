import './App.css';
import Profile from './Profile/Profile';
import FriendListItem from './FriendList/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactionHistory.json';

const App = () => {
  return (
    <>
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </>
      <>
        <FriendListItem friends={friends} />
      </>
      <>
        <TransactionHistory items={transactions} />
      </>
    </>
  );
};
export default App;
