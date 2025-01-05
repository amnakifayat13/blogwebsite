import User from "../../../../models/user";
import bcrypt from "bcrypt";
import { connect } from "../../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {

   await connect();
    const {name, email, password} = await req.json();
    
    const isExisting = await User.findOne({email})

    if(isExisting){
      return NextResponse.json({EorrorMessage: "User already exists"})
    }

    const hashedPassword = await bcrypt.hash(password, 10)


    const newUser = await User.create({name, email, password})
     
  
    return NextResponse.json(newUser, { status: 201 });

  } catch (error) {
    console.error(error); 

  
    return NextResponse.json({ message: "POST Error (Sign up)" }, { status: 500 });
  }
}
