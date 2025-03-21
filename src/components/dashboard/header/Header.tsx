'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);
  const [greeting, setGreeting] = useState('Hello');

  useEffect(() => {
    // Get current hour
    const currentHour = new Date().getHours();
    
    // Set greeting based on time of day
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full flex flex-col items-center justify-start bg-[#345367] p-4 pb-10">
      <div className="w-full flex flex-col items-center justify-end">
        <div className="relative self-end">
          <button className="flex flex-col items-center text-white text-lg" onClick={toggleNav}>
            <span className="text-2xl">...</span>
            <span>MORE</span>
          </button>
          {open && (
            <div className="absolute mt-1 z-50 shadow bg-white border py-2 rounded-md right-0 flex flex-col justify-center gap-[5px]">
              <p className="text-[14px] px-[15px] py-[5px] whitespace-nowrap font-medium text-[#000000]">{user.holder.fullName}</p>
              <p className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-[#345367] border whitespace-nowrap text-white" onClick={handleLogout}>
                Sign out
              </p>
            </div>
          )}
        </div>
        <div className="logo-fourth mt-8">
          <span className="fourth">fourth</span>
          <span className="capital">CAPITAL</span>
        </div>
      </div>
      <p className="mt-10 text-white text-center font-bold text-xl">
        <span>{greeting}, </span>
        {user.holder.fullName}
      </p>
    </div>
  );
}