import Link from 'next/link';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            {/* <nav className='flex justify-start items-center p-4 space-x-4'>
                <Link href="/login" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300 transition-colors duration-200">
                    NavBar: Login
                </Link>
                <Link href="/register" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300 transition-colors duration-200">
                    NavBar: Register
                </Link>
            </nav> */}
            {children}
        </div>
    );
};

export default AuthLayout;