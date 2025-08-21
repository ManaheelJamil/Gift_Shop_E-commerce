import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
function ForgetPassword({ onClose }) {
  return (
    <div>
      <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex items-center justify-center">
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
            className="rounded-xl mx-auto shadow-xl mt-10 h-28 w-28"
          />
          <h1 className="text-xl text-center my-3">Forget Your Password?</h1>
          
         
        
          <br />
          <label className="text-md text-gray-700 mb-5">Old Password</label>
          <div className="h-10 text-xs border rounded-lg border-gray-500 flex justify-between items-center px-3">
            <input
              type="text"
              placeholder="*********"
              className="outline-none text-lg"
            />
          </div>
         <br />
          <label className="text-md text-gray-700 mb-5">New Password</label>
          <div className="h-10 text-xs border rounded-lg border-gray-500 flex justify-between items-center px-3">
            <input
              type="text"
              placeholder="*********"
              className="outline-none text-lg"
            />
          </div>
          <button className="text-md mt-5 cursor-pointer bg-gray-900 text-white rounded-md w-full text-center h-10">
            Continue
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
