import { Link, NavLink } from 'react-router-dom'

const navigationItems = [
  { path: '/', label: 'Inicio', number: '01', end: true },
  { path: '/about', label: 'Sobre mí', number: '02' },
  { path: '/skills', label: 'Habilidades', number: '03' },
  { path: '/projects', label: 'Proyectos', number: '04' },
  { path: '/contact', label: 'Contacto', number: '05' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link className="brand" to="/" aria-label="Portfolio de Bruno, inicio">
        <span className="brand-mark">BC</span>
        <span className="brand-name">Bruno Casavalle</span>
      </Link>

      <p className="sidebar-intro">Mi espacio en la web</p>

      <nav className="navigation" aria-label="Navegación principal">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? 'navigation-link active' : 'navigation-link'
            }
          >
            <span className="navigation-number">{item.number}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <p className="sidebar-note">
        Un portfolio en construcción, con ganas de seguir aprendiendo.
      </p>
    </aside>
  )
}

export default Sidebar
