import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-[400px] bg-[#b4906f] flex justify-center items-center font-poppins font-[450] text-[16px]">
        <div className="h-full w-1/3 border-l border-solid border-[#4E342E] flex flex-col justify-center  px-6 items-start">
          <h1 className="font-[600] text-xl">Business & Collaborations</h1>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Wholesale Inquiries
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Catering Services
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Collaborate with Us
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Corporate Gifting
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Community Events
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Feedback & Suggestions
          </p>
          <br />
        </div>
        <div className="h-full w-1/3 border-l border-solid border-[#4E342E] flex flex-col justify-center px-6 items-start ">
          <h1 className="font-[600] text-xl">Shop & Learn </h1>
          <br />
          <p className=" hover:underline hover:cursor-pointer">Shop Online</p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Recipes & Tips
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">Bakery Blog</p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">Gift Cards</p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Subscription Box
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer"> FAQ</p>
          <br />
        </div>
        <div className="h-full w-1/3 border-l border-solid border-[#4E342E] flex flex-col justify-center  px-6 items-start  ">
          <h1 className="font-[600] text-xl">Wallet & Accounts</h1>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Create an Account
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Manage Your Wallet
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">Order History</p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Loyalty Program
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Password Recovery
          </p>
          <br />
          <p className=" hover:underline hover:cursor-pointer">
            Privacy Policy
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

export default Footer;
