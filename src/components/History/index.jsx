import TitleSections from "@/components/TitleSections";
import His16 from "./his16";
import His17 from "./his17";
import YearTitle from "./yearTitle";

function History() {
  return (
    <section
      id="history"
      className="container px-3 xl:px-32 2xl:px-36 mx-auto mb-5 md:my-5 flex flex-col gap-10"
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
    </section>
  );
}

export default History;
