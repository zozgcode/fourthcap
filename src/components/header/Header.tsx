"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full relative flex items-center justify-center p-5 pt-10">
      <Image src="https://i.imgur.com/0j6919t.png" width={230} height={28} className="w-[180px] h-[90px]" alt="logo" />
    </div>
  );
}
