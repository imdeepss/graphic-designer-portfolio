import {
  Container,
  Footer,
  Header,
  ShootingStarEffect,
} from "@/components/layouts";
import { AboutUs, Banner, Contact, ImageGallery } from "./_components";

export default function Home() {
  return (
    <main className="relative h-full w-full bg-secondary">
      <ShootingStarEffect />
      <Container>
        <Header />
        <Banner />
        <AboutUs />
        <ImageGallery />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}
