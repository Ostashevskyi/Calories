import AboutUs from "@/components/home/about-us/About-Us";
import Advantages from "@/components/home/advantages/Advantages";
import FollowUs from "@/components/home/follow-us/FollowUs";
import Header from "@/components/home/header/Header";
import Title from "@/components/home/title/Title";
import Footer from "@/components/home/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/images/vegetables-bg.jpg')] bg-no-repeat bg-cover max-h-[50%]">
        <Header />
        <Title />
      </div>
      <Advantages />
      <AboutUs />
      <FollowUs />
      <Footer />
    </>
  );
}
