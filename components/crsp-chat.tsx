"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = ()=>{
    useEffect(()=>{
        Crisp.configure("ab26fff2-e8de-460b-9501-4b6916026b50");
    },[]);

    return null;
}