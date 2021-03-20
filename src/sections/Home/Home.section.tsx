import { HomeContainer, HomeLogo, HomeTitle, HomeWrapper } from './Home.styled';

const Home = ({ ...props }) => {
  return (
    <HomeWrapper {...props}>
      <HomeContainer>
        <HomeLogo />
        <HomeTitle>Incorporar</HomeTitle>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
