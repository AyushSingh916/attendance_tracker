import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = ({ isLoggedIn }: any) => {
    return (
        <header className="bg-slate-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Image 
                        src="/logo-full-light.png" 
                        alt="IIIT Dharwad Logo" 
                        width={160} 
                        height={48}
                        className="h-12 w-auto" 
                    />
                    <div>
                        <span className="text-white text-lg font-bold">IIIT Dharwad</span>
                    </div>
                </div>
                {!isLoggedIn && (
                    <div className="space-x-4">
                        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">Sign Up</Button>
                        <Button variant="default" className="bg-white text-blue-900 hover:bg-blue-800 hover:text-white">Login</Button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
