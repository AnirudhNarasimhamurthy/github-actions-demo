import logo from './logo.svg';

function Home() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Home
          </h1>
          <p>Visit <a href="https://github.com/ClydeDz/github-actions-demo">this GitHub repository</a></p>
          <p>Update 20210319.01</p>
        </header>
      </div>
    );
  }
  
  export default Home;