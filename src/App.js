import './App.css';

function App() {

  const menuItems = [
    {
      id: 1,
      title: "home"
    },
    {
      id: 2,
      title: "sobre"
    },
    {
      id: 3,
      title: "portfolio"
    },
    {
      id: 4,
      title: "contato"
    }
  ]

  return (
    <div className="App">
      <header>
        <nav>
          <h2>Meu Projeto</h2>

          <ul>
          {menuItems.map(menu => (
            <li><a href={`#${menu.title}`}>{menu.title}</a></li>
          ))}
        </ul>
        </nav>
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
