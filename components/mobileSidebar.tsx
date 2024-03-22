"use client";

import {Menu} from "lucide-react";
import {Sheet,SheetTrigger,SheetContent} from  "@/components/ui/sheet";
import {Button} from "@/components/ui/button"
import {UserButton} from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import { useState,useEffect } from "react";
const MobileSidebar = ()=>{

    const [isMounted,setIsMounted] = useState(false);

    useEffect(()=>{setIsMounted(true)},[]);
    if(!isMounted){
        return null;
    }
    return(

    <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu></Menu>
            </Button>
        </SheetTrigger>
        <SheetContent className="p-0" side="left" >

            <Sidebar></Sidebar>

        </SheetContent>
    </Sheet>
   
    );
}

export default MobileSidebar;