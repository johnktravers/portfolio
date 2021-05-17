import React, { FC, useState } from 'react'

import { Navbar, Sidebar } from '../components'

const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
      <Navbar
        toggleOpen={toggleOpen}
      />
    </>
  )
}

export default Home
