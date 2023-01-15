import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaArrowCircleLeft, FaArrowDown, FaAngleDown, FaInfoCircle } from 'react-icons/fa';
import { HiArrowUpRight } from "react-icons/hi2";
import { SingleChart } from "../components/singleChart";

const SinglePage = () => (
    <Layout>
        <div className="w-full max-w-[1480px] mx-auto px-5 py-[110px]">
            <div className=" bg-white rounded-[10px] md:pt-[62px] pt-7 md:pb-[150px] pb-[100px] px-5">
                <div className="w-full max-w-[1200px] mx-auto">
                    <div className="flex items-start justify-between md:flex-row flex-col">
                        <div className="flex-1 md:w-auto w-full">
                            <div className="flex items-center md:text-lg text-base">
                                <span className="mr-2"><FaArrowCircleLeft /></span>Tokens
                            </div>
                            <div className="mt-2 flex items-center">
                                <span className="mr-2 md:w-auto w-8">
                                    <StaticImage src="../images/diver-ic-white.png" alt="" />
                                </span>
                                <span className="text-lg md:text-[22px] mr-4">DIVER</span>
                                <span className="text-base md:text-lg text-[#5e5e5e]">DIV</span>
                            </div>
                            <div className="md:text-[42px] text-3xl leading-none mt-2">$1253.18</div>
                            <div className="text-base flex items-center mt-1">0.18% <span className="text-[#fa2c39]"><FaArrowDown /></span></div>
                            <div className="w-full">
                                <SingleChart />
                            </div>
                        </div>
                        <div className="md:w-[380px] w-full md:ml-7 md:mt-0 mt-8">
                            <div className="relative pb-4 border border-[#5e5e5e] rounded-[20px] mb-[18px]">
                                <div className="flex justify-between px-4 pt-6 pb-3">
                                    <div className="md:text-lg text-base font-bold">Swrap</div>
                                    <button className="w-4">
                                        <StaticImage src="../images/ic-gear.png" alt="" />
                                    </button>
                                </div>
                                <div className="px-[14px]">
                                    <div className="border border-[#5e5e5e] rounded-[10px] pt-4 md:pb-2 pb-6 px-5">
                                        <div className="flex justify-between pt-3">
                                            <div className="mr-8">
                                                <div className="text-lg md:text-[30px] font-bold leading-none mb-2">0</div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <div className="w-[109px] md:h-[33px] h-[30px] flex items-center justify-center bg-[#8fd7e7] rounded-2xl md:text-lg text-base font-bold">
                                                    <span className="w-[22px] flex items-center mr-1"><StaticImage src="../images/diver-ic-white.png" alt="" /></span>DIV <span className="mt-1 ml-2 -mr-2"><FaAngleDown /></span>
                                                </div>
                                                <div className="text-xs font-bold mt-2">
                                                    Balance: 0.1591 <span className="text-[#006faa]">MAX</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center -my-3.5 relative">
                                        <div className="text-xl border border-[#5e5e5e] rounded-full bg-white p-1.5">
                                            <FaArrowDown />
                                        </div>
                                    </div>
                                    <div className="border border-[#5e5e5e] rounded-[10px] pt-4 md:pb-2 pb-6 px-5">
                                        <div className="flex justify-between pt-3">
                                            <div className="mr-8">
                                                <div className="text-lg md:text-[30px] font-bold leading-none mb-2">0</div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <div className="w-[109px] md:h-[33px] h-[30px] flex items-center justify-center bg-[#facd89] rounded-2xl md:text-lg text-base font-bold"><span className="w-[22px] flex items-center mr-1"><StaticImage src="../images/ic-bit.png" alt="" /></span>
                                                    BTC <span className="mt-1 ml-2 -mr-2"><FaAngleDown /></span>
                                                </div>
                                                <div className="text-xs font-bold mt-2">
                                                    Balance: 70.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm flex items-center justify-center px-5 pt-1 pb-2">
                                        <span className="text-[#297fb3]"><FaInfoCircle /></span><span className="text-sm">1 USDT = 0.0008 DIV</span>
                                    </div>
                                    <button type="button" className="w-full md:h-[56px] h-[44px] rounded-[10px] bg-[#8fd7e7] flex items-center justify-center text-base md:text-lg font-bold no-underline text-black">
                                        Review bridge
                                    </button>
                                </div>
                            </div>
                            <div className="relative md:min-h-[140px] min-h-[120px] flex items-center border border-[#5e5e5e] rounded-[20px] md:px-6 px-4">
                                <div>
                                    <p className="text-sm mb-0">Your balance on Ethereum</p>
                                    <div className="flex mt-2">
                                        <span className="w-8"><StaticImage src="../images/diver-ic-white.png" alt="" /></span>
                                        <div className="ml-[6px]">
                                            <p className="text-lg font-bold leading-none mb-0">3.4567 DIV</p>
                                            <p className="text-sm text-[#18539e] mb-0">DIVER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:text-[42px] text-3xl md:mt-2 mt-6">Stats</div>
                    <div className="w-full max-w-[680px]">
                        <div className="flex justify-between md:flex-nowrap flex-wrap mt-1 border-b border-[#e6e6e6] pb-4">
                            <div className="md:w-auto w-1/2 pr-5 md:mb-0 mb-4">
                                <div className="md:text-sm text-xs text-[#5e5e5e]">TVL</div>
                                <div className="md:text-[28px] text-xl">$792.1M</div>
                            </div>
                            <div className="md:w-auto w-1/2 pr-5 md:mb-0 mb-4">
                                <div className="md:text-sm text-xs text-[#5e5e5e]">24H volume</div>
                                <div className="md:text-[28px] text-xl">$252.2M</div>
                            </div>
                            <div className="md:w-auto w-1/2 pr-5 md:mb-0 mb-4">
                                <div className="md:text-sm text-xs text-[#5e5e5e]">52W low</div>
                                <div className="md:text-[28px] text-xl">$878.41</div>
                            </div>
                            <div className="md:w-auto w-1/2 pr-5 md:mb-0 mb-4">
                                <div className="md:text-sm text-xs text-[#5e5e5e]">52W high</div>
                                <div className="md:text-[28px] text-xl">$3.6K</div>
                            </div>
                        </div>
                        <div className="md:pt-8 pt-6">
                            <p className="md:text-[32px] text-2xl font-bold mb-0">About</p>
                            <p className="mb-0 md:text-sm text-xs">
                            DIVER is a smart contract platform that enables developers to build tokens and decentralized applications (dapps). DIV is the native currency for the DIVER platform and also works as the transaction fees to miners on the Ethereum network.<br />
                            <br />
                            DIVER is the pioneer for blockchain based smart contracts. Smart contract is essentially a computer code that runs exactly as programmed without any...
                            </p>
                            <Link to={''} className="md:text-sm text-xs text-[#5e5e5e] block mt-2">Show more</Link>
                        </div>
                        <div className="flex md:flex-nowrap flex-wrap mt-2">
                            <Link to={''} className="text-sm text-[#006faa] font-bold flex items-center mt-2 pr-4">Etherscan <HiArrowUpRight /></Link>
                            <Link to={''} className="text-sm text-[#006faa] font-bold flex items-center mt-2 pr-4">More analytics <HiArrowUpRight /></Link>
                            <Link to={''} className="text-sm text-[#006faa] font-bold flex items-center mt-2 pr-4">Website <HiArrowUpRight /></Link>
                            <Link to={''} className="text-sm text-[#006faa] font-bold flex items-center mt-2 pr-4">Twitter <HiArrowUpRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default SinglePage
