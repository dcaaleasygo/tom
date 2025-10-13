// src/components/Header.tsx
import { useEffect, useState } from 'react'
import '../Styles/Header.css'

interface MenuItem {
  label: string
  url: string
}

interface Contacto {
  text: string
  url: string
  logo_: { url: string }
}

interface HeaderGlobal {
  logo: { url: string }
  menu: MenuItem[]
  contacto?: Contacto  
}

export function Header() {
  const [header, setHeader] = useState<HeaderGlobal | null>(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/globals/header')
      .then(res => res.json())
      .then(data => setHeader(data))
      .catch(err => console.error(err))
  }, [])

  if (!header) return null 

  return (
    <header className="header-container">
      <div className="header-inner">
       <div className="header-logo">
  <a href="/">
    <img src={header.logo.url} alt="Log" />
  </a>
</div>

        <nav>
  <ul className="header-nav">
    {header.menu.map((item, idx) => (
      <li key={idx}>
        <a href={item.url}>{item.label}</a>
      </li>
    ))}
  </ul>

  {header.contacto && (
  <div className="Escribenos">
    <a href={header.contacto.url}>
      {header.contacto.text}
      {header.contacto.logo_ && <img src={header.contacto.logo_.url} alt="logo" />}
    </a>
  </div>
)}
</nav>
      </div>
    </header>
  )
}