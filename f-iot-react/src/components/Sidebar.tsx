import { useUIStore } from '@/stores/ui.store'
import React from 'react'

function Sidebar() {
  const isSidebarOpen = useUIStore(s => s.isSidebarOpen);
  const darkMode = useUIStore(s => s.darkMode);

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '220px'
    height: '100%',
    backgroundColor: darkMode ? '#333' : '#ddd',
    padding: '20px',
    boxSizing: 'border-box'
    transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease'
  }

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar