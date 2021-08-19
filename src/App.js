import { artistlistData as chuchu } from './App.mock';
import { Container, ParentContent, MainContent, SideBar, TopBar, SearchBar } from './components/Layout';

function App() {
  return (
    <Container>
      <SideBar data={chuchu} />
      <ParentContent>
        <TopBar>
          <SearchBar />
        </TopBar>
        <MainContent data={chuchu} />
      </ParentContent>
    </Container>
  );
}

export default App;
