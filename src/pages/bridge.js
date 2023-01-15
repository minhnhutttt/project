import React, { useState } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Modal from 'react-modal';

import { FaAngleDown, FaArrowDown, FaRegCopy, FaInfoCircle, FaGasPump } from 'react-icons/fa';
Modal.setAppElement('#___gatsby');
const modalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: "0",
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        backgroundColor: '#fff',
        border: '1px solid #5e5e5e'
    },
};

const BridgePage = () => {
    const [isQrOpen, setIsQrOpen] = useState(false)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [issubmitted, setIssubmitted] = useState(false)
    const closeModal = () => {
        setIsQrOpen(false);
        setIsConfirmOpen(false);
    };
    return (
      <Layout>
        <div className="h-screen flex flex-col items-center justify-center px-5">
            <div className="md:w-[480px] w-full max-w-[480px] min-h-[343px] bg-white rounded-[20px] border border-[#5e5e5e] px-3 pb-5">
                <div className="flex items-center justify-between py-4 px-1">
                    <div className="text-lg md:text-2xl font-bold">Bridge</div>
                    <button type="button" className="md:w-full w-5">
                        <StaticImage src="../images/ic-gear.png" alt="" />
                    </button>
                </div>
                <div className="">
                    <div className="border border-[#5e5e5e] rounded-[10px] pt-4 pb-3 px-5">
                        <div className="flex mb-2">
                            <div className="md:w-auto w-8"><StaticImage src="../images/diver-ic-white.png" alt="" /></div>
                            <div className="flex flex-1 justify-end">
                                <div className="mr-8">
                                    <div className="md:text-[30px] text-xl font-bold leading-none mb-2">0.12</div>
                                    <div className="text-xs text-right">$124.77</div>
                                </div>
                                <div className="md:w-[99px] w-[90px] md:h-[33px] h-[30px] flex items-center justify-center bg-[#8fd7e7] rounded-2xl md:text-lg text-base font-bold">
                                    DIV <span className="mt-1 ml-2 -mr-2"><FaAngleDown /></span>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-[#999999] w-full max-w-[360px] bg-[#e8e8e8] h-5 flex items-center pl-2">0x345ficjkvocc0x448vccdksllcjvi04den</div>
                    </div>
                    <div className="flex items-center justify-center -my-3.5 relative">
                        <div className="text-xl border border-[#5e5e5e] rounded-full bg-white p-1.5">
                            <FaArrowDown />
                        </div>
                    </div>
                    <div className="border border-[#5e5e5e] rounded-[10px] pt-4 pb-3 px-5">
                        <div className="flex mb-2">
                            <div className="md:w-auto w-8"><StaticImage src="../images/ic-bit.png" alt="" /></div>
                            <div className="flex flex-1 justify-end">
                                <div className="mr-8">
                                    <div className="md:text-[30px] text-xl font-bold leading-none mb-2">149.83</div>
                                    <div className="text-xs text-right">$124.77 (-0.062%)</div>
                                </div>
                                <div className="md:w-[99px] w-[90px] md:h-[33px] h-[30px] flex items-center justify-center bg-[#facd89] rounded-2xl md:text-lg text-base font-bold">
                                    BTC <span className="mt-1 ml-2 -mr-2"><FaAngleDown /></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-xs text-[#999999] w-[360px] bg-[#e8e8e8] h-5 flex items-center pl-2">0x345ficjkvocc0x448vccdksllcjvi04den</div>
                            <button type="button" className="ml-2 text-lg text-[#999]">
                                <FaRegCopy />
                            </button>
                            <button type="button" className="flex items-center ml-2" onClick={() => setIsQrOpen(true)}>
                                <StaticImage src="../images/ic-qr.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between pl-2 pr-5 py-4">
                        <div className="flex items-center">
                            <span className="text-[#297fb3]"><FaInfoCircle /></span><span className="text-sm">1 USDT = 0.0008 DIV</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <span className="mr-1"><FaGasPump /></span>
                            <span className="mr-4">$2.91 </span>
                            <span className=""><FaAngleDown /></span>
                        </div>
                    </div>
                    <button type="button" className="w-full md:h-[56px] h-[44px] rounded-[10px] bg-[#8fd7e7] flex items-center justify-center md:text-lg text-base font-bold no-underline text-black" onClick={() => setIsConfirmOpen(true)}>
                        BRIDGE
                    </button>
                </div>
            </div>
            <div className="text-center text-base py-3">
                Anchor Bridge availabele in : <span className="font-bold">English</span>
            </div>
            <Modal
                isOpen={isQrOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                style={modalStyles}
            >
                <div className="relative w-[343px] pb-10">
                    <div className="flex justify-between px-[10px] py-4">
                        <div className="text-lg md:text-2xl font-bold">Receive</div>
                        <button className="md:w-auto w-6" onClick={() => setIsQrOpen(false)}>
                            <StaticImage src="../images/ic-close.png" alt="" />
                        </button>
                    </div>
                    <div className="px-[30px]">
                        <div className="border border-[#5e5e5e] rounded-[10px] flex flex-col items-center pt-5 pb-2">
                            <div className="">
                                <StaticImage src="../images/qr.png" alt="" />
                            </div>
                            <div className="text-center text-sm">bc1Qekfijs89km,dlkjdhdsdfov00Wcght</div>
                        </div>
                    </div>
                    <div className="text-center text-xs py-4">
                        This address is for receiving Bitcoin (BTC). <br />
                        If you send other coins, you may lose your coins.
                    </div>
                    <div className="flex justify-center">
                        <Link to={"/bridge"} className="w-[137px] h-[33px] rounded-[10px] bg-[#8fd7e7] flex items-center justify-center text-lg font-bold no-underline text-black">
                            COPY <span className="ml-1"><FaRegCopy /></span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={isConfirmOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                style={modalStyles}
            >
                <div className="relative md:w-[480px] w-full max-w-[480px] pb-10">
                    <div className="flex justify-between px-[10px] py-4">
                        <div className="md:text-2xl text-lg font-bold">{!issubmitted && 'Confirm Bridge' }</div> 
                        <button className="p-2 md:w-auto w-8 justify-self-end" onClick={() => setIsConfirmOpen(false)}>
                            <StaticImage src="../images/ic-close2.png" alt="" />
                        </button>
                    </div>
                    {!issubmitted ?
                        <>
                            <div className="px-[14px] pt-2">
                                <div className="border border-[#5e5e5e] rounded-[10px] pt-4 pb-2 px-5">
                                    <div className="flex justify-between pt-3">
                                        <div className="mr-8">
                                            <div className="md:text-[30px] text-lg font-bold leading-none mb-2">0.12</div>
                                            <div className="text-xs">$124.77</div>
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
                                <div className="border border-[#5e5e5e] rounded-[10px] pt-4 pb-2 px-5">
                                    <div className="flex justify-between pt-3">
                                        <div className="mr-8">
                                            <div className="md:text-[30px] text-lg font-bold leading-none mb-2">149.83</div>
                                            <div className="text-xs">$124.77 (-0.062%)</div>
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
                                <div className="text-sm p-5 pb-3">
                                    1 USDT = 0.0008 ETH ($1.000)
                                </div>
                                <div className="border border-[#5e5e5e] rounded-[10px] py-[10px] pl-6 pr-4">
                                    <div className="flex justify-between items-center text-sm mr-2">
                                        <span>Expected Output</span>
                                        <span className="font-bold">124.884 USDT</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm mr-2 mb-6">
                                        <span>Price Impact</span>
                                        <span className="text-right">0.00%</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm mr-2">
                                        <span>Minimum received after slippage<br />(0.50%)</span>
                                        <span className="text-right">124.262<br />USDT</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm mr-2">
                                        <span>Network Fee</span>
                                        <span className="text-right">~$3.55%</span>
                                    </div>
                                </div>
                                <div className="flex py-4 md:px-[60px] px-4">
                                    <span className="text-xs">
                                        Output is estimated. You will receive at least 124.187 USDT or
                                        the transaction will revert.
                                    </span>
                                </div>
                                <button type="button" className="w-full md:h-[56px] h-[44px] rounded-[10px] bg-[#8fd7e7] flex items-center justify-center md:text-2xl text-lg font-bold no-underline text-black" onClick={() => setIssubmitted(true)}>
                                    Confirm Bridge
                                </button>
                            </div>
                        </>
                        : 
                        <div className="pb-10">
                            <div className="flex items-center justify-center">
                                <StaticImage src="../images/submitted.png" alt="" />
                            </div>
                            <div className="text-center md:text-2xl text-xl py-3">
                                Transaction submitted
                            </div>
                            <div className="flex justify-center">
                            <button type="button" className="w-[300px] h-10 rounded-[5px] bg-[#8fd7e7] flex items-center justify-center text-lg font-bold no-underline text-black" onClick={() => setIsConfirmOpen(false)}>
                            Close
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </Modal>
        </div>
      </Layout>
    )
}

export default BridgePage
