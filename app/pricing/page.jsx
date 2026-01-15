import PricingClient from "./pricing-client";

async function fetchPrices() {
  const res = await fetch("http://localhost:3000/api/pricing", { cache: "no-store" });
  const data = await res.json();
  return data;
}

export default async function PricingPage() {
  const prices = await fetchPrices();

  return <PricingClient prices={prices} />;
}
