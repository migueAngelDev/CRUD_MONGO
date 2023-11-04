import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Comment from "@/models/Comment";

export async function GET(request, { params }) {
  try {
    connectDB();
    const commentFound = await Comment.findById(params.id);
    if (!commentFound)
      return NextResponse.json(
        {
          message: "Comment not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(commentFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const commentDeleted = await Comment.findByIdAndDelete(params.id);
    if (!commentDeleted)
      return NextResponse.json(
        {
          meesage: "comment not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(commentDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const commentUpdated = await Comment.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    console.log(commentUpdated);
    return NextResponse.json(commentUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
