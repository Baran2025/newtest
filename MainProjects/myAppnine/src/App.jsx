import React from 'react'
import Navbar from './components/Navbar'
import { Grid2, Stack } from '@mui/material'
import RecipeReviewCard from './components/Cards'




const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <img style={{ height: 500, width: 1350 }} src="https://i.pinimg.com/736x/00/c1/c0/00c1c001455f45bf52dc3cdc70d85c91.jpg" />
      </div>
      <Grid2 container style={{marginTop:20}}>
      <Stack direction="row" spacing={1} >
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
      </Stack>
      </Grid2>
   

    </>
  )
}

export default App