"use client"

import Link from "next/link";
import { UIEventHandler, useEffect, useState } from "react";
import SwitchMode from "./ui/switch-mode";

export function AppNavigation() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("installed", scrollY)
  }, [scrollY])

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    console.log("scrolling", scrollY)
    setScrollY(event.currentTarget.scrollTop);
  };


  return(
    <div className="p-10 bg-black/30" onScrollCapture={handleScroll}>
      <div className="flex flex-row gap-5 justify-center items-center ">
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/about"}>About</Link>
      </div>
      
    </div>
  )
};