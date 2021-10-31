import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import LoadingSpiner from "../../LoadingSpiner/LoadingSpiner";

const Login = () => {
  const { user, signInUsingGoogle, isLoading, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/home";
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((res) => {
        history.push(redirectUrl);
      })
      .catch((error) => {
        history.push("/loginerror");
        setIsLoading(false);
      });
  };
  const successIcon = <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>;
  const googleIcon = <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>;

  if (isLoading) {
    return (
      <>
        <h2 className="mt-5 text-2xl font-bold">Please wait while Login</h2>
        <LoadingSpiner></LoadingSpiner>
      </>
    );
  }

  return (
    <div>
      <div className="w-2/3 mx-auto rounded-md my-5 p-5 bg-yellow-100 tt-already-login">
        {user?.email ? (
          <h2 className="text-6xl">
            <span className="text-green-500">{successIcon}</span> You are
            already logged in
          </h2>
        ) : (
          <div className="w-2/3 mx-auto">
            <div>
              <h2 className="text-4xl font-bold my-4">
                Please sign in using google
              </h2>
            </div>
            <button
              onClick={handleGoogleSignIn}
              className="w-1/2 uppercase h-12 mt-3 text-white rounded bg-red-800 hover:bg-red-900 text-xl"
            >
              {googleIcon} Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
