import React from "react";
import { Container, Footer, Header } from "@/components/layouts";
import { Banner } from "./_components";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-secondary">
      <Container>
        <Header />
        <Banner />
        <Footer />
      </Container>
    </main>
  );
}
