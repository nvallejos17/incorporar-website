import { ThemeProvider } from 'styled-components';
import { baseTheme } from './themes/baseTheme';

// Components
import Navbar from './components/Navbar/Navbar.component';

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <Navbar />
  </ThemeProvider>
);

export default App;
