import React from 'react';
import { Box, Container, Typography, TextField } from '@mui/material';
import { styled } from '@mui/system';

const ContactSectionContainer = styled('section')({
  backgroundColor: 'rgb(232, 232, 232)', // Using the variable value directly
  padding: '70px 0',
});

const ContactInfoWrap = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '950px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr',
  gap: '30px',
  [theme.breakpoints.down('md')]: {
    padding: '0 16px',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const ContactHeading = styled(Typography)(({ theme }) => ({
  fontSize: '47px',
  color: '#012963',
  fontWeight: 'bold',
  '& span': {
    color: theme.palette.primary.main, // Adjust according to your theme
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
  },
}));

const FormLabel = styled('label')(({ theme }) => ({
  fontSize: '26px',
  fontWeight: 700,
  display: 'block',
  color: '#012963',
  marginBottom: '8px',
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
    width:'100%',
  '& .MuiInputBase-input': {
    padding: '16px',
    color: '#012963',
    fontSize: '20px',
    fontWeight: 500,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 0,
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: 'rgb(255, 255, 255)', // Using the variable value directly
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: '0',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '0',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#757575', // Change placeholder color here
    opacity: 1, // Ensure opacity is set to 1
  },
}));

const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <ContactInfoWrap>
        <Box>
          <ContactHeading variant="h4">
            Si te interesa trabajar con <span>Nido</span> contáctanos:
          </ContactHeading>
        </Box>
        <ContactForm>
          <Box>
            <FormLabel htmlFor="number">WhatsApp</FormLabel>
            <CustomTextField
              id="number"
              name="phone"
              placeholder="ingresar número"
              variant="outlined"
              InputProps={{
                classes: {
                  input: 'custom-placeholder', // Optional: adding a custom class
                },
              }}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="email">Email</FormLabel>
            <CustomTextField
              id="email"
              name="email"
              placeholder="ingrese correo electrónico"
              type="email"
              variant="outlined"
              InputProps={{
                classes: {
                  input: 'custom-placeholder', // Optional: adding a custom class
                },
              }}
            />
          </Box>
        </ContactForm>
      </ContactInfoWrap>
    </ContactSectionContainer>
  );
};

export default ContactSection;
