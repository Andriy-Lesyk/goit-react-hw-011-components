import PropTypes from "prop-types"
import items from "./data/transaction.json"
import user from "./data/user.json";
import friends from "./data/friends.json";
import stat from "./data/statistic.json";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics"
import Friends from "./Frieds/Frieds";
import Transaction from "./Transaction/Transaction"

export const App = () => {
  return (
    <div>
        <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statis={user.stats}
        /> 
        <Statistics
        title={'upload stats'}
        stats={ stat}
        />
        <Friends friends={friends}
        />
        <Transaction items={items}
        />
    </div>
  );
};
Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  statis: PropTypes.object,
}
Statistics.propTypes={
  title: PropTypes.string,
  stats : PropTypes.array,
}
Friends.propTypes = {
  friends: PropTypes.array,
}
Transaction.propTypes={
  items:PropTypes.array,
};
