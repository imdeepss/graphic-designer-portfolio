"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Footer, Header } from "@/components/layouts";
import { Banner, ImageGallery } from "./_components";
import { ImageProps } from "./types";

export default function Home() {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.post("/api/fetch-cloudinary");
        const results = response.data.resources;

        const mappedResults: ImageProps[] = results
          .filter((result: any) => result.format === "jpg")
          .map((result: any, index: any) => ({
            id: index,
            height: result.height,
            width: result.width,
            public_id: result.public_id,
            format: result.format,
            url: result.url,
          }));

        setImages(mappedResults);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <main className="min-h-screen w-full bg-secondary">
      <Container>
        <Header />
        <Banner />
        <ImageGallery images={images} />
        <Footer />
      </Container>
    </main>
  );
}
