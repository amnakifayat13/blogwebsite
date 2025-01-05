import React from 'react'
import LoginForm from "../../components/loginForm";
import {getServerSession} from "next-auth"
import {redirect} from "next/navigation";
import { authOptions } from '../api/auth/[...nextauth]/route';

const LogIn = async() => {

  const session = await getServerSession(authOptions)
  
    if(session) redirect("/blog")
  return (
    <div>
      <LoginForm/>
    </div>
  )
}

export default LogIn
