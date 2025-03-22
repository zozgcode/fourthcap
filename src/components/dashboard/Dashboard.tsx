'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Account, Transaction } from '@/utils/types';
import Link from 'next/link';
import TransactionHistory from './TransactionHistory';
import Header from './header/Header';
import { formatCurrency } from '../formatCurrency';
import { IoIosArrowForward } from 'react-icons/io';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loader from '../Loader';
import { BillIcon, CardIcon } from '../svgIcons';
import { HiDotsVertical } from 'react-icons/hi';

const getFormattedDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Account | null>(null);
  const [hideBalance, setSideBalance] = useState(false);

  const toggleHideBalance = () => {
    setSideBalance(true);
  };

  const toggleShowBalance = () => {
    setSideBalance(false);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/');
  };

  if (!user) {
    return <Loader />;
  }

  const date = new Date();
  const hour = date.getHours();

  const formattedDate = getFormattedDate();

  return (
    <div className="bg-gray-200 h-screen">
      <Header handleLogout={handleLogout} user={user} />
      <div className="flex flex-col items-center justify-center text-center gap-2 p-5 text-lg font-bold mt-4 bg-white text-black">
        <span className="text-base flex items-center gap-1">
          Available Balance
          {hideBalance ? <FiEyeOff onClick={toggleShowBalance} /> : <FiEye onClick={toggleHideBalance} />}
        </span>

        <span className="font-bold text-gray-700 text-2xl mt-1">{hideBalance ? '******' : `${formatCurrency(user.bank_details.balance_usd)}`}</span>
      </div>
      <div className="flex flex-col gap-2 p-5 text-lg font-bold mt-4 bg-white text-black">
        <p>Financial Tools</p>
        <p className="font-normal">Take the work out of staying on top of your finances.</p>
      </div>
      <div className="pb-[100px]">
        <TransactionHistory user={user} hideBalance={hideBalance} />
      </div>
    </div>
  );
}
