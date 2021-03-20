import { ThemeProvider } from 'styled-components';
import { baseTheme } from './themes/baseTheme';

// Components
import Navbar from './components/Navbar/Navbar.component';
import Section from './components/Section/Section.component';

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <Navbar />
    <Section>Inicio</Section>
    <Section>¿Qué hacemos?</Section>
  </ThemeProvider>
);

export default App;
