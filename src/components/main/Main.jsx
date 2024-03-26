import { Box, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {colors} from "../../contants/colors"


import { Category } from "..";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  return (
    <Stack>


      <Category
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />



      <Box>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"}>
            {selectedCategory} <span style={{ color: colors.secondary }}>Videos</span>
          </Typography>
        </Container>
      </Box>
    </Stack>
  )
}

export default Main