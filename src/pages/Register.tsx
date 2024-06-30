import { useState } from "react";
import MainTitle from "../components/Title";

export default function Register() {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [email , setEmail] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");

    const [usernameError , setUsernameError] = useState("");
    const [confirmPasswordError , setConfirmPasswordError] = useState("");
    const [emailError , setEmailError] = useState("");
    const [phoneNumberError , setPhoneNumberError] = useState("");

  return (

    <>
      <div className="relative bg-green-200 h-5/6">
        <MainTitle titleName="Register"/> 

        <form className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" 
                    name="floating_email" 
                    id="user_username" 
                    onBlur={() => {
                        if(username.length < 6) {
                            setUsernameError("Username cannot be blank , and it must be longer than 6 characters")
                        }else{
                            setUsernameError("");
                        }
                    }} 
                    className="text-zinc-950 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                    required onChange={(e) => setUsername(e.target.value)}
                />
                <div className="error-txt text-sm text-red-500 italic"> 
                            {usernameError}
                </div>
                <label htmlFor="floating_email" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Username</label>
            </div>

            {/* Password  */}
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="password" 
                    name="floating_password" 
                    id="user_password" 
                    className="text-zinc-950 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                    required onChange={(e) => setPassword(e.target.value)} 
                 />
                <label 
                    htmlFor="floating_password" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Password</label>
            </div>

            {/* Confirm Password  */}
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="password" 
                    name="repeat_password" 
                    id="user_confirm_password" 
                    onBlur={() => {
                        if(password !== confirmPassword) {
                            setConfirmPasswordError("password filed & confirm password firld does not match")
                        }else{
                            setConfirmPasswordError("");
                        }
                    }} 
                    className="text-zinc-950 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                    required onChange={(e) => setConfirmPassword(e.target.value)} 
                 />
                <div className="error-txt text-sm text-red-500 italic"> {confirmPasswordError}</div>
                <label htmlFor="floating_repeat_password" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Confirm password
                </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">

                {/* First Name */}
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_first_name" id="user_first_name" class="text-zinc-950 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>

                {/* Last Name */}
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_last_name" id="user_last_name" class="text-zinc-950 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                    {/* Phone Number */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="tel" 
                            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                            name="floating_phone" id="user_phone" 
                            onBlur={() => {
                                const regex_phone_number = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

                                if(email.length === 0) {
                                    setPhoneNumberError("email cannot be blank")
                                } else if(!regex_phone_number.test(phoneNumber)){
                                    setPhoneNumberError("Please enter a valid phone number");
                                } else{
                                    setPhoneNumberError("");
                                }
                            }} 
                            className="text-zinc-950 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            required onChange={(e) => setPhoneNumber(e.target.value)} 
                        />
                        <div className="error-txt text-sm text-red-500 italic"> {phoneNumberError}</div>
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    {/* Email */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="email" 
                            name="floating_company" 
                            id="user_email" 
                            onBlur={() => {
                                const regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

                                if(email.length === 0) {
                                    setEmailError("email cannot be blank")
                                } else if(!regex_email.test(email)){
                                    setEmailError("Please enter a valid email");
                                } else{
                                    setEmailError("");
                                }
                            }} 
                            className="text-zinc-950 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
                            required onChange={(e) => setEmail(e.target.value)} 
                        />
                        <div className="error-txt text-sm text-red-500 italic"> 
                                    {emailError}
                        </div>
                    <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
            </div>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
    
        {/* <div className="absolute left-20 top-20 bg-green-300 w-2/5">
            <label htmlFor="">USERNAME : </label>
            <input type="text" id="user-username" placeholder="username" />
            <label htmlFor="">PASSWORD : </label>
            <input type="text" id="user-password" placeholder="password" />
            <label htmlFor="">CONFIRM PASSWORD : </label>
            <input type="text" id="user-confirm-password" placeholder="confirm-password" />
            <label htmlFor="">NAME : </label>
            <input type="text" id="user-name" placeholder="name" />
            <label htmlFor="">EMAIL : </label>
            <input type="text" id="user-email" placeholder="email" />
            <label htmlFor="">PHONE NUMBER : </label>
            <input type="text" id="user-phone-number" placeholder="phone-number" />
        </div> */}
      </div>
    </>
  );
}