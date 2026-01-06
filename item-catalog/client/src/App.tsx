import './App.css'

function App() {

  return (
    <div className="app-container">
      {/* Barra de adição */}
      <div className="add-section">
        <input
          type="text"
          placeholder="Nome do item"
        />
        <input
          type="text"
          placeholder="Categoria"
        />
        <button onClick={() => {}}>
          Adicionar
        </button>
      </div>

      {/* Filtros */}
      <div className="filter-section">
        <select 
        >
          <option value="all">Todas categorias</option>
        </select>
        
        <label>
          <input
            type="checkbox"
          />
          Apenas favoritos
        </label>
      </div>

      {/* Área de conteúdo */}
      <div className="content-section">
        {false ? (
          <ul className="items-list">
            <li className="item">
              <div className="item-content">
                <span className="item-name">Item exemplo</span>
                <span className="item-category">Categoria</span>
              </div>
              <div className="item-actions">
                <button>☆</button>
                <button>Alterar</button>
                <button>Excluir</button>
              </div>
            </li>
          </ul>
        ) : (
          <div className="empty-state">
            Nenhum item adicionado ainda. Adicione seu primeiro item acima!
          </div>
        )}
      </div>
    </div>
  )
}

export default App
