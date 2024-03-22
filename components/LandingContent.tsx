"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [{
    name: "Darshankumar",
    avatar:"D",
    occupation:"Software Developer",
    description:"This is the best application for content generation that I have ever used"
},
{
    name: "Tosin",
    avatar:"T",
    occupation:"Software Developer",
    description:"Content creation becomes a piece of cake"
},
{
    name: "Dhrumil",
    avatar:"D",
    occupation:"Software Developer",
    description:"Strongly Recommended ,Worthy spending Money"
},{
    name: "Ishan",
    avatar:"I",
    occupation:"Software Developer",
    description:"Amazing customer support"
},
];
const LandingContent= ()=>{
    return(
        <div className="px-10 pb-20 ">
                <h2 className="text-4xl text-center text-white font-extrabold mb-10">Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {testimonials.map((item) => (
                        <Card key={item.description} className="bg-[#192339] border-none text-white">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-x-2">
                                        <div>
                                            <p className="text-lg">{item.name}</p>
                                            <p className="text-zinc-400 text-sm">{item.occupation}</p>
                                        </div>
                                    </CardTitle>
                                    <CardContent className="pt-4 px-0">
                                        {item.description}
                                    </CardContent>
                                </CardHeader>
                        </Card>
                    ))}
                </div>
        </div>
    );
}

export default LandingContent