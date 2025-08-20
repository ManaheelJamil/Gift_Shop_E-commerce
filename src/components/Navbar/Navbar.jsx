import { BsCart4 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import LoginForm from "../../features/auth/LoginForm";
import SignupForm from "../../features/auth/SignupForm";
import ForgetPassword from "../../features/auth/forgetPassword";
import { CgMenuRightAlt } from "react-icons/cg";

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
    <div className="flex  sticky z-40 left-0 right-0 top-0 justify-between p-2 items-center bg-[#C8E6C9]">
      <div className="flex lg:w-[1250px] lg:mx-auto mx-5 justify-between w-full items-center">
        <a href="/">
          {" "}
          <img
            src="/assets/mainlogo2.png"
            alt="logo"
            width={100}
            height={50}
            className="lg:rounded-xl rounded-md lg:h-20 w-12 h-12 lg:w-20"
          />
        </a>
        <div className="lg:block hidden">
          <div className="w-[500px] h-12 text-sm border rounded-full text-[#444444] border-gray-900  flex justify-between items-center  px-3">
            <input
              type="text"
              placeholder=" Search your item"
              className="outline-none"
            />
            <CiSearch className="text-2xl text-gray-900" />
          </div>
        </div>
        <CgMenuRightAlt className="text-2xl lg:hidden block text-gray-900" />

      <div className="lg:block hidden">
          <div className="flex items-center  gap-10">
          <BsCart4 className="text-3xl cursor-pointer text-[#444444]" />
          <button
            onClick={handleLoginOpen}
            className="text-md   cursor-pointer bg-gray-900 text-white rounded-md w-28  text-center h-10"
          >
            Login
          </button>
        </div>
      </div>
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
