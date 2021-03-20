import { AboutWrapper, VideoContainer } from './About.styled';

const About = ({ ...props }) => (
  <AboutWrapper {...props}>
    <VideoContainer>
      <iframe
        src='https://www.youtube.com/embed/g1F46Hh6PZs?controls=0'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </VideoContainer>
  </AboutWrapper>
);

export default About;
