import Image from "next/image";
import { CustomFilter, Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-[28px] font-extrabold"> Car Catalogue </h1>
          <p>Explore the cars and find the best one for you</p>
        </div>

        <div className="home__filters">
          <SearchBar />
        </div>
        <div className="home__filter-container">
          <CustomFilter title='fuel' />
          <CustomFilter title='year' />
        </div>
      </div>
    </main>
  );
}
