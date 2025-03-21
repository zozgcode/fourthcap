'use client';
import { Account, Transaction } from '@/utils/types';
import React, { useState } from 'react';
import { formatCurrency } from '../formatCurrency';
import { HiArrowDown } from 'react-icons/hi';
import Link from 'next/link';

interface TransactionHistoryProps {
  user: Account;
  hideBalance: boolean;
}
const TransactionHistory: React.FC<TransactionHistoryProps> = ({ user, hideBalance }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const transactionsToShow = showMore ? user.transaction_history : user.transaction_history.slice(0, 6);

  return (
    <div className="px-[16px] flex flex-col gap-2 p-5 text-lg font-bold mt-4 bg-white text-black">
      <div className="w-full">
        <div className="text-[14px] font-bold w-full flex items-center justify-between">
          <span>RECENT TRANSACTIONS</span>
          <Link href="/dashboard/transactions" className="text-[13px] font-[500] text-[#345367]">
            See All
          </Link>
        </div>
        <div className="mt-[10px]">
          {transactionsToShow.length == 0 && <div className="text-sm text-center p-4">No Recent Transaction</div>}
          {transactionsToShow.map((transaction: Transaction, i) => (
            <div key={i} className={`flex justify-between py-3 border-l-8 pl-3 ${i % 2 === 0 ? 'border-l-gray-400' : 'border-l-amber-950'}`}>
              <div className="flex gap-2 text-gray-800">
                <div className="flex flex-col">
                  <span className="text-[14px] font-[600] leading-4 uppercase w-[200px] sm:max-w-full">{transaction.description}</span>
                  {/* <span className="text-[14px] font-[600] truncate max-w-[200px] sm:max-w-full overflow-hidden">{transaction.description}</span> */}
                  <span className="text-[10px] font-medium leading-5">{transaction.dateTime}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className={`text-[14px] font-[600] leading-4 ${transaction.amount_usd < 0 ? 'text-red-800' : ''}`}>{hideBalance ? '*****' : `${formatCurrency(transaction.amount_usd)}`}</span>
                <span className={`text-[10px] font-medium leading-3 ${transaction.status === 'Pending' ? 'text-yellow-600' : 'text-green-600'}`}>{transaction.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
