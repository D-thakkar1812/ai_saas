import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
const DashboardLayout = ({children} : {children: React.ReactNode })=>{
return(
    <div className = "h-full relative">
        <div className = "hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-900">
            <div>
                <Sidebar></Sidebar>
            </div>
        </div>
        <main className= "md:pl-72  h-full">
            <Navbar></Navbar>
            {children}
        </main>
    </div>
);
}

 export default DashboardLayout;