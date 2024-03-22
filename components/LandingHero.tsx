"use client";
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { Button } from "./ui/button";
const LandingHero = ()=>{

    const {isSignedIn} =useAuth();
    return(
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
               <h1>Utilize The Best AI Services</h1> 
               <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent options= {
                        {
                            strings:[
                                "ChatBot.",
                                "Music Generation.",
                                "Image Generation.",
                                "Code Generation.",
                                "Video Generation."

                            ],
                            autoStart:true,
                            loop:true

                        }
                    }></TypewriterComponent>
               </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400" >
                        Generate Your Content With AI 
            </div>
            <div>
                <Link href= {isSignedIn? "/dashboard" : "/sign-up"}>
                    <Button variant={"outline"} className="bg-indigo-600 border-none md:text-xl p-4 md:p-6 text-white rounded-full">Start Generating a Content </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-normal">
                    No Credit Card Required
            </div>
        </div>
    );
}
export default LandingHero;