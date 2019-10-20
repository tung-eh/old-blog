import { Box, Heading, Text } from "rebass/styled-components"
import React from "react"

import Link from "./Link"

const PostLink = ({
  post: {
    frontmatter: { path, date, summary, title },
  },
}) => (
  <Box sx={{ borderBottom: "1px solid grey" }}>
    <Link to={path}>
      <Heading fontSize={40} m="20px 0">
        {title}
      </Heading>
      <Text m="0 30px 30px">{summary}</Text>
      <Text color="grey" fontSize={16} m="0 30px 30px">
        {date}
      </Text>
    </Link>
  </Box>
)

export default PostLink
