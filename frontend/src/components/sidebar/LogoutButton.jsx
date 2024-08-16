import { BiLogOut } from "react-icons/bi";
import { useLogoutHook } from "../../hooks/useLogoutHook";

export const LogoutButton = () => {
  const { loading, logout } = useLogoutHook();
  //console.log("loading ", loading);
  //console.log("logout ", logout);

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
