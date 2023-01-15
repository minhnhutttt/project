import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Content = () => (
  <div className="h-screen flex flex-col items-center justify-center px-5">
    <div className="md:w-[480px] min-h-[343px] bg-white rounded-[20px] border border-[#5e5e5e] px-3">
      <div className="flex items-center justify-between py-4 px-1">
        <div></div>
        <button type="button" className="md:w-auto w-5">
          <StaticImage src="../images/ic-gear.png" alt="" />
        </button>
      </div>
      <div className="flex items-center py-2">
        <div className="md:w-auto w-8">
          <StaticImage src="../images/diver-ic-white.png" alt="" />
        </div>
        <div className="flex-1 ml-2">
          <input type="text" className="w-full md:h-[45px] h-8 p-3 text-base border border-[#999999] rounded-[3px]" placeholder="Please enter your receiving address." />
        </div>
      </div>
      <div className="flex justify-center pt-4 pb-7 border-b border-[#cbcbcb]">
      <Link to={"/bridge"} className="w-[216px] md:h-[56px] h-[44px] rounded-[10px] bg-[#8fd7e7] flex items-center justify-center md:text-lg text-base font-bold no-underline text-black">
      Launch App
      </Link>
      </div>
      <div className="pb-2">
        <div className="text-center text-base text-[#4276b3] font-bold py-2.5">Download Diver Wallet</div>
        <div className="flex justify-center items-center space-x-[10px]">
          <Link to={"/"} >
            <StaticImage src="../images/btn-apple.png" alt="" />
          </Link>
          <Link to={"/"} >
            <StaticImage src="../images/btn-google.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
    <div className="text-center text-base py-3">
      Turtle Swap availabele in : <span className="font-bold">English</span>
    </div>
  </div>
)

export default Content
