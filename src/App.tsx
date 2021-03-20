import { ThemeProvider } from 'styled-components';
import { baseTheme } from './themes/baseTheme';

// Components
import Navbar from './components/Navbar/Navbar.component';
import Section from './components/Section/Section.component';
import Home from './sections/Home/Home.section';

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <Navbar />
    <Home />
    <Section>¿Qué hacemos?</Section>
  </ThemeProvider>
);

export default App;
