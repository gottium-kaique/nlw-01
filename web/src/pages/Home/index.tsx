import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'

import logo from '../../assets/logo.svg'
import logoBlack from "../../assets/logo-black.svg"

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          {
            matchMedia("(prefers-color-scheme: dark)").matches
            ?
            <img 
              src={ logoBlack } 
              alt="Ecoleta" 
            />
            :
            <img 
              src={ logo } 
              alt="Ecoleta" 
            />
          }
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home