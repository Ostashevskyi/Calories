import { H2White } from "@/components/shared/H2";

export default function AboutUs() {
  return (
    <section className="bg-[url('/images/about-us-bg.jpg')] bg-cover bg-no-repeat max-h-[50%]">
      <H2White>About Us</H2White>
      <div>
        <p className="text-center text-white text-[26px] font-normal px-16 font-serif pb-[200px]">
          At CalorieTrack, we&apos;re passionate about empowering you to achieve
          your health and fitness goals through mindful nutrition. Our team of
          experts has developed this web app with a mission to make calorie
          tracking simple, accurate, and personalized. With years of experience
          in nutrition and technology, we&apos;ve crafted CalorieTrack to be
          your trusted companion on your wellness journey. We believe that
          understanding your food choices is crucial to a healthier lifestyle.
          Our commitment to excellence drives us to maintain an extensive food
          database, constantly updating it to ensure accuracy and inclusivity.
          We value your privacy and data security, so you can use our app with
          confidence. Whether you&apos;re a fitness enthusiast, a
          health-conscious individual, or someone looking to make lasting
          dietary changes, CalorieTrack is here for you. Join us today, and
          together, let&apos;s embark on a healthier, happier life.
        </p>
      </div>
    </section>
  );
}
