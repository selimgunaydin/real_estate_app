import Blogs from "@/src/views/blogs";
import Hero from "@/src/views/hero";
import OurNew from "@/src/views/our-new";
import WhoAreWe from "@/src/views/who-are-we";

export default function Home() {
  return (
    <>
      <div className="container flex flex-col mb-40">
        <Hero />
        <WhoAreWe />
        <OurNew />
      </div>
      <Blogs />
    </>
  );
}
