import { useState } from 'react';
import logo from '../../assets/img-code-coders.webp';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <img src={logo} className='logo' alt="Imagem de fundo com preto e traços de pássaro vermelho" />

      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/">Home</Link>
      </nav>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  )
}