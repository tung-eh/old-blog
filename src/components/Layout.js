import React from "react"

import Navbar from "./Navbar"
import Container from "./Container"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Container>{children}</Container>
  </>
)

export default Layout
