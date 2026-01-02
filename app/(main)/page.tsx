import "../design/main.css";
import Header from "./Header";
import Main1Page from "./main1";
import Main2Page from "./main2";
import Main3Page from "./main3";

export default function Home() {
  return (
    <div className="scroll-container">
      <Header />
      <Main1Page />
      <Main2Page />
      <Main3Page />
    </div>
  );
}
