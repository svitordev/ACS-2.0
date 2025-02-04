import TitleSections from "@/components/TitleSections";
import His16 from "./his16";
import His17 from "./his17";
import His19 from "./his19";
import YearTitle from "./yearTitle";
import His18 from "./his18";
import His20 from "./his20";
import His21 from "./his21";
import His22 from "./his22";
import His23 from "./his23";
import His24 from "./his24";

function History() {
  return (
    <section
      id="history"
      className="container px-3 xl:px-32 2xl:px-36 mx-auto mb-5 md:my-14 flex flex-col gap-6"
    >
      <TitleSections color={"text-yellow-500"}>Histórico</TitleSections>
      <div className="space-y-3">
        <YearTitle>2016</YearTitle>
        <His16 />
      </div>
      <div className="space-y-3">
        <YearTitle>2017</YearTitle>
        <His17 />
      </div>
      <div className="space-y-3">
        <YearTitle>2018</YearTitle>
        <His18 />
      </div>
      <div className="space-y-3">
        <YearTitle>2019</YearTitle>
        <His19 />
      </div>
      <div className="space-y-3">
        <YearTitle>2020</YearTitle>
        <His20 />
      </div>
      <div className="space-y-3">
        <YearTitle>2021</YearTitle>
        <His21 />
      </div>
      <div className="space-y-3">
        <YearTitle>2022</YearTitle>
        <His22 />
      </div>
      <div className="space-y-3">
        <YearTitle>2023</YearTitle>
        <His23 />
      </div>
      <div className="space-y-3">
        <YearTitle>2024</YearTitle>
        <His24 />
      </div>
    </section>
  );
}

export default History;
