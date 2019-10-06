import { Link as GatsbyLink } from "gatsby"
import { Link as RebassLink } from "rebass"
import React from "react"

const Link = ({ style, ...props }) => (
  <RebassLink
    color="inherit"
    {...props}
    as={GatsbyLink}
    style={{ textDecoration: "none", ...style }}
  />
)

export default Link
