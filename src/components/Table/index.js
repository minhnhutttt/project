import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import CoinTable from './CoinTable';
import { FaAngleDown, FaSearch } from 'react-icons/fa';
const theme = createTheme({
  palette: {
  },
});

const Table = () => {
  return (
    <div className="w-full max-w-[1480px] mx-auto px-5 md:pt-[150px] pt-[100px]">
      <div className="md:text-4xl text-xl text-center">Top tokens on Anchorbridge</div>
      <div className="flex justify-end space-x-[10px] mt-10 mb-[10px]">
          <div className="flex items-center bg-white h-[38px] md:text-base text-sm p-1 px-2 rounded-[5px]">
            <span className="md:w-7 w-5"><StaticImage src="../../images/diver-ic-white.png" alt="" /></span>
            <span className="ml-[6px]">DIVER</span>
            <span className="mt-0.5 ml-2"><FaAngleDown /></span>
          </div>
          <div className="flex items-center bg-white h-[38px] md:text-base text-sm p-1 px-2 rounded-[5px]">
            <span className="ml-[6px]">1D</span>
            <span className="mt-0.5 ml-2"><FaAngleDown /></span>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-3 text-sm text-[#5e5e5e]"><FaSearch /></span>
            <input type="text" className="md:w-[190px] w-[120px] h-[38px] bg-white p-1 pl-8 rounded-[5px] text-xs" placeholder='Search tokens' />
          </div>
      </div>
      <ThemeProvider theme={theme}>
        <CoinTable />
      </ThemeProvider>
    </div>
  )
}

export default Table