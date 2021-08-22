import { Container, ParentContent, MainContent, SideBar, TopBar, SearchBar } from './components/Layout';

function App() {
  return (
    <Container>
      <SideBar />
      <ParentContent>
        <TopBar>
          <SearchBar />
        </TopBar>
        <MainContent />
      </ParentContent>
    </Container>
  );
}

export default App;
