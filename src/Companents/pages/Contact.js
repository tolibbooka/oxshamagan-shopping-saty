
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export function PaginationRounded() {
  return (
      <div className="classs">
          <div className='to'>
            <h1>Helloooo</h1>
          </div>
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
      </div>
    
  );
}

