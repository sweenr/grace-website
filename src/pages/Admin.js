import React, { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";
import AdminBanner from "../components/admin/AdminBanner";
import HomeEditables from "../components/admin/HomeEditables";
import AboutEditables from "../components/admin/AboutEditables";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Admin() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((data) => {
      setUser(data.attributes);
    });

    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signIn") {
        Auth.currentAuthenticatedUser().then((data) => {
          setUser(data.attributes);
        });
      } else if (payload.event === "signOut") {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="admin-content">
      {user ? (
        <>
          <AdminBanner user={user} signOut={() => Auth.signOut()} />
          <HomeEditables />
          <AboutEditables />
        </>
      ) : (
        <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default Admin;
