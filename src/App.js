import { useState, useContext } from "react";

import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Si1Password } from "react-icons/si";
import { CiLight } from "react-icons/ci";

import Input from "./components/Input";
import Button from "./components/Button";

import { ThemeContext, ThemeProvider } from "./themeContext";

const App = () => {

  const context = useContext(ThemeContext);

  console.log("ThemeContext", context)

  return (
    <ThemeProvider>

        <div className="md:flex">

          <div style={{ background: 'url("./background.jpg") center center/cover' }} className="flex flex-col items-start justify-end align-bottom h-screen w-full">
            <h2 className="text-white text-4xl p-10">Find That Special one Today</h2>
            <h3 className="text-4xl pl-10 pr-10 pb-10 text-[#DF371E]">Join Us</h3>
          </div>

          <div className="p-10 w-screen">
            <div className="ml-auto item-end">
              <CiLight size={40} />
            </div>
            <h2 className="text-2xl text-center mb-5">Register With <span className="text-[#DF371E]">Ceent</span> Today</h2>
            <div>
              <Input 
                placeholder={"Username"} 
                inputType={"text"}
                Icon={BsFillPersonFill}
              />
            </div>

            <div>
              <Input 
                placeholder={"Email"} 
                inputType={"email"}  
                Icon={AiOutlineMail}
              />
            </div>

            <div>
              <Input 
                placeholder={"Password"} 
                inputType={"password"}  
                Icon={Si1Password}
              />
            </div>


            <p className="text-center">By Registering you agree to Our <br /> <span className="text-blue-400">Terms and conditions</span> and <span className="text-blue-400">Privacy Policy</span></p>

            <div className="mt-10">
              <Button 
                buttonType="submit"
                buttonText="Register"
              />
            </div>

          </div>
        </div>

        {/* <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
    </span>
  </div>
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div> */}

    </ThemeProvider>
  );
};

export default App;
