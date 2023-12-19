'use client'

import { Box, Button, Card, CardContent, CardMedia, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import * as Icons from "@mui/icons-material/";
import router from 'next/router';

interface User{
  username:string;
  password:string;
}




type Props = {}

export default function page({ }: Props) {



  const showForm = () => {
    return (
      <form onSubmit={()=>{
       
      }}>
        {/* Username */}
      <TextField
      
        variant='outlined'
        margin='normal'
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icons.Person />
            </InputAdornment>
          ),
        }}
        label="username"
        autoFocus

      >

      </TextField>
      <TextField
       
        variant='outlined'
        margin='normal'
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icons.Key />
            </InputAdornment>
          ),
        }}
        label="Password"
        autoComplete='password'
        autoFocus

      >

      </TextField>
      <Button
          className="mt-8"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          // disabled={reducer.status == "fetching"}
        >
          Create
        </Button>

        <Button
          className="mt-4"
          // onClick={() => {
          //   dispatch(add());
          //   router.push("/login");
          // }}
          type="button"
          fullWidth
          variant="outlined"
        >
          Cancel
        </Button>
    </form>
    )
    
  }

  return (
    <Box className="flex justify-center items-center">
      <Card className="max-w-[345px] mt-[100px]">
        <CardMedia
          sx={{ height: 2 }}
        // image="/static/img/next_register.jpg"
        // title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Register
          </Typography>
          {showForm()}
        </CardContent>
      </Card>
      <style jsx global>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0;
            background-size: cover;
            // background-image: url("/static/img/bg4.jpg");
            text-align: center;
          }
        `}
      </style>
    </Box>
  );
}