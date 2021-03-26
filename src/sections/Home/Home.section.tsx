import { HomeBrand, HomeContainer, HomeWrapper } from './Home.styled';

const Home = ({ ...props }) => {
  return (
    <HomeWrapper {...props}>
      <HomeContainer>
        <HomeBrand src='/incorporar.png' alt='' />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
