import Image from "next/image";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Styles from "@/app/component/header/styles.module.css";
import Link from "next/link";

function Header(){
    return (
        <div className={Styles.header}>
            <Link href="/">
                <Image src="/images/TH.png" width={50} height={45}/>
            </Link>
            <nav className={Styles.navigation}>
                <Link href="/" className={Styles.navigationMenu}>Home</Link>
                <Link href="/" className={Styles.navigationMenu}>About</Link>
                <Link href="/" className={Styles.navigationMenu}>Contact</Link>
            </nav>
            <IoSearchOutline className={Styles.headerIcon} />
            <input placeholder="Arama..." className={Styles.headerInput}/>
        </div>
    );
}

export default Header;