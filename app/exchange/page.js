"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [count, setCount] = useState(0);
    const [usd, setUSD] = useState(0);
    const [cad, setCAD] = useState(0);
    const [gbp, setGBP] = useState(0);

    const handleFetch = async () => {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY}/latest/USD`);
        const data = await response.json(); // Convert the response to JSON
        const rates = data.conversion_rates; // Fetch the data when the button is clicked
        console.log(rates);
        setUSD(rates.USD);
        setCAD(rates.CAD);
        setGBP(rates.GBP);
        setCount(count + 1); // Increase count when the fetch is completed
    };

    return (
        <div className="h-screen w-screen bg-pink-400 flex justify-center items-center relative">
            <Link href="/" className="absolute top-0 left-0 m-4 p-2 border-2">Back</Link>

            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl mb-4">You fetched {count} times</h1>
                <button className="border-2 p-3 mb-6" onClick={handleFetch}>
                    Get
                </button>

                <div className="text-2xl">
                    <h1>BASE: USD</h1>
                    <h1>1 USD = {cad} CAD</h1>
                    <h1>1 USD = {gbp} GBP</h1>
                    <h1>1 USD = {usd} USD</h1>
                </div>
            </div>
        </div>
    );
}
