import { React } from "react";
import "./Home.scss";
import CardItem from "../../components/CardItem/CardItem";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Card } from "@mui/material";
import { AiFillCheckCircle } from "react-icons/ai";

const films = [
  {
    poster: "/src/assets/images/poster/film1.jpg",
    title: "Spider-Man: No Way Home",
    time: "188p",
    trailer: "OB3g37GTALc",
  },
  {
    poster: "/src/assets/images/poster/film2.jpg",
    title: "Doctor Strange: Multiverse of Madness",
    time: "188p",
    trailer: "3xccmeAsy8g",
  },
  {
    poster:
      "https://traffic-edge33.cdn.vncdn.io/cinema/img/4907798370779676-9F0L1Ksfe2pqCRIvCdaA7Uvnr9W.jpg",
    title: "Lật Mặt 6: Tấm vé định mệnh",
    time: "188p",
    trailer: "OobBWy3avUo",
  },
  {
    poster:
      "https://traffic-edge08.cdn.vncdn.io/cinema/img/1879175857940183-6WeBK3ivG5fBAt0RMrJrH0GhBrT.jpg",
    title: "Chuyện xóm tôi: Con nhót mót chồng",
    time: "188p",
    trailer: "c_AanVum9-k",
  },
  {
    poster:
      "https://traffic-edge33.cdn.vncdn.io/cinema/img/4907798370779676-9F0L1Ksfe2pqCRIvCdaA7Uvnr9W.jpg",
    title: "Lật Mặt 6: Tấm vé định mệnh",
    time: "188p",
    trailer: "OobBWy3avUo",
  },
  {
    poster:
      "https://traffic-edge08.cdn.vncdn.io/cinema/img/1879175857940183-6WeBK3ivG5fBAt0RMrJrH0GhBrT.jpg",
    title: "Chuyện xóm tôi: Con nhót mót chồng",
    time: "188p",
    trailer: "c_AanVum9-k",
  },
];
const tienich = [
  "Mua vé online tại nhà",
  "Săn vé với giá rẻ, an toàn",
  "Đặt chỗ ngồi tiện lợi",
  "Luôn cập nhật kịp thời",
];
const cinemas = [
  "lotte.jpg",
  "bhd.jpg",
  "cgv.jpg",
  "ddc.jpg",
  "galaxy.jpg",
  "mega.jpg",
];
const Home = (movie) => {
  movie = films;
  return (
    <div className="home-wrapper">
      <section
        id="quangcao"
        className="py-8 md:py-10 lg:py-14 landing:bg-transparent bg-teal-50"
      >
        <div className="content-review">
          <div className="reviewitem item1">
            <h1 className="review-title">Chào mừng đến với KT Movies</h1>
            <div className="tienich">
              {tienich.map((item) => {
                return (
                  <div className="tienich-item">
                    <AiFillCheckCircle />
                    <p>{item}</p>
                  </div>
                );
              })}
              <Button size="big" color="primary" className="booking">
                KHÁM PHÁ NGAY
              </Button>
            </div>
          </div>
          <Card className="reviewitem item2 bg-white">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 3000 }}
              navigation={{
                navigation: true,
              }}
              pagination={{ dynamicBullets: true }}
              rewind={true}
              loop={true}
              className="show-cinema"
            >
              {cinemas.map((cinema, index) => {
                return (
                  <SwiperSlide key={index} className="show-cinema-item">
                    <img src={`/src/assets/images/cinema/${cinema}`} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Card>
        </div>
      </section>
      <section id="phimdangchieu" className="">
        <h2 className="status-title">Phim đang chiếu</h2>
        <div className="list-movies">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 5000 }}
            navigation={{
              navigation: true,
            }}
            pagination={{ clickable: true }}
            rewind={true}
            loop={true}
            slidesPerView={4}
            spaceBetween={10}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {movie.map((film, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardItem
                    poster={film.poster}
                    title={film.title}
                    time={film.time}
                    trailer={film.trailer}
                  ></CardItem>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className="phimsapchieu">
        <h2 className="status-title">Phim sắp chiếu</h2>
      </section>
    </div>
  );
};

export default Home;
