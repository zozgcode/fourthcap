'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="relative h-screen bg-[#345367]">
      <Header />
      <div className="p-4 px-8">
        <div>{error && <p className="text-[20px] text-center mb-3  mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto py-3 pt-2 border shadow-sm rounded-[10px]">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6 p-4">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  className="p-4 rounded text-[#000000] bg-transparent border border-gray-200 outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="p-4 rounded text-[#000000] bg-transparent border border-gray-200 outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <label htmlFor="rememberme" className="flex items-center justify-center gap-2">
                <input type="checkbox" name="rememberme" id="rememberme" />
                <span className="text-base">Remember me</span>
              </label>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-2">
                <button type="submit" className="p-4 bg-[#563E3E] w-full text-white font-semibold rounded-sm">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full flex items-center justify-center px-[10px] p-[20px] mt-5">
          {/* <p className="text-sm text-[#22262A] text-center">Legal | Privacy | Security | Accessibility | CDIC Member</p> */}

          <Image src="https://i.imgur.com/nh47xr5.png" width={230} height={28} className="w-[90px]" alt="logo" />
        </div>
      </div>
    </div>
  );
}
