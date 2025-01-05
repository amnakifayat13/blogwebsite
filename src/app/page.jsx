import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
      <p className="special-word text-xs"> Protect wild Animals</p>
      <h1 className="pb-5"> The World's <span className="special-word ">Rarest</span> Animals</h1>
      <p>Protecting all wild animals is essential for maintaining the delicate balance of our ecosystems. Every species, no matter how small or seemingly insignificant, plays a vital role in preserving the health of the environment. Wild animals contribute to biodiversity, which ensures the stability of food chains, pollination of plants, and the cycling of nutrients.</p>

      </div>
      <div className="hidden md:block basis-1/3 mt-6 ml-20">
      <Image
      src="/animal1.png"
      alt="img1"
      width={400}
      height={400}
      className="w-[200px] h-[450px]"/>

      </div>
    </div>
  );
}
