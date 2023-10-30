import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const [formValues, setFormValues] = useState({
      "name": "",
            "userName": "",
            "email":"",
            "mobile": "",
            "check":false
    })
    const [nameError, setNameError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [mobileError, setMobileError] = useState(false);
    const [signUpError, setSignUpError] = useState(false);
    
    const navigate = useNavigate();

    const handleChange = (e)=>{
      setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = ()=> {
      let valid = true;
      if (!(formValues.name.trim().length > 0)) {
        setNameError(true);
        valid = false;
      } else {
        setNameError(false);
      }

      if(!(formValues.userName.trim().length > 0)) {
        setUserNameError(true);
        valid = false;
      } else {
        setUserNameError(false);
      }

      if(!(formValues.email.trim().length > 0)) {
        setEmailError(true);
        valid = false;
      } else {
        setEmailError(false);
      }

      if(!(formValues.email.trim().length > 0)) {
        setMobileError(true);
        valid = false;
      } else {
        setMobileError(false);
      }

      if(!(formValues.check)) {
        setSignUpError(true)
        valid = false;
      } else {
        setSignUpError(false);
      }

      if(valid) {
        window.localStorage.setItem("userData",JSON.stringify(formValues))
        navigate('/')
      }

    }
  return (
    <div className="w-1/2 bg-black  text-gray-100 
     flex flex-col items-center ">
      <div className="font-single-day text-green-400 mt-24  text-6xl ">Super app</div>
      <div className="mt-3">Create your new account</div>

      <div className="mt-10  w-1/2 ">
        <input type="text" placeholder="Name" name="name"
         onChange={e=>handleChange(e)}
        className={`w-full h-12 bg-gray-600 outline-none px-1 rounded-sm ${nameError ? "border border-red-400" : ""} ` }/>
        {nameError && <p className="text-red-500 mt-2">Field is Required</p>}
        
      </div>
      <div className="mt-6 w-1/2">
        <input type="text" placeholder="UserName" name="userName"
        onChange={e=>handleChange(e)}
        className={`w-full h-12 bg-gray-600 outline-none px-1 rounded-sm ${userNameError ? "border border-red-400" : ""} `}/>
        {userNameError && <p className="text-red-500 mt-2">Field is Required</p>}
      </div>
      <div className="mt-6 w-1/2">
        <input type="email" placeholder="Email" name="email"
        onChange={e=>handleChange(e)}
        className={`w-full h-12 bg-gray-600 outline-none px-1 rounded-sm ${emailError ? "border border-red-400" : ""} `} />
        {emailError && <p className="text-red-500 mt-2">Field is Required</p>}
      </div>
      <div className="mt-6 w-1/2">
        <input type="tel" placeholder="Mobile" name="mobile"
        onChange={e=>handleChange(e)}
        className={`w-full h-12 bg-gray-600 outline-none px-1 rounded-sm ${mobileError ? "border border-red-400" : ""} `} />
        {mobileError && <p className="text-red-500 mt-2">Field is Required</p>}
      </div>

      <div className="mt-8 w-1/2">
        <input type="checkbox" name="check"
        onChange={(e)=>setFormValues({...formValues, [e.target.name]: e.target.checked})} />
        <span className="ml-4">Share my registration data with SuperApp</span>
        {signUpError && <p className="text-red-500 mt-2">Check this box if you want to proceed</p>}
      </div>

      <div className="mt-14 w-1/2  bg-green-400 rounded-2xl flex flex-col items-center cursor-pointer">
        <button className="text-2xl font-semibold " 
        onClick={(e)=>handleSubmit(e)}>SIGN UP</button>
      </div>

      <div className="mt-6 w-1/2 text-gray-400">
        <span>{`By clicking on Sign up. you agree to Superapp `}</span>
        <span className="text-green-400">Terms and Conditions of Use</span>
      </div>

      <div className="mt-6 w-1/2 text-gray-400">
        <span>{`To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp `}</span>
        <span className="text-green-400">Privacy Policy</span>
      </div>
    </div>
  );
}
