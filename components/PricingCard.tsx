type PricingCardProps = {
  title: string;
  price: string;
  value: string;
};

export default function PricingCard({ title, price, value }: PricingCardProps) {
  return (
    <div className="border border-gray-700 rounded-2xl p-20  bg-gray-900 text-white text-center hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-2xl font-bold mb-4">${price}</p>
      <p className="text-gray-400">{value}</p>
    </div>
  );
}
