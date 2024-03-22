import {Button} from "@/components/ui/button";
import Link from "next/link";
import LandingNav from "@/components/LandingNav";
import LandingHero from "@/components/LandingHero";
import LandingContent from "@/components/LandingContent";
const LandingPage = () =>{
    return(
        <div className="h-full">
            <LandingNav></LandingNav>
            <LandingHero></LandingHero>
            <LandingContent></LandingContent>
        </div>
    );
}

export default LandingPage;