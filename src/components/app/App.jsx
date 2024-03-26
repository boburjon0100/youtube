import { Stack } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Main , Channel , VideoDetail, Search , Navbar} from ".."
const App = () => {
  return (
    <Stack>
      <Navbar />
        <Routes>
          <Route  path='/' element={<Main />}/>
          <Route  path='/channel' element={<Channel />}/>
          <Route  path='/video'  element={<VideoDetail />} />
          <Route  path='/search'  element={<Search />} />
        </Routes>
    </Stack>
  )
}

export default App