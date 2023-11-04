import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import User from "@/models/User";

export async function GET(request, { params }) {
  try {
    connectDB();
    const userFound = await User.findById(params.id);
    if (!userFound)
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(userFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const userDeleted = await User.findByIdAndRemove(params);
    if (!userDeleted)
      return NextResponse.json(
        {
          message: "user not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(userDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const userUpdated = await User.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    console.log(userUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
