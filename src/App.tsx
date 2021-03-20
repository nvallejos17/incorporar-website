import { ThemeProvider } from 'styled-components';
import { baseTheme } from './themes/baseTheme';

// Components
import Navbar from './components/Navbar/Navbar.component';
import Home from './sections/Home/Home.section';
import About from './sections/About/About.section';

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <Navbar />
    <Home id='home' />
    <About id='about' />
  </ThemeProvider>
);

export default App;
