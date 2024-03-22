"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Monteserrat = Montserrat({subsets:["latin"], weight:"600"})

const LandingNav = ()=>{

    const {isSignedIn} =useAuth();
    return(
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 mr-4">
                    <Image fill alt="Logo" src="/logo.png"></Image>
                </div>
                <h1 className={cn ("text-2xl font-bold text-white",Monteserrat.className)}>Master Mind</h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className="bg-indigo-500 text-white font-semibold rounded-full border-none">Get Started <ChevronRight className="h-4 w-4" /></Button>
                </Link>
            </div>
        </nav>
    );
}

export default LandingNav;