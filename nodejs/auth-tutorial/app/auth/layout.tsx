import Link from 'next/link';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <nav className='flex justify-start items-center p-4 space-x-4'>
                <Link href="/auth/login" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-300 transition-colors duration-200">
                    NavBar: Login
                </Link>
            </nav>
            {children}
        </div>
    );
};

export default AuthLayout;