import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
function LoginForm({ onClose,onOpen ,onForget}) {
 
  return (
    <div>
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
        <div className="px-8 py-5 w-96 bg-white rounded-md shadow-2xl">
          <RxCross2
            onClick={onClose}
            className="float-right cursor-pointer text-xl"
          />
          <img
            src="/assets/mainlogo2.png"
            alt="logo"
            width={100}
            height={50}
            className="rounded-xl shadow-xl mx-auto mt-5 h-28 w-28"
          />
          <h1 className="text-xl text-center my-3">Sign in</h1>
          <button className="flex p-2 w-full items-center justify-center gap-3 border border-gray-300 rounded-lg">
            <FcGoogle className="text-2xl" />
            Continue With Google
          </button>
          <br />
          <label className="text-lg text-gray-700 mb-5">Email Address</label>
          <div className="h-10 text-xs border rounded-lg border-gray-500 flex justify-between items-center px-3">
            <input
              type="text"
              placeholder="@gmail.com"
              className="outline-none text-lg"
            />
          </div>
          <br />
          <label className="text-lg text-gray-700 mb-5">Password</label>
          <div className="h-10 text-xs border rounded-lg border-gray-500 flex justify-between items-center px-3">
            <input
              type="text"
              placeholder="*********"
              className="outline-none text-lg"
            />
          </div>
          <div className="flex items-center text-sm my-3 gap-2">
            <h1>Forget Password?</h1>
            <a href="#"onClick={onForget} className="text-blue-700">
              Click Here
            </a>
          </div>
          <button className="text-md cursor-pointer bg-gray-900 text-white rounded-md w-full text-center h-10">
            Continue
          </button>
          <div className="flex items-center my-2 text-sm gap-2">
            <h1>Already Have An Account?</h1>
            <a href="#"  onClick={onOpen} className="text-blue-700">
              Click Here
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default LoginForm;
