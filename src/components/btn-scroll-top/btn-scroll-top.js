import React from "react";
import { IoIosArrowUp } from "react-icons/io";

import './btn-scroll-top.css';

export function BtnScrollTop({show}){
    
    // const scrollToTop = () =>{
    //     window.scrollTo({
    //       top: 0, 
    //       behavior: 'smooth'
    //     });
    //   };

    return (
    <a href="#header" className={show ? "btn-scroll-top" : "btn-scroll-top-inactive"}>
        <IoIosArrowUp/>
    </a>
    );
}