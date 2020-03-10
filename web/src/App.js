import React, { useState } from 'react'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

//   VERIFICAR PORQUE O CADASTRO ESTÁ COLADO NO TOPO DA PAGINA 

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://secure.gravatar.com/avatar/74cc1d5040bbde77a4ada3848a74274a?s=180&d=identicon" alt="Gabriela Rocha" />
              <div className="user-info">
                <strong>Gabriela da Rocha</strong>
                <span>React, Node.js, Python</span>
              </div>
            </header>
            <p>Estagiária na Gesecx</p>
            <a href="https://github.com/GabrieladaRocha">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://secure.gravatar.com/avatar/74cc1d5040bbde77a4ada3848a74274a?s=180&d=identicon" alt="Gabriela Rocha" />
              <div className="user-info">
                <strong>Gabriela da Rocha</strong>
                <span>React, Node.js, Python</span>
              </div>
            </header>
            <p>Estagiária na Gesecx</p>
            <a href="https://github.com/GabrieladaRocha">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://secure.gravatar.com/avatar/74cc1d5040bbde77a4ada3848a74274a?s=180&d=identicon" alt="Gabriela Rocha" />
              <div className="user-info">
                <strong>Gabriela da Rocha</strong>
                <span>React, Node.js, Python</span>
              </div>
            </header>
            <p>Estagiária na Gesecx</p>
            <a href="https://github.com/GabrieladaRocha">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://secure.gravatar.com/avatar/74cc1d5040bbde77a4ada3848a74274a?s=180&d=identicon" alt="Gabriela Rocha" />
              <div className="user-info">
                <strong>Gabriela da Rocha</strong>
                <span>React, Node.js, Python</span>
              </div>
            </header>
            <p>Estagiária na Gesecx</p>
            <a href="https://github.com/GabrieladaRocha">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App


//parei em 1h07