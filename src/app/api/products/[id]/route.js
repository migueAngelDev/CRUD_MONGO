import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Product from "@/models/Product";

export async function GET(request, { params }) {
  try {
    connectDB();
    const productFound = await Product.findById(params.id);
    if (!productFound)
      return NextResponse.json(
        {
          message: " product not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(productFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const productDeleted = await Product.findByIdAndDelete(params.id);
    if (!productDeleted)
      return NextResponse.json(
        {
          message: " product not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(productDeleted);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const productUpdated = await Product.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    console.log(productUpdated);
    return NextResponse.json(productUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
