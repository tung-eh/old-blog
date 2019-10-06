import { Flex } from "rebass"
import React from "react"
import styled from "styled-components"
import { Location } from "@reach/router"

import Link from "./Link"

const NavLink = styled(Link)`
  ${props =>
    props.active &&
    `
    fontWeight: bold;
    border-bottom: 2px solid;
  `}
`

const NAVS = [{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }]

const Navbar = () => (
  <Flex justifyContent="center">
    <Location>
      {({ location }) => (
        <>
          {NAVS.map(({ href, label }) => (
            <NavLink
              key={label}
              to={href}
              m="20px 30px"
              p={10}
              active={href === location.pathname}
            >
              {label}
            </NavLink>
          ))}
        </>
      )}
    </Location>
  </Flex>
)

export default Navbar
