// Import statements from sandbox.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

// Styling classes from login.module.css
import classes from './login.module.css';

// Header UI element "DBT Assistant"
const Header = () => {
  return (
    <Box className={classes.header}>
      DBT Assistant - Login Page
    </Box>
  );
}

// Text Input Field UI element without the Clear icon
const TextInputField = () => {
  return (
    <TextField
      className={classes.textfield}
      placeholder="Type your message here..."
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="Send message">
              <SendIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}

export { Header, TextInputField };
