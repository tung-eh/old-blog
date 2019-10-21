import { Box, Flex, Link } from "rebass"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ThemeProvider } from "styled-components"
import React from "react"

import Container from "./Container"
import Navbar from "./Navbar"
import theme from "../theme"

const GRADIENT_COLOR =
  "linear-gradient(240deg, rgb(0, 217, 255), rgb(26, 224, 204), rgb(66, 213, 235), rgb(94, 149, 217), rgb(102, 102, 255))"

const Layout = ({ children, banner }) => (
  <ThemeProvider theme={theme}>
    <>
      <Navbar />
      <Flex sx={{ position: "relative" }} marginBottom={50}>
        {banner && (
          <img
            width="100%"
            src={banner}
            height={400}
            alt="banner"
            style={{ objectFit: "cover" }}
          />
        )}
        <Box
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
            top: 0,
            background: GRADIENT_COLOR,
            opacity: 0.5,
          }}
        />
      </Flex>
      <Container>
        {children}
        <Box pt={10} fontSize="2.5rem">
          <Link
            href="https://github.com/tung-eh"
            color="inherit"
            target="blank"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tùng-nguyễn-774368140"
            color="inherit"
            ml={30}
            target="blank"
          >
            <FaLinkedin />
          </Link>
        </Box>
      </Container>
    </>
  </ThemeProvider>
)

export default Layout
