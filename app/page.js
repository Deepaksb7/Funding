import React from 'react'

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]">
      <div className="font-bold flex gap-1 justify-center items-center text-5xl">In Need Of Funds! <span><img className="w-30 mix-blend-hard-light" src="/fundingwb.gif" alt="" /></span></div>
      <p>
        What some funds and don't know where to start. Get funds by pitching your projects. Start now!
      </p>
      <div>
      <button type="button" className="xt-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="h-1 bg-white opacity-5"></div>

    <div className="text-white container mx-auto pb-32 pt-14 px-10">
  <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
  <div className="flex gap-5 justify-between">
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
      <p className="font-bold text-center">People want to help</p>
      <p className="text-center">Intrested people are available to support you</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
      <p className="font-bold text-center">People want to contribute</p>
      <p className="text-center">Intrested people are willing to contribute financially</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
      <p className="font-bold text-center">People want to collaborate</p>
      <p className="text-center">Intrested people are ready to collaborate with you</p>
    </div>
  </div>



    </div>
    </>
  );
}
