"use client";

import { useProModal } from "@/hooks/use-promodal-ui";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import {  Check, CodeIcon, ImageIcon, MessageSquare, Music, VideoIcon, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";

const tools = [
    {
        label:"Conversation",
        icon:MessageSquare,
        color:"text-violet-500",
        bgColor:"bg-violet-500/10",
        href:"/conversation"
    },
    {
        label:"Music Generation",
        icon:Music,
        color:"text-emerald-500",
        bgColor:"bg-emerald-500/10",
        href:"/music"
    },
    {
        label:"Image Generation",
        icon:ImageIcon,
        color:"text-pink-700",
        bgColor:"bg-pink-700/10",
        href:"/image"
    },
    {
        label:"Video Generation",
        icon:VideoIcon,
        color:"text-orange-700",
        bgColor:"bg-orange-700/10",
        href:"/video"
    },
    {
        label:"Code Generation",
        icon:CodeIcon,
        color:"text-green-800",
        bgColor:"bg-green-800/10",
        href:"/code"
    }
    
    
];

export const ProModal = () =>{
    const proModal = useProModal();
    const [loading,setLoading] = useState(false);
    const onSubscribe = async ()=>{
        try{
            setLoading(true);
            const response = await axios.get("/api/stripe");
            window.location.href =  response.data.url ;
        }
        catch(err){
            console.log(err,"Error from stripe client")
        }
        finally{
            setLoading(false);
        }
    }
    return(

        <div>
            <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                            <div className="flex items-center gap-x-2 font-bold py-1">
                                Upgrade To MasterMind
                                <Badge variant="premium"className="uppercase text-sm py-1">
                                    PRO
                                </Badge>
                            </div>
                        </DialogTitle>
                        <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                            {
                                tools.map((tool)=>(
                                    <Card key={tool.label} className="p-3 border-black/5 flex items-center justify-between">
                                        <div className="flex items-center gap-x-4">
                                            <div className={cn("p-2 w-fit rounded-md",tool.bgColor)}>
                                                <tool.icon className={cn("w-6 h-6",tool.color)} />
                                            </div>
                                            <div className="font-semibold text-sm ">
                                                {tool.label}
                                            </div>
                                        </div>
                                        <Check></Check>
                                    </Card>
                                ))
                            }
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="premium" size="lg" className="w-full" onClick={onSubscribe}>
                            Upgrade
                            <Zap className="w-4 h-4 ml-2 fill-white"/>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}