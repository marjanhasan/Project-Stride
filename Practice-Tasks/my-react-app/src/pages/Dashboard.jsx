import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
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
    </div>
  );
};

export default Dashboard;
