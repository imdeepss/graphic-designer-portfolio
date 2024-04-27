import cloudinary from "./cloudinary";

export default async function fetchImages() {
  try {
    return await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(100)
      .execute();
  } catch (error) {
    console.error("Error fetching results from Cloudinary:", error);
    throw error;
  }
}
