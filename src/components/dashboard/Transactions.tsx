'use client';

import { Account, Transaction } from '@/utils/types';
import React, { useEffect, useState } from 'react';
import { HiArrowDown } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { formatCurrency } from '../formatCurrency';
import Link from 'next/link';

export default function Transactions() {
  const [user, setUser] = useState<Account | null>(null);

  useEffect(() => {
    // Get the item from localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      // Parse the item if it's in JSON format
      try {
        const user = JSON.parse(loggedInUser) as Account;
        setUser(user);
      } catch (error) {
        console.error('Error parsing loggedInUser from localStorage', error);
      }
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border w-full bg-[#FAFAF8]">
      <div className="bg-white sticky top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
        <Link href="/dashboard" className="flex items-center gap-2">
          <IoIosArrowBack />
          <span className="text-[#252525] font-semibold">Transactions</span>
        </Link>
      </div>
      <div className="pt-4">
        <div className="bg-white rounded-lg p-4">
          {user?.transaction_history.length == 0 && <div className="text-sm text-center p-4">No Recent Transaction</div>}
          {user?.transaction_history.map((transaction: Transaction, i) => (
            <div key={transaction.transaction_id} className={`flex justify-between py-3 border-l-8 pl-3 ${i % 2 === 0 ? 'border-l-gray-400' : 'border-l-amber-950'}`}>
              <div className="flex gap-2 text-gray-800">
              <div className="flex flex-col">
                  <span className="text-[14px] font-[600] leading-4 uppercase w-[200px] sm:max-w-full">{transaction.description}</span>
                  {/* <span className="text-[14px] font-[600] truncate max-w-[200px] sm:max-w-full overflow-hidden">{transaction.description}</span> */}
                  <span className="text-[10px] font-medium leading-5">{transaction.dateTime}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className={`text-[14px] font-[600] leading-4 ${transaction.amount_usd < 0 ? 'text-red-800' : ''}`}>{formatCurrency(transaction.amount_usd)}</span>
                {/* <span className={`text-[14px] font-[600] ${transaction.amount_usd < 0 ? "text-red-600" : ""}`}>{hideBalance ? "*****" : `${formatCurrency(transaction.amount_usd)}`}</span> */}
                <span className={`text-[10px] font-medium leading-3 ${transaction.status === 'Pending' ? 'text-yellow-600' : 'text-green-600'}`}>{transaction.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
