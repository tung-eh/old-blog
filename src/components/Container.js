import React from "react"
import { Box } from "rebass"

const Container = props => (
  <Box
    {...props}
    sx={{
      maxWidth: "1200px",
      mt: 30,
      mx: "auto",
      px: 3,
    }}
  />
)

export default Container
