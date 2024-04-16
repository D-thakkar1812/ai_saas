


import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { increaseApiLimit,checkApiLimit } from "@/lib/api-limit";

import { subscriptionCheck } from "@/lib/subscription";

const replicate = new Replicate({
  auth: process.env.Replicate_AI_API_KEY!,
});




export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    
    const freeTrial = await checkApiLimit();
    const isMember = await subscriptionCheck();
    if(freeTrial !== undefined && freeTrial == false && isMember!==undefined && isMember==false ) {
      return new NextResponse("Free trials are done,please check our subscription plans", { status: 403 });
    }


    const response = await replicate.run(
      "lucataco/animate-diff:beecf59c4aee8d81bf04f0381033dfa10dc16e845b4ae00d281e2fa377e48a9f",
      {
        input: {
          prompt_a: prompt
        }
      }
    );

    if(isMember==false){
      await increaseApiLimit();
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log('[MUSIC_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};