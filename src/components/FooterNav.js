"use client";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useState } from "react";
import Profile from "@/app/profile/page";
import pic7 from "/public/pic7.jpg";
import { AuthDisplay } from "../app/auth/page";
import {
  Cog6ToothIcon,
  CreditCardIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const FooterNav = ({
  resetStory,
  message,
  setMyBooks,
  setUserId,
  setMyStoriesSelected,
  setMessage,
}) => {
  const [user] = useAuthState(auth);
  const [userStatus, setUserStatus] = useState(false);

  const messageColor = (type) => {
    switch (type) {
      case "save":
        return "text-rose-500";
      case "like":
        return "text-teal-500";
      case "delete":
        return "text-rose-600";
      case "error":
        return "text-red-600";
      case "info":
        return "text-indigo-500";
      case "create":
        return "text-amber-500";
      default:
        return "text-amber-500";
    }
  };

  return (
    <div className=" px-4  py-4 flex justify-between  text-xs text-white bottom-0 w-full z-20 lg:px-[12%] bg-sky-950 ">
      <div className="flex flex-col justify-between leading-8 cursor-pointer">
        <div className="flex items-center  hover:text-gray-300">
          <EnvelopeIcon className="h-5 w-5 mr-2" /> Contact
        </div>
        <div className="flex items-center  hover:text-gray-300">
          <QuestionMarkCircleIcon className="h-5 w-5 mr-2" /> Help
        </div>
        <div className="flex items-center  hover:text-gray-300">
          <CreditCardIcon className="h-5 w-5 mr-2" /> Subscriptions
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-start leading-8 cursor-pointer">
        <div className="hover:text-gray-300">Privacy</div>
        <div className="hover:text-gray-300">About Us</div>
        <div className="hover:text-gray-300">Terms & Conditions</div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex  leading-8 justify-between items-start w-full p-1 lg:w-28  cursor-pointer">
          <div className="flex items-center  hover:text-gray-300">
            <FaFacebook className="h-5 w-5" />
          </div>
          <div className="flex items-center  hover:text-gray-300">
            <FaInstagram className="h-5 w-5" />
          </div>
          <div className="flex items-center  hover:text-gray-300">
            <FaTwitter className="h-5 w-5" />
          </div>
        </div>

        <div className="w-full p-1 mb-1 ">InblockDesign &#xa9;2024</div>
      </div>
    </div>
  );
};
