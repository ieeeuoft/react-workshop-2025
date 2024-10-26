import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex bg-pink-400 justify-center items-center">
      <div className="flex flex-col text-center">
        <h1 className="text-5xl p-2 m-4">Home Page</h1>
        <Link className="border-2 p-2 m-4" href="/counter">Counter</Link>
        <Link className="border-2 p-2 m-4" href="/exchange">Exchange App</Link>
      </div>
    </div>
  );
}
