import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoggleLogins = () => {
  const { googleLogin } = useAuth();
  return (
    <button onClick={() => googleLogin()} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoggleLogins;
