import { Paper } from '@mui/material'
import { colors } from "../../contants/colors"

import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Searchbar = () => {
  return (
    <Paper component={"form"} sx={{border: `1px solid ${colors.secondary}`}}>
      <input type="text" placeholder='Search...' className='search-bar' style={{paddingLeft:'15px' }}/>
      <IconButton type='submit'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Searchbar