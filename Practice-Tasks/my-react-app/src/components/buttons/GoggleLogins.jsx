import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoggleLogins = () => {
  const { googleLogin } = useAuth();

  const handleLogin = () => {
    googleLogin().then((data) => {
      const userInfo = {
        name: data?.user?.displayName,
        email: data?.user?.email,
      };
      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
        });
    });
  };

  return (
    <button onClick={handleLogin} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoggleLogins;
