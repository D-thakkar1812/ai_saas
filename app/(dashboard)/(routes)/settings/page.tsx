import Heading from "@/components/Heading";
import { Settings } from "lucide-react";
import { subscriptionCheck } from "@/lib/subscription";
import {SubScriptionButton} from "@/components/subscription-button";
const settings = async () => {
    const isMember = await subscriptionCheck();
    return (
        <div>
            <Heading
                title="Settings"
                description="Manage your Account"
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    {isMember? "You are currently on a Pro plan." : "You are currently on a free plan."}
                </div>
                <SubScriptionButton isMember={isMember} />
            </div>
        </div>
    );
}

export default settings;