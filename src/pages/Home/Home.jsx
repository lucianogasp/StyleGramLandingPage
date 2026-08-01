// import components
import { Header } from "@/components/Header/Header.jsx";
import { BackgroundColorful } from "@/components/BackgroundColorful/BackgroundColorful.jsx";
import { VideoSlides } from "@/components/VideoSlides/VideoSlides.jsx";
import { Footer } from "@/components/Footer/Footer.jsx";

export function Home() {
  return (
    <div>
      <Header />
      <BackgroundColorful>
        <VideoSlides />
      </BackgroundColorful>
      <Footer />
    </div>
  )
}
