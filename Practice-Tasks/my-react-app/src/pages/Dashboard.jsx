import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  console.log(userInfo);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">User Dashboard</h1>

      <div className="w-24 rounded-full border-2 border-black mx-auto my-6 overflow-hidden">
        <img src={user?.photoURL || "/placeholder.jpg"} />
      </div>
      <h2 className="text-base">
        {" "}
        <span className="font-bold">UID : </span> {user?.uid}
      </h2>
      <h2 className="text-base">
        {" "}
        <span className="font-bold">NAME : </span>{" "}
        {user?.displayName || (
          <span className="text-red-700 font-medium">N/A</span>
        )}
      </h2>
      <h2 className="text-base">
        {" "}
        <span className="font-bold">EMAIL : </span> {user?.email}{" "}
        {user?.emailVerified ? (
          <span className="text-green-700 font-medium">(Verified)</span>
        ) : (
          <span className="text-red-700 font-medium">(Not Verified)</span>
        )}
      </h2>
      <h2 className="text-base">
        {" "}
        <span className="font-bold">PHONE NUMBER : </span>{" "}
        {user?.phoneNumber || (
          <span className="text-red-700 font-medium">N/A</span>
        )}
      </h2>
      <Link
        to={`/dashboard/edit/${userInfo?._id}`}
        className="font-bold text-blue-600"
      >
        Edit Profile
      </Link>
    </div>
  );
};

export default Dashboard;
