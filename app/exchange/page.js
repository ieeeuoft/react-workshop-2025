"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

async function fetcher() {
    const response = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const data = await response.json(); // Convert the response to JSON
    return data.rates; // Return the rates object
}

export default function Home() {
    const [count, setCount] = useState(0);
    const [usd, setUSD] = useState(0);
    const [cad, setCAD] = useState(0);
    const [gbp, setGBP] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const rates = await fetcher(); // Wait for the promise to resolve
            console.log(rates);
            setUSD(rates.USD);
            setCAD(rates.CAD);
            setGBP(rates.GBP);
        };

        getData(); // Call the async function
    }, [count]);

    return (
        <div className="h-screen w-screen bg-pink-400 flex justify-center items-center relative">
            <Link href="/" className="absolute top-0 left-0 m-4 p-2 border-2">Back</Link>

            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl mb-4">You fetched {count} times</h1>
                <button className="border-2 p-3 mb-6" onClick={() => setCount(count + 1)}>
                    Get
                </button>

                <div className="text-2xl">
                    <h1>BASE: EUR</h1>
                    <h1>1 EUR = {usd} USD</h1>
                    <h1>1 EUR = {cad} CAD</h1>
                    <h1>1 EUR = {gbp} GBP</h1>
                </div>
            </div>
        </div>
    );
}
