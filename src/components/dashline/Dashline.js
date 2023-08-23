import React from 'react';
import { Divider } from '@mui/material';

function DashedLine({ color, width, margin }) {
  const dashedLineStyle = {
    width: width || '100%', // Use the provided width or default to 100%
    border: 'none',
    borderTop: `1px dashed ${color || '#ccc'}`, // Use the provided color or default to #ccc
    margin: margin || '16px 0', // Use the provided margin or default to 16px top and bottom
  };

  return <Divider sx={dashedLineStyle} />;
}

export default DashedLine;
