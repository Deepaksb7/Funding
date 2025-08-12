import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]">
      <div className="font-bold flex gap-1 items-center text-5xl">In Need Of Funds! <span><img className="w-30 mix-blend-hard-light" src="/fundingwb.gif" alt="" /></span></div>
      <p>
        What some funds and don't know where to start. Get funds by pitching your projects. Start now!
      </p>
      <div>
      <button type="button" class="xt-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="h-1 bg-white opacity-5"></div>
    </>
  );
}
