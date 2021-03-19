import { ThemeProvider } from 'styled-components';
import { baseTheme } from './themes/baseTheme';

// Components
import Navbar from './components/Navbar/Navbar.component';
import Section from './components/Section/Section.component';

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <Navbar />
    <Section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque optio
        tempora necessitatibus accusantium exercitationem deleniti quidem illum
        pariatur, beatae accusamus repellat magnam laboriosam fuga consectetur
        laudantium saepe voluptatem aperiam odit? Quo debitis earum impedit
        delectus facilis perspiciatis eum pariatur adipisci, dolore, aperiam
        quod ex laudantium reiciendis? Maxime porro amet iusto?
      </p>
    </Section>
  </ThemeProvider>
);

export default App;
