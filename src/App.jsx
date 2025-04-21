import React from "react";
import 'modern-normalize'
import './App.css'
// components
import Profile from "./components/Profile/Profile";
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// data
import userData from './data/userData.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {

    return (
        <div className='App'>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    )
}

export default App