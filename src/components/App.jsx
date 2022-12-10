import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";

import user from "./dataBase/user";
import data from "./dataBase/data";
import friends from "./dataBase/friends";



export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
     <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
<FriendList friends={friends} />
    </div>
  );
};
