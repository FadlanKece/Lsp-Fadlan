import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Logo from "../../image/Logo.png";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#0a290e]">
            <div>
                <Link href="/">
                    <img className='w-[300px] ' src={Logo} alt="" />
                    {/* <ApplicationLoo className="w-20 h-20 fill-current text-gray-500" /> */}
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-[#4F7302] shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
