import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";

const colors = {
  primary: "#012963", // rgb(1, 41, 99)
  primaryRed: "#BE0000", // rgb(190, 0, 0)
  white: "#FFFFFF", // rgb(255, 255, 255)
  textLight: "#E8E8E8", // rgb(232, 232, 232)
  darkRed: "#A20000", // rgb(162, 0, 0)
};

const HighlightsSectionContainer = styled("section")(({ theme }) => ({
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/media/gradient-bg.png)`,
  minHeight: "600px",
  marginTop: "50px",
  display: "flex",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  alignItems: "center",
  paddingBottom: "90px",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
}));

const HighlightImgWrap = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "832px",
  "& img": {
    width: "100%",
    marginTop: "-128px",
    [theme.breakpoints.down("md")]: {
      marginTop: "-64px",
    },
  },
}));

const HighlightContentWrap = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "550px",
  padding: "54px 15px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const HighlightHeading = styled(Typography)({
  color: colors.textLight,
  marginBottom: "30px",
  fontWeight: "bold",
});

const HighlightText = styled(Typography)({
  fontSize: "32px",
  color: colors.textLight,
});

const WhoWeAreSectionContainer = styled("section")({
  backgroundColor: colors.textLight,
  padding: "0 0 70px",
});

const AboutContentWrap = styled(Box)(({ theme }) => ({
  width: "calc(100% - 30px)",
  maxWidth: "900px",
  backgroundColor: colors.white,
  padding: "40px 70px",
  borderRadius: "24px",
  boxShadow: "0px 4px 15px 3px rgba(0, 0, 0, 0.16)",
  margin: "0 auto",
  position: "relative",
  top: "-80px",
  [theme.breakpoints.down("md")]: {
    margin: "0 16px",
    padding: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 20px",
  },
}));

const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  textAlign: "center",
  color: colors.primary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));


const WhoWeAreWrap = styled(Box)({
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
  });
  
  const WhoWeAreContent = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "40px",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      gap: "40px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      marginTop: "30px",
      gap: "30px",
    },
  }));
  
  const WhoWeAreItem = styled(Box)(({ theme }) => ({
    fontSize: "32px",
    color: colors.primary,
    display: "flex",
    gap: "26px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
  }));
  
  const WhoWeAreImg = styled(Box)(({ theme }) => ({
    width: "64px",
    height: "64px",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    "& img": {
      height: "62px",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        height: "46px",
      },
    },
  }));
  
  const WhoWeAreDescWrap = styled(Box)({
    position: "relative",
    "&::after": {
      position: "absolute",
      content: '""',
      width: "55px",
      height: "3px",
      backgroundColor: colors.darkRed,
      bottom: "-20px",
    },
  });
  
  const WhoWeAreSectionHeading = styled(Typography)(({ theme }) => ({
    fontSize: "54px",
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#012963',
    [theme.breakpoints.down("md")]: {
      textAlign: 'left',
    }
  }));
  const WhoWeAreHeading = styled(Typography)(({ theme }) => ({
    fontSize: "32px",
    fontWeight: 'bold',
    color: '#012963',
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
  }));
  
  const WhoWeAreDesc = styled(Typography)(({ theme }) => ({
    fontSize: "25px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  }));


const WhoWeAreSection = () => {
  return (
    <React.Fragment>
      <HighlightsSectionContainer className="n-highlights">
        <HighlightImgWrap className="n-highlight-img-wrap">
          <img
            src={`${process.env.PUBLIC_URL}/assets/media/nido-image.png`}
            alt="Nido Image"
          />
        </HighlightImgWrap>
        <HighlightContentWrap className="n-heighlight-content-wrap">
          <HighlightHeading variant="h3" className="n-heading-highlight">
            ¿Lo mejor de todo?
          </HighlightHeading>
          <HighlightText className="n-highlight-text">
            No requerimos experiencia, ya que proporcionamos toda{" "}
            <strong>la capacitación necesaria</strong> para que puedas instalar.
          </HighlightText>
          <br />
          <HighlightText className="n-highlight-text">
            De esta forma te convertirás en un experto instalador de aerotermia.
          </HighlightText>
        </HighlightContentWrap>
      </HighlightsSectionContainer>

      <WhoWeAreSectionContainer className="n-who-we-are">
        <AboutContentWrap className="n-about-content-wrap">
          <AboutText className="n-about-text">
            Queremos que te sientas libre de explorar y crecer en tu carrera sin
            la presión de un contrato de exclusividad. En <strong>Nido,</strong>{" "}
            tu libertad es nuestra prioridad.
          </AboutText>
        </AboutContentWrap>

        <Container className="n-container">
          <WhoWeAreWrap className="n-who-we-are-wrap">
            <WhoWeAreSectionHeading variant="h3" className="n-section-heading">
              ¡Conócenos, hagamos juntos un proyecto!
            </WhoWeAreSectionHeading>
            <WhoWeAreContent className="n-who-we-are-content">
              <WhoWeAreItem className="n-who-we-are-item">
                <WhoWeAreImg className="n-who-we-are-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/media/doller.svg`}
                    alt="Dollar Icon"
                    className="n-doller-icon"
                  />
                </WhoWeAreImg>
                <WhoWeAreDescWrap className="n-who-we-are-desc-wrap">
                  <WhoWeAreHeading variant="h4" className="n-who-we-are-heading">
                    Tarifas competitivas
                  </WhoWeAreHeading>
                </WhoWeAreDescWrap>
              </WhoWeAreItem>
              <WhoWeAreItem className="n-who-we-are-item">
                <WhoWeAreImg className="n-who-we-are-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/media/comment.svg`}
                    alt="Comment Icon"
                  />
                </WhoWeAreImg>
                <WhoWeAreDescWrap className="n-who-we-are-desc-wrap">
                  <WhoWeAreHeading variant="h4" className="n-who-we-are-heading">
                    Ambiente de trabajo colaborativo.
                  </WhoWeAreHeading>
                </WhoWeAreDescWrap>
              </WhoWeAreItem>
              <WhoWeAreItem className="n-who-we-are-item">
                <WhoWeAreImg className="n-who-we-are-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/media/relationship.svg`}
                    alt="Relationship Icon"
                  />
                </WhoWeAreImg>
                <WhoWeAreDescWrap className="n-who-we-are-desc-wrap">
                  <WhoWeAreHeading variant="h4" className="n-who-we-are-heading">
                    Acuerdos con autónomos y empresas.
                  </WhoWeAreHeading>
                </WhoWeAreDescWrap>
              </WhoWeAreItem>
              <WhoWeAreItem className="n-who-we-are-item">
                <WhoWeAreImg className="n-who-we-are-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/media/location.svg`}
                    alt="Location Icon"
                  />
                </WhoWeAreImg>
                <WhoWeAreDescWrap className="n-who-we-are-desc-wrap">
                  <WhoWeAreHeading variant="h4" className="n-who-we-are-heading">
                    Proyectos variados
                  </WhoWeAreHeading>
                  <WhoWeAreDesc className="n-who-we-are-desc">
                    en tu zona o dónde quieras desplazarte.
                  </WhoWeAreDesc>
                </WhoWeAreDescWrap>
              </WhoWeAreItem>
              <WhoWeAreItem className="n-who-we-are-item">
                <WhoWeAreImg className="n-who-we-are-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/media/badge.svg`}
                    alt="Badge Icon"
                  />
                </WhoWeAreImg>
                <WhoWeAreDescWrap className="n-who-we-are-desc-wrap">
                  <WhoWeAreHeading variant="h4" className="n-who-we-are-heading">
                    Tarifas competitivas
                  </WhoWeAreHeading>
                  <WhoWeAreDesc className="n-who-we-are-desc">
                    soporte de equipo ingeniería + instaladores experimentados.
                  </WhoWeAreDesc>
                </WhoWeAreDescWrap>
              </WhoWeAreItem>
              <WhoWeAreItem className="n-who-we-are-item">
                <WhoWeAreImg className="n-who-we-are-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/media/clock.svg`}
                    alt="Clock Icon"
                  />
                </WhoWeAreImg>
                <WhoWeAreDescWrap className="n-who-we-are-desc-wrap">
                  <WhoWeAreHeading variant="h4" className="n-who-we-are-heading">
                    Flexibilidad laboral,
                  </WhoWeAreHeading>
                  <WhoWeAreDesc className="n-who-we-are-desc">
                    tu eliges si quieres hacer el proyecto!
                  </WhoWeAreDesc>
                </WhoWeAreDescWrap>
              </WhoWeAreItem>
            </WhoWeAreContent>
          </WhoWeAreWrap>
        </Container>
      </WhoWeAreSectionContainer>
    </React.Fragment>
  );
};

export default WhoWeAreSection;
