import { Link } from "react-router-dom";
import Mail from "./Mail";
import DetailBar from "./DetailBar";
import Movie from "./Movie";
import WhyJoin from "./WhyJoin";
import FAQ from "./FAQ";

const Main = () => {
  return (
    <main id="main">
      <div className="banner">
        <h1>영화, 시리즈 등을 무제한으로</h1>
        <p>7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다</p>
        <Mail />
      </div>
      <div className="C-Wrap">
        <div className="C-circle"></div>
        <div className="C-line"></div>
      </div>
      <section>
        <DetailBar />
        <Movie />
        <WhyJoin />
        <FAQ />
      </section>
    </main>
  );
};

export default Main;