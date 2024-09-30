import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function Home() {

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Home Page</h1>
      </div>
    </main>
  );
}
