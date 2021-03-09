import {
  DesignByContainer,
  FooterContainer,
  SocialMediasContainer,
} from "../styles/Footer.style";

export const Footer = () => {
  return (
    <FooterContainer>
      <DesignByContainer>
        <strong>Designed by</strong>:<span>Lucas Ferreira Silva</span>
      </DesignByContainer>
      <SocialMediasContainer>
        <a
          href="https://github.com/lucasfsilva2310"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/githubLogo.png" alt="github" />
          <span>/lucasfsilva2310</span>
        </a>
        <a
          href="https://www.linkedin.com/in/lucasfsilva2310/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="images/linkedinLogo.png" alt="github" />
          <span>/in/lucasfsilva2310</span>
        </a>
      </SocialMediasContainer>
    </FooterContainer>
  );
};
