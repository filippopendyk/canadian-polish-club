import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100%]">
      <section className="bg-[url(/images/hero-img.png)] flex justify-center p-13 text-white flex-col items-center bg-cover filter-[20px]">
        <h1 className="font-bold text-center text-[40px]">Canadian Polish Club</h1>
        <p className="text-[20px] mt-5">Since 1936</p>
        <div className="flex gap-5 mt-8 mb-3">
          <button className="text-black bg-white px-5 py-1.5 rounded-3xl">
            <p className="font-bold">Learn More</p>
          </button>
          <button className="bg-[#F4AD13] px-7 py-1.5 rounded-3xl">
            <p className="font-bold">Join Us</p>
          </button>
        </div>
      </section>

      <section className="mt-16 px-10 flex flex-col">
        <h2 className="text-[32px] font-bold mb-5">About Us</h2>
        <Image src={'/images/about-us-mobile.png'} alt="Image representing history of Canadian Polish Club" width={330} height={222} style={{ width: `100%`, height: 'auto' }} className="mb-5"/>
        <p className="noto-serif">Founded in Ottawa in 1936, the Canadian Polish Club (Klub Polsko-Kanadyjski) promotes Polish-Canadian heritage, history, and culture, while fostering cooperation between Canada and Poland.</p>
        <button className="px-7 py-1.5 red-theme rounded-3xl w-40 self-center m-4 font-medium">
          <p>Learn More</p>
        </button>
      </section>
    </main>
  );
}
