import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Comment from "@/models/Comment";

export async function GET() {
  connectDB();
  const comments = await Comment.find();
  return NextResponse.json(comments);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newComment = new Comment(data);
    const savedComment = await newComment.save();
    return NextResponse.json(savedComment);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
