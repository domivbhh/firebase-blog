import React from 'react'

import { Outlet } from 'react-router-dom'
const App = () => {
  const auth=true
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App
