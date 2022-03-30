import user from "./data/user.json"
import Profile from "./Profile/Profile";

export const App = () => {
  return (
    <div>
        <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statis={ user.stats}/>
    </div>
  );
};
