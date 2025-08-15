import { BsCart4 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import LoginForm from "../../features/auth/LoginForm";
import SignupForm from "../../features/auth/SignupForm";
import ForgetPassword from "../../features/auth/forgetPassword";
function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [forgetOpen, setForgetOpen] = useState(false);
  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(close);
  };
  const handleSignupOpen = () => {
    setSignupOpen(true);
    setLoginOpen(close);
    setForgetOpen(close);
  };

  const handleSignupClose = () => {
    setSignupOpen(close);
  };
  const handleForgetOpen = () => {
    setForgetOpen(true);
    setLoginOpen(close);
    setSignupOpen(close);
  };

  const handleForgetClose = () => {
    setForgetOpen(close);
  };
  return (
    <div className="flex px-10 justify-between p-2 items-center bg-[#663ab7]">
      <a href="/">
        {" "}
        <img
          src="/assets/logo.png"
          alt="logo"
          width={100}
          height={50}
          className="rounded-xl h-20 w-20"
        />
      </a>
      <div className="w-96 h-12 text-sm border rounded-full border-gray-900  flex justify-between items-center  px-3">
        <input
          type="text"
          placeholder=" Search your item"
          className="outline-none"
        />
        <CiSearch className="text-2xl" />
      </div>
      <div className="flex items-center  gap-10">
        <BsCart4 className="text-3xl cursor-pointer" />
        <button
          onClick={handleLoginOpen}
          className="text-md cursor-pointer bg-gray-900 text-white rounded-md w-28  text-center h-10"
        >
          Login
        </button>
      </div>
      {loginOpen && (
        <LoginForm
          onClose={handleLoginClose}
          onOpen={handleSignupOpen}
          onForget={handleForgetOpen}
        />
      )}
      {signupOpen && <SignupForm onClose={handleSignupClose} />}
      {forgetOpen && <ForgetPassword onClose={handleForgetClose} />}
    </div>
  );
}

export default Navbar;
