import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

export async function POST() {
  cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    secure: true,
  });

  try {
    const result = await cloudinary.v2.search
      .expression(`folder:${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(100)
      .execute();

    return new NextResponse(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching results from Cloudinary:", error);
    throw error;
  }
}
