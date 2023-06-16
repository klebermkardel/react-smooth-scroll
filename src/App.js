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

      <main>
        {menuItems.map(menu => (
          <div className='content'>
            <h1 className='content-header' id={menu.title}>{menu.title}</h1>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
