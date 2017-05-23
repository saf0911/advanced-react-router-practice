import React from "react";
import {connect} from "react-redux";

function Profile(props) {
  const userId = 0;
  const user = props.users.find(u => u.id == userId) || {};
  return (
    <div>
      <h3>{user.firstName} {user.lastName}</h3>
      <h4>{user.occupation}</h4>
      <p>{user.phone}</p>
      <p>
        {user.address}
      </p>
    </div>
  );
}
export default connect(function (state) {
  return {users: state.users};
})(Profile);
