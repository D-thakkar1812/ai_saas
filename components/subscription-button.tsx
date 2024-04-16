"use client";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";

interface subscriptionButtonProps{
    isMember : boolean;
}
export const SubScriptionButton = ({isMember=false}:subscriptionButtonProps)=>{

    const [loading,setLoading] = useState(false);
    const onClick = async ()=>{
        try{
            setLoading(true);
            const response = await axios.get("/api/stripe");
            window.location.href =  response.data.url ;
        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }
    return(
        <Button  variant={isMember? "default":"premium"} onClick={onClick} disabled={loading}>
            {isMember? "Manage Subscription": "upgrade to Premium"}
            {!isMember && <Zap className="w-4 h-4 ml-2 fill-white"/>}
        </Button>
    );
}

