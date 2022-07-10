import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SelectField = (props) => {
    const {label} = props;
    const [value, setValue] = useState('');

    const handleChange = () => {}

  return (
    <Box mt={3} width="100%">
        <FormControl size="small" fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChage={handleChange}>
                <MenuItem>option1</MenuItem>
                <MenuItem>option2</MenuItem>
                <MenuItem>option3</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField