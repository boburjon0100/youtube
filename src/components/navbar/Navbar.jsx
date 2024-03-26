import { Box, Stack } from '@mui/material'
import { youtube_icon } from "../../contants"
import { Link } from 'react-router-dom'
import { Searchbar } from ".."
import { colors } from "../../contants/colors"

const Navbar = () => {
  return (
    <Stack direction={"row"} sx={{ background: colors.primary }} justifyContent={"space-between"} alignItems={"center"} p={2}>
      <Link to={"/"}>
        <img src={youtube_icon} alt="image" width={'150px'} />
      </Link>
      <Searchbar />
      <Box />
    </Stack>
  )
}

export default Navbar