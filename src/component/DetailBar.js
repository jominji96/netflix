import { FcFilmReel } from "react-icons/fc";

const DetailBar = () => {
  return (
      <div className='detailBar'>
        <FcFilmReel className="detailIcon" />
        <div className="detailText">
          <p>
            7,000원이면 만날 수 있는 넷플릭스<br />
            가장 경제적인 광고형 멤버십을 이용해보세요
          </p>
          <button>자세히 알아보기</button>
        </div>
      </div>
  );
};

export default DetailBar;