import Image from "next/image";

const Loader = ()=>{
    return(
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="h-10 w-10 relative animate-spin">
                <Image 
                alt="Loading...."
                fill 
                src="/logo.png"
                />
            </div>
            <p className="text-sm text-muted-foreground">
                Mastermind is brainstorming 
            </p>
        </div>
    );
}

export default Loader;