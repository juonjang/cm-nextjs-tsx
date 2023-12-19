/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { Box, Button, Card, CardContent, CardMedia, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import * as Icons from "@mui/icons-material/";
import router from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Controller } from "react-hook-form";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
// import { add, signUp, userSelector } from "@/src/store/slices/userSlice";
// import { useAppDispatch } from "@/src/store/store";


interface User {
  username: string;
  password: string;
}




type Props = {}

export default function Register({ }: Props) {
  const router = useRouter();

  const initialValue: User = { username: " username ", password: "" };
  const formValidateSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").trim(),
    password: Yup.string().required("Password is required").trim(),
  });
  const { control,
    handleSubmit,
     formState:{errors,}
  } = useForm<User>({
    defaultValues: initialValue,
     resolver:yupResolver(formValidateSchema),
  });


  const showForm = () => {
    return (
      <form onSubmit={handleSubmit((value:User)=>{
        alert(JSON.stringify(value))
      })}>
        {/* Username */}
        <Controller
          name='username'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              error={(errors.username?.message ?? "") != ""}
              helperText={errors.username?.message?.toString()}
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
              label="Username"
              autoComplete='Username'
              autoFocus

            >

            </TextField>
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <TextField
                {...field}
                error={(errors.password?.message ?? "") != ""}
                helperText={errors.password?.message?.toString()}
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
          )}

        />
        {/*  */}
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
           onClick={() => {
          //   dispatch(add());
            router.push("/login");
           }}
          type="button"
          fullWidth
          variant="outlined"
        >
          Login
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
             background-image: url("/static/img/ggg.jpg");
            text-align: center;
          }
        `}
      </style>
    </Box>
  );
}