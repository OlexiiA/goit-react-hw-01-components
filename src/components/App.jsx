import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from "./dataBase/user";
import data from "./dataBase/data";
import friends from "./dataBase/friends";
import transactions from "./dataBase/transactions";



export const App = () => {
  return (
    <div 
    style={{
      alignItems: 'center',
      backgroundColor: 'hsla(0,2%,83%,.2)',
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      maxWidth: '1170px',
      padding: '15px',
    }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
