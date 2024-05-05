import { Container, Footer, Header } from "@/components/layouts";
import { AboutUs, Banner, Contact, ImageGallery } from "./_components";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-secondary">
      <Container>
        <Header />
        <Banner />
        <ImageGallery />
        <AboutUs />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}
