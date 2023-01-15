import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {
  TableCell,
  TableRow,
} from '@mui/material';
import { Link } from "gatsby"
import { HiArrowDownRight, HiArrowUpRight } from "react-icons/hi2";

const CoinBody = () => {
  return (
    <>
    <TableRow>
      <TableCell>1</TableCell>
      <TableCell align="left"><Link to={'/single'} className="flex items-center space-x-2 text-black no-underline"><span className='w-7'><StaticImage src="../../images/ic-bit.png" alt="" /></span><span className="font-bold text-base">Bitcoin</span><span className='text-[#5e5e5e]'>BTC</span></Link></TableCell>
      <TableCell align="right">$42000</TableCell>
      <TableCell align="right"><div className="flex items-center justify-end text-[#fa202a]"><HiArrowDownRight />1%</div></TableCell>
      <TableCell align="right">$768M</TableCell>
      <TableCell align="right">$316M</TableCell>
      <TableCell><div className='flex justify-center items-center w-[164px] text-[#fa202a]'><StaticImage src="../../images/4687.svg" alt="" /></div></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>2</TableCell>
      <TableCell align="left"><Link to={'/single'} className="flex items-center space-x-2 text-black no-underline"><span className='w-7'><StaticImage src="../../images/USD.png" alt="" /></span><span className="font-bold text-base">USD Coin</span><span className='text-[#5e5e5e]'>USDC</span></Link></TableCell>
      <TableCell align="right">$42000</TableCell>
      <TableCell align="right"><div className="flex items-center justify-end text-[#2bae5b]"><HiArrowUpRight />1%</div></TableCell>
      <TableCell align="right">$768M</TableCell>
      <TableCell align="right">$316M</TableCell>
      <TableCell><div className='flex justify-center items-center w-[164px]'><StaticImage src="../../images/2.svg" alt="" /></div></TableCell>
    </TableRow>
    </>
  );
}

export default CoinBody
