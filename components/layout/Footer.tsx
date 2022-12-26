import Image from "../base/Image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="h-24 print:hidden z-30"></div>
      <div className="bottom-0 left-0 right-0 fixed print:relative">
        <div className="h-4 bg-gradient-to-r from-blue to-green"></div>
        <div className="bg-slate-800">
          <div className="mx-auto max-w-7xl p-2 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-1 justify-between items-center gap-5 py-3w-full">
              <Link
                href="https://ucas.edu.ps"
                className="flex items-center text-slate-300 font-bold"
              >
                <Image
                  className="block mr-2"
                  src="/logo-gray.png"
                  alt="Ucas"
                  height={54}
                  width={17}
                />
                2022 &#169; Ucas Students
              </Link>
              <Link href="https://github.com/UCAS-Cybersecurity/DeCryptography">
                <Image
                  className="block mr-2"
                  src="/github.png"
                  alt="Ucas"
                  height={30}
                  width={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
