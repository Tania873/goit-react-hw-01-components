import { Profile } from 'components/Profile/Profile';
import user from '../../json/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from '../../json/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from '../../json/friends.json';

import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../json/transactions.json';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
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
