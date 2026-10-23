import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="site-layout">
      <Sidebar />
      <main className="main-content">
        <div className="content-wrap">
          <Outlet />
        </div>
        <footer className="site-footer">
          <span>Portfolio de Bruno Casavalle</span>
          <span>Trabajo Práctico 2 · Comisión C5</span>
        </footer>
      </main>
    </div>
  )
}

export default Layout
