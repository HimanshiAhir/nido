import React from 'react';
import { AppBar, Toolbar, Box, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(255, 255, 255, 0.75)',
  zIndex: 9999,
  backdropFilter: 'blur(10px)',
  boxShadow: 'none', 
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '24px',
  flexWrap: 'wrap',
  padding: '24px 0',
}));

const LogoWrap = styled(Box)({
  display: 'inline-flex',
  height: '42px',
});

const Logo = styled('img')({
  display: 'inline-flex',
  height: '100%',
});

const PrimaryButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  outline: 'none',
  borderRadius: '8px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontSize: '18px',
  lineHeight: '1.2',
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(190, 0, 0)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  padding: '12px 24px',
  minWidth: '124px',
  transition: '0.3s ease-in-out',
  fontWeight: '600',
  '&:hover': {
    color: 'rgb(190, 0, 0)',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(190, 0, 0)',
    transform: 'translateY(1px)',
  },
}));

const Header = () => {
  return (
    <CustomAppBar>
      <CustomContainer maxWidth="lg">
        <LogoWrap>
          <Logo src={`${process.env.PUBLIC_URL}/assets/media/logo.svg`} alt="Nido Logo" />
        </LogoWrap>
        <PrimaryButton href="#">Login</PrimaryButton>
      </CustomContainer>
    </CustomAppBar>
  );
};

export default Header;
