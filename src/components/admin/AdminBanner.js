import React from "react";

function AdminBanner(props) {
  return (
    <div className="admin-banner">
      <span>Welcome {props.user.name}! You are signed in as an editor.</span>
      <button onClick={props.signOut}>Sign Out</button>
    </div>
  );
}

export default AdminBanner;
