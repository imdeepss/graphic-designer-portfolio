import {
  Container,
  Footer,
  Header,
  ShootingStarEffect,
} from "@/components/layouts";
import { ImageProps } from "@/type/index";
import cloudinary from "cloudinary";
import { AboutUs, Banner, Contact, ImageGallery } from "./_components";

export const dynamic = "force-dynamic";

const fetchImages = async () => {
  cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  try {
    const result = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(50)
      .execute();

    const results = result.resources;
    const mappedResults: ImageProps[] = results.map(
      (resource: any, index: number) => ({
        id: index,
        height: resource.height,
        width: resource.width,
        public_id: resource.public_id,
        format: resource.format,
        url: resource.url,
      }),
    );
    return mappedResults;
  } catch (error) {
    console.error("Error fetching results from Cloudinary:", error);
    throw error;
  }
};

export default async function Home() {
  const getResults = async () => {
    return await fetchImages();
  };
  const results: ImageProps[] = await getResults();

  return (
    <main className="relative h-full w-full bg-secondary">
      <ShootingStarEffect />
      <Container>
        <Header />
        <Banner />
        <AboutUs />
        <ImageGallery results={results} />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}
