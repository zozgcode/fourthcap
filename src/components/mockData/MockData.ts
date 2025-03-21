import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Timothy Bernando',
      mobileNumber: '+1-***-***-****',
      email: 'timbernando38@gmail.com',
      createdOn: '2/5/2025', // m/d/y
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: false,
      balance_usd: 75225120.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 3, 2025',
        description: 'AirBnB Hawaii debit',
        status: 'Success',
        amount_usd: -4850.00
      },
      {
        dateTime: 'February 2, 2025',
        description: 'Debit from United airlines',
        status: 'Success',
        amount_usd: -1800.00
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Withdrawal from R&B trading',
        status: 'Success',
        amount_usd: 850050.17
      },
      {
        dateTime: 'January 26, 2025',
        description: 'Withdrawal chk#229152',
        status: 'Success',
        amount_usd: -250120.00
      },
      {
        dateTime: 'December 29, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -1200.00
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Teller Withdrawal',
        status: 'Success',
        amount_usd: -50000.00
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Credit from fidelity investment',
        status: 'Success',
        amount_usd: 980000.00
      },
      {
        dateTime: 'December 13, 2024',
        description: 'Transfer to Joe Harden',
        status: 'Success',
        amount_usd: -320000.00
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Debit from Netgear',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****4593'
      },
      {
        dateTime: 'March 22, 2024',
        description: 'Transfer to Infrastructure Development',
        status: 'Success',
        amount_usd: -400000.0,
        account_no: '****1682'
      },
      {
        dateTime: 'October 10, 2023',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****8293'
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Debit from Western Digital',
        status: 'Success',
        amount_usd: -300000.0,
        account_no: '****6471'
      },
      {
        dateTime: 'July 5, 2023',
        description: 'Credit from Asana',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****3975'
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Credit from Seagate Technology',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****2849'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'ZACH WILLIAMS',
      mobileNumber: '***-***-****',
      email: 'z@gmail.com',
      createdOn: '3/21/2025', // m/d/y
      username: 'z',
      password: 'z'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: true,
      account_number: true,
      balance_usd: 7400000.00
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '226829',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
    },
    transaction_history: [
      {
        dateTime: 'January 25, 2025',
        description: 'Withdrawal - XXXXXX2819',
        status: 'Success',
        amount_usd: -300000.00
      },
      {
        dateTime: 'January 20, 2025',
        description: 'Deposit from Mobile Corp. - XXXXXX3738',
        status: 'Success',
        amount_usd: 25000.00
      },
      {
        dateTime: 'December 28, 2024',
        description: 'Deposit from Resource Capital Funds (RCF) - XXXXXX3390',
        status: 'Success',
        amount_usd: 470000.00
      },
      {
        dateTime: 'November 15, 2024',
        description: 'Deposit from Resource Capital Funds (RCF) - XXXXXX0747',
        status: 'Success',
        amount_usd: 330000.00
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Deposit from Resource Capital Funds (RCF) - XXXXXX1367',
        status: 'Success',
        amount_usd: 505000.00
      },
      {
        dateTime: 'May 28, 2024',
        description: 'Deposit from Resource Capital Funds (RCF) - XXXXXX8468',
        status: 'Success',
        amount_usd: 370000.00
      },
      {
        dateTime: 'April 6, 2024',
        description: 'Deposit from fidelity investment - XXXXXX4384',
        status: 'Success',
        amount_usd: 45000.00
      },
      {
        dateTime: 'February 18, 2024',
        description: 'Deposit from fidelity investment - XXXXXX4679',
        status: 'Success',
        amount_usd: 310000.00
      },
      {
        dateTime: 'December 1, 2023',
        description: 'Deposit from Resource Capital Funds (RCF) - XXXXXX3748',
        status: 'Success',
        amount_usd: 840000.00
      },
      {
        dateTime: 'September 3, 2023',
        description: 'Deposit from Resource Capital Funds (RCF) - XXXXXX3849',
        status: 'Success',
        amount_usd: 2000000.00
      },
      {
        dateTime: 'July 27, 2023',
        description: 'Withdrawal - XXXXXX3780',
        status: 'Success',
        amount_usd: -30000.00
      },
      {
        dateTime: 'July 20, 2023',
        description: 'Deposit from Resource Capital Funds (RCF) - XXXXXX3112',
        status: 'Success',
        amount_usd: 530000.00
      },
      {
        dateTime: 'April 14, 2023',
        description: 'Deposit from Resource Capital Funds (RCF) - XXXXXX0487',
        status: 'Success',
        amount_usd: 1800000.00
      },
      {
        dateTime: 'January 27, 2023',
        description: 'Deposit from Resource Capital Funds (RCF) - XXXXXX9843',
        status: 'Success',
        amount_usd: 205000.00
      },
      {
        dateTime: 'December 5, 2022',
        description: 'Deposit from Resource Capital Funds (RCF) - XXXXXX7654',
        status: 'Success',
        amount_usd: 300000.00
      },
    ]
  },
];
