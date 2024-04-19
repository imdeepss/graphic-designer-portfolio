import React from "react";
import { Container, Footer, Header } from "@/components/layouts";
import { Banner, ImageGallery } from "./_components";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-secondary">
      <Container>
        <Header />
        <Banner />
        <ImageGallery />
        <Footer />
      </Container>
    </main>
  );
}
