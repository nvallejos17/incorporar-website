import { ThemeProvider } from 'styled-components';
import { baseTheme } from './themes/baseTheme';

// Components
import Navbar from './components/Navbar/Navbar.component';
import Home from './sections/Home/Home.section';
import About from './sections/About/About.section';
import Contact from './sections/Contact/Contact.section';
import Footer from './components/Footer/Footer.component';

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <Navbar />
    <Home />
    <About />
    <Contact />
    <Footer />
  </ThemeProvider>
);

export default App;
