import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Movie = () => {
  const [movies,setMovies]=useState([]);
  const [select,setSelect]=useState(null)
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  //티엠디비 인포
  const API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWNjNjdlOGY2MTdjMjI4YzljOTc2YmIwNWNkMzljYSIsIm5iZiI6MTczNzYwNjUzNC43Nzc5OTk5LCJzdWIiOiI2NzkxYzU4NjUxNDhmODc2N2NmYTZiZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NnACMXUNz6GNI8pX87lg-HmC0rc4Dg0UM3CJmRDeTyk"
  const URL=`https://api.themoviedb.org/3/movie/popular`;
  //비동기 요청
  const Movies= async ()=>{
      try{
        const response = await axios.get(URL,{
          headers:{
            Authorization: `Bearer ${API_KEY}`,
            accept: 'application/json'
          },
          params:{
            language: 'ko-KR',
            region: 'KR',
            page:1
          }
        });
        const movies = response.data.results.slice(0,8);
        if(movies){
          setLoading(false);
          setMovies(movies);
        } else{
          setError("데이터를 가져오지 못 했습니다");
        }
      } catch(error){
        setError("에러발생! 데이터 패치를 하지 못하였음");
      }
    }
  useEffect(()=>{
    setLoading(true);
    Movies();
  },[]);
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"nextBtn"}
      onClick={onClick}
      ><IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"prevBtn"}
      onClick={onClick}
    ><IoIosArrowBack />
    </div>
  );
}
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="movieList">
      <h2>인기 ...? 영화</h2>
      <Slider {...settings}>
      {
        movies.map((item,idx)=>{
          return (
          <div 
            key={idx}
            className="movieCard"
            on onClick={()=>{setSelect(item)}}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
            />
            <p>{idx+1}</p>
          </div>
        )
        })
      }
      </Slider>
      {/* 영화 설명 팝업 */}
      {
        select && (
          <div className="popup">
            <button on onClick={()=>{setSelect(null)}}>×</button>
            <img src= {`https://image.tmdb.org/t/p/w500/${select.backdrop_path}`}/>
            <h3>{select.title}</h3>
            <p>{select.release_date}</p>
            <p>{select.overview}</p>
          </div>
        )
      }
    </div>
  );
};

export default Movie;