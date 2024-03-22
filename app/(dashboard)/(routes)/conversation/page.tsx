"use client";

import Heading from "@/components/Heading";
import { Form ,FormField, FormItem,FormControl} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { MessageSquare} from "lucide-react";
import { useForm } from "react-hook-form";

import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {useState } from "react"
import axios from "axios";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";
import BotAvatar from "@/components/BotAvatar";


type ChatCompletionRequestMessage = {
    role: string;
    content: string;
};

const Conversation = ()=>{
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            prompt:""
        }
    });

    const router = useRouter();
    const[messages,setMessage] = useState<ChatCompletionRequestMessage[]>([]);

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values:z.infer <typeof formSchema>)=>{
        try{
            const userMessage: ChatCompletionRequestMessage = {
                role: "user",
                content:values.prompt
            }
            const newMessages = [...messages, userMessage];
            const response= await axios.post("/api/conversation",{
                messages:newMessages,
            })
            setMessage((current) => [...current, userMessage, response.data]);
            form.reset();
        }
        catch(err:any){
            console.log(err);
        }
        finally{
            router.refresh();
        }
    } 
    return(
        <div>
            
            <Heading title="Conversation" description="Communicate to our Intelligent conversation model" icon={MessageSquare} iconColor="text-violet-500" bgColor="bg-violet-500/10"></Heading>
            <div className="px-4 lg:px-8 ">
                <div>
                    <Form  {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                            className="
                            rounded-lg
                            border
                            w-full
                            p-4
                            px-3
                            md:px-6
                            focus-within:shadow-sm
                            grid
                            grid-cols-2
                            gap-2
                            "
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="How do I calculate the radius of a circle?"
                                                

                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}> Generate</Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">

                {
                    isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />
                        </div>
                    )

                }
                {
                        messages.length == 0 && !isLoading &&(
                            <Empty label="Conversation has not started yet"/>
                        )
                    }
                   <div className="flex flex-col-reverse gap-y-4">
                            {
                                messages.map((message)=>(
                                    <div key={message.content} className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg",message.role === "user"? "bg-white border  border-black/10 ": "bg-muted")}>
                                        {message.role === "user"? <UserAvatar/> : <BotAvatar />}
                                        {message.content}
                                    </div>
                                ))
                            }
                   </div>
                </div>
            </div>
        </div>
        
    );
}

export default Conversation;