import React from 'react';
import { Button } from '@mui/material';

const Pagination = ({ totalResults, resultsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  return (
    <div>
      <Button 
        disabled={currentPage <= 1} 
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      <span>Page {currentPage} of {totalPages}</span>
      <Button 
        disabled={currentPage >= totalPages} 
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;