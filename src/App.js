
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import GlobalStyle from './components/styles/Global';
import content from './content'
import Card from './components/Card';


const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#00333',
    },
}



function App() {
    return (
        <ThemeProvider theme={theme}>
            < >
                <GlobalStyle />
                <Header />
                <Container>
                    {content.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </Container>

            </>
        </ThemeProvider>
    );
}


export default App;