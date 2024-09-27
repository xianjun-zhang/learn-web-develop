import Link from 'next/link';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-white">
        <div className="flex justify-start items-center p-4 space-x-4">
          <Link href="/dashboard" className="text-white hover:text-gray-300 transition-colors duration-200">
            Dashboard
          </Link>
          <Link href="/dashboard/settings" className="text-white hover:text-gray-300 transition-colors duration-200">
            Settings
          </Link>
        </div>
      </nav>
      
      {children}
    </div>
  );
};

export default DashboardLayout;
