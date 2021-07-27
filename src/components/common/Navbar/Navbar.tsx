// import { useWallet } from '@hooks/useWallet';
import Link from 'next/link';
import React, { FC } from 'react';

import s from './Navbar.module.css';

const Navbar: FC = () => {
  return (
    <div className="flex justify-between items-center w-full sm:px-4 md:px-8 pt-5">
      <div className="flex-grow" />
      <Link href="/#about">
        <button type="button" className={s.navBtn}>
          About
        </button>
      </Link>
      <Link href="/#experience">
        <button type="button" className={s.navBtn}>
          Experience
        </button>
      </Link>
      <Link href="/#experience">
        <button type="button" className={s.navBtn}>
          Blog
        </button>
      </Link>
      <Link href="/#experience">
        <button type="button" className={s.navBtn}>
          Contact
        </button>
      </Link>
      <Link href="/#experience">
        <button type="button" className={s.navBtn}>
          Resume
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
