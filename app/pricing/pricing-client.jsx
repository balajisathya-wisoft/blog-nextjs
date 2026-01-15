"use client";

import { useState, useEffect } from "react";
import PricingCard from "@/components/PricingCard";


export default function PricingClient({prices}) {
    const [billing, setBilling] = useState("monthly");
    const title_list = ["Basic", "Pro", "Enterprise"];

    return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-4 py-2 rounded ${
            billing === "monthly"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={`px-4 py-2 rounded ${
            billing === "yearly"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Yearly
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {prices[billing].map((item, index) => (
            <PricingCard key={index} title={title_list[index]} price={item} value={billing=='monthly' ? 'Per Month' : 'Per Year'} />
        ))}
      </div>
    </section>
  );
}
