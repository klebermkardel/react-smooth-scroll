import './App.css';

function App() {

  const menuItems = [
    {
      id: 1,
      title: "Home"
    },
    {
      id: 2,
      title: "Sobre"
    },
    {
      id: 3,
      title: "Portfolio"
    },
    {
      id: 4,
      title: "Contato"
    }
  ]

  return (
    <div className="App">
      <header>
        <nav>
          <h2>Meu Projeto</h2>
        </nav>

        <ul>
          {menuItems.map(menu => (
            <li><a href={`#${menu.title}`}>{menu.title}</a></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
