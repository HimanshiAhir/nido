import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const BannerSection = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(217, 217, 217, 1)',
}));

const BannerInner = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  flexWrap: 'wrap',
}));

const ContentWrap = styled(Box)(({ theme }) => ({
  width: '54%',
  wordWrap: 'break-word',
  paddingTop: '130px',
  paddingBottom: '130px',
  marginRight: '-10%',
  [theme.breakpoints.down('lg')]: {
    paddingBottom: '80px',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '664px',
  },
}));

const HeroWrap = styled(Box)(({ theme }) => ({
  width: '56%',
  marginTop: '38px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '692px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '54px',
  lineHeight: '1.2',
  fontWeight: 'bold',
  letterSpacing: '-1.08px',
  color: 'rgb(1, 41, 99)',
  marginBottom: '8px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '42px',
  },
  '& span': {
    color: 'rgb(190, 0, 0)',
  },
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '30px',
  color: 'rgb(1, 41, 99)',
  lineHeight: '1.28',
  letterSpacing: '-0.6px',
  marginBottom: '42px',
  fontWeight: '400',
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
  },
}));

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

const Banner = () => {
  return (
    <BannerSection>
      <BannerInner maxWidth="lg">
        <ContentWrap>
          <Title variant="h1">
            ¡Instala con nosotros en <span>Nido,</span> somos ingenieros instaladores de <span>aerotermia!</span>
          </Title>
          <Paragraph variant="body1">
            ¿Quieres instalar con nosotros? Instalamos en toda España.
          </Paragraph>
          <PrimaryButton href="#">Empieza prueba<strong>GRATIS</strong></PrimaryButton>
        </ContentWrap>
        <HeroWrap>
          <img
            src={`${process.env.PUBLIC_URL}/assets/media/hero-img.png`}
            alt="Hero"
            style={{ width: '100%' }}
          />
        </HeroWrap>
      </BannerInner>
    </BannerSection>
  );
};

export default Banner;
