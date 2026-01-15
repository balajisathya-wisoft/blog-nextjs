import Image from "next/image";

export default function Home() {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold">Welcome to PowerGym</h2>
      <p className="mt-4 text-grey-400 text-sm">
        Build your body. Build your confidence.
      </p>
      {/* <Image
        src="/gym-image.jpg"
        alt="PowerGym"
        width={600}
        height={400}
        className="rounded-lg shadow-lg"
      /> */}
    </section>
  );
}
