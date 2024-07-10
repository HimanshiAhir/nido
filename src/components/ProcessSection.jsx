import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Section = styled('section')({
  padding: '80px 0',
});

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: '54px',
  lineHeight: 1.2,
  fontWeight: 'bold',
  letterSpacing: '-1.08px',
  color: '#012963',
  textAlign: 'center',
  marginBottom: '8px',
  '& span': {
    color: theme.palette.primary.main, // Adjust according to your theme
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '38px',
  },
}));

const SectionSubheading = styled(Typography)(({ theme }) => ({
  fontSize: '33px',
  color: '#012963',
  fontWeight: 500,
  maxWidth: '990px',
  margin: 'auto',
  textAlign: 'center',
  lineHeight: '45px',
  [theme.breakpoints.down('md')]: {
    fontSize: '22px',
    lineHeight: '32px',
  },
}));

const LogisticsRow = styled(Box)(({ theme }) => ({
  maxWidth: '900px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '50px',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    gap: '30px',
  },
}));

const LogisticsWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    borderRadius: '10px',
    padding: '30px 20px',
  },
}));

const LogisticsImg = styled('img')(({ theme }) => ({
  height: '120px',
  [theme.breakpoints.down('md')]: {
    height: '74px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '80px',
  },
}));

const TitleItalic = styled(Typography)(({ theme }) => ({
  fontSize: '25px',
  lineHeight: '108%',
  letterSpacing: '-1px',
  color: '#012963',
  fontWeight: 700,
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));

const ArrowIcon = styled('img')(({ theme }) => ({
  height: '18px',
  [theme.breakpoints.down('md')]: {
    height: '14px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ProcessSection = () => {
  return (
    <Section className="n-logistics-section n-section">
      <Container>
        <SectionHeading variant="h2">
          En <span>Nido,</span> nos encargamos de toda la logística
        </SectionHeading>
        <SectionSubheading variant="subtitle1">
          Tu único enfoque será la mano de obra, lo que te permitirá completar proyectos en solo <span>2-3 días.</span>
        </SectionSubheading>
        <LogisticsRow>
          <LogisticsWrap>
            <LogisticsImg src={`${process.env.PUBLIC_URL}/assets/media/logistic-img1.svg`} alt="Money Icon" />
            <TitleItalic variant="h6">Presupuestación</TitleItalic>
          </LogisticsWrap>
          <ArrowIcon src={`${process.env.PUBLIC_URL}/assets/media/arrow-icon.svg`} alt="Arrow Icon" />
          <LogisticsWrap>
            <LogisticsImg src={`${process.env.PUBLIC_URL}/assets/media/logistic-img2.svg`} alt="3D Plans Icon" />
            <TitleItalic variant="h6">Planos 3D</TitleItalic>
          </LogisticsWrap>
          <ArrowIcon src={`${process.env.PUBLIC_URL}/assets/media/arrow-icon.svg`} alt="Arrow Icon" />
          <LogisticsWrap>
            <LogisticsImg src={`${process.env.PUBLIC_URL}/assets/media/logistic-img3.svg`} alt="Assembly Instructions Icon" />
            <TitleItalic variant="h6">Instrucciones de montaje</TitleItalic>
          </LogisticsWrap>
          <ArrowIcon src={`${process.env.PUBLIC_URL}/assets/media/arrow-icon.svg`} alt="Arrow Icon" />
          <LogisticsWrap>
            <LogisticsImg src={`${process.env.PUBLIC_URL}/assets/media/logistic-img4.svg`} alt="Materials Supply Icon" />
            <TitleItalic variant="h6">Suministro de materiales</TitleItalic>
          </LogisticsWrap>
        </LogisticsRow>
      </Container>
    </Section>
  );
};

export default ProcessSection;
