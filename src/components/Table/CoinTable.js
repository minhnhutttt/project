import React, { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import { FaLongArrowAltDown } from 'react-icons/fa';
import {
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import CoinBody from './CoinBody';

const CoinTable = () => {
  return (
    <Paper>
      <TableContainer className='md:px-[60px] px-5'>
        <Table sx={{  '& th': { fontSize: '13pt', padding: '25px 15px' },'& td': { fontWeight: 700, fontSize: '14pt' } }}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Token name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Change</TableCell>
              <TableCell align="right">TVL</TableCell>
              <TableCell align="right"><div className='flex items-center justify-end'><span className="text-base text-[#006faa] flex items-center justify-center"><FaLongArrowAltDown /></span> Volume</div></TableCell>
              <TableCell align="right" className='w-[164px]'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <CoinBody />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default CoinTable
