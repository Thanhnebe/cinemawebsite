import {
    EarbudsBatterySharp,
    LocalActivitySharp,
    LocationCity,
    LockClock,
    PlayCircleFilled,
    Subtitles,
    SupervisedUserCircleSharp,
    TagOutlined,
    TextRotationAngledown
} from '@mui/icons-material';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Details.scss';
import { Card, Collapse, Select } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
const { Panel } = Collapse;



export default function Details() {

    return (
        <div>
            <div className='hd-regi-wr'>
                <div className='hd-bot-action-wrap d-flex justify-content-around'>
                    <div className='hd-bot-loca text-center'>
                        <LocationCity />
                        <div className='txt'>Chọn rạp</div>
                    </div>
                    <div className='hd-bot-loca text-center'>
                        <LocationCity />
                        <div className='txt'>Lịch chiếu</div>
                    </div>
                </div>
                <div className="hd-bot-km text-center mt-3">
                    <a className="link mx-2" href="/chuong-trinh-khuyen-mai/">Khuyến mãi</a>
                    <a className="link mx-2" href="/to-chuc-su-kien/">Thuê sự kiện</a>
                    <a className="link mx-2" href="/cac-loai-hinh-giai-tri-khac/">Tất cả các giải trí</a>
                    <a className="link mx-2" href="/about-us/">Giới thiệu</a>
                </div>
            </div>

            <div className="detail py-4">
                <div className="row">
                    <div className="col col-5">
                        <div className="web-movie-box">
                            <div className="image">
                                <img
                                    src="https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F10-2024%2Fvenom.jpg&w=1920&q=75"
                                    alt="VENOM: KÈO CUỐI (T13)"
                                    className="img-fluid"
                                />
                                <div className="attach">
                                    <div className="type-movie">
                                        <span className="txt">2D</span>
                                    </div>
                                    <div className="age">
                                        <span className="num">T13</span>
                                        <span className="txt">KID</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-7">
                        <div className="heading">VENOM: KÈO CUỐI (T13)</div>
                        <div className="detail-ct-h">
                            <ul className='info-detail list-unstyled'>
                                <li className='info-item d-flex align-items-center'>
                                    <TagOutlined className="me-2" />
                                    <span className='txt'>Hành Động, Khoa Học Viễn Tưởng</span>
                                </li>
                                <li className='info-item d-flex align-items-center'>
                                    <LockClock className="me-2" />
                                    <span className='txt'>109'</span>
                                </li>
                                <li className='info-item d-flex align-items-center'>
                                    <EarbudsBatterySharp className="me-2" />
                                    <span className='txt'>Khác</span>
                                </li>
                                <li className='info-item d-flex align-items-center'>
                                    <Subtitles className="me-2" />
                                    <span className='txt'>Phụ Đề</span>
                                </li>
                                <li className='info-item d-flex align-items-center'>
                                    <SupervisedUserCircleSharp className="me-2" />
                                    <span className='txt'>T13: Phim dành cho khán giả từ đủ 13 tuổi trở lên (13+)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="detail-ct-bd">
                            <h3 className="tt sub-title">MÔ TẢ</h3>
                            <ul>
                                <li>Đạo diễn: Kelly Marcel</li>
                                <li>Diễn viên: Tom Hardy, Juno Temple, Chiwetel Ejiofor, Clark Backo, Stephen Graham</li>
                                <li>Khởi chiếu: Thứ Sáu 25/10/2024</li>
                            </ul>
                        </div>
                        <div className="detail-ct-bd">
                            <h3 className="tt sub-title">NỘI DUNG PHIM</h3>
                            <div className="ct">
                                <input hidden id="drop-text-tab" type="checkbox" />
                                <div className="dt">
                                    <p className="txt line-clamp-6">
                                        Tom Hardy sẽ tái xuất trong bom tấn Venom: The Last Dance (Tựa Việt: Venom: Kèo Cuối) và phải đối mặt với kẻ thù lớn nhất từ trước đến nay - toàn bộ chủng tộc Symbiote.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="detail-ct-ft">
                            <div className="wrap-btn-trailer">
                                <a href="/" data-fancybox="true" className="video">
                                    <span className="ic"><PlayCircleFilled /></span>
                                    <span className="txt">Xem Trailer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="detail-ct-bd dt-mobile"><h3 className="tt sub-tittle">MÔ TẢ</h3><div className="ct"><div className="dt !max-h-fit"><p className="txt ">Đạo diễn: Kelly Marcel</p><p className="txt ">Diễn viên: Tom Hardy, Juno Temple, Chiwetel Ejiofor, Clark Backo, Stephen Graham</p><p className="txt mb-[4px]">Khởi chiếu: 25/10/2024</p></div></div><h3 className="tt sub-tittle">NỘI DUNG PHIM</h3><div className="ct"><div className="dt"><p className="txt line-clamp-2 ">Tom Hardy sẽ tái xuất trong bom tấn Venom: The Last Dance (Tựa Việt: Venom: Kèo Cuối) và phải đối mặt với kẻ thù lớn nhất từ trước đến nay - toàn bộ chủng tộc Symbiote</p></div><div className="item-detail"></div></div></div>
                </div>
            </div>

            <div className='sec-shtime'>
               <div className="shtime">
               <div className="shtime-wr">
               <div className="shtime-heading">
            <div className="heading">Lịch chiếu</div>
            <div className="shtime-slider time-list">
            <div className="swiper-container">
    <Swiper
        autoplay={false}
        spaceBetween={30}
        breakpoints={{
            768: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 3,
            },
        }}
    >
        <SwiperSlide className="time-item col">
            <div className="box-time">
                <p className="date">25/10</p>
                <p className="day">Thứ Sáu</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="time-item col">
            <div className="box-time">
                <p className="date">26/10</p>
                <p className="day">Thứ Bảy</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="time-item col">
            <div className="box-time">
                <p className="date">27/10</p>
                <p className="day">Chủ Nhật</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="time-item col">
            <div className="box-time">
                <p className="date">28/10</p>
                <p className="day">Thứ Hai</p>
            </div>
        </SwiperSlide>
    </Swiper>
</div>

            </div>
        </div>
                    <div className="shtime-body">
                        <h2 className="heading">DANH SÁCH RẠP</h2>
                        <div className="select-location">
                        <LocalActivitySharp />  
                            <Select options={[{ value: 'Hồ chí minh', label: <span>  Hồ Chí Minh</span> }]} />
                        </div>
                    </div>

                    <div className="shtime-ft">
                        <div className="cinestar-list collapseBlockJS">
                            <div className="cinestar-item collapseItem active">
                                <div className="cinestar-heading collapseHead">
                                    <h4 className='tittle'>Cinestar Quốc Thanh</h4>
                                    <TextRotationAngledown />

                                </div>
                                <div className="cinestar-body collapseBody">
                                    <p className='addr'>271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh</p>
                                    <ul className='cinestar-list collapseBlockJS'>
                                        <li className='item-info'>
                                            <div className="tt">
                                                Standard
                                            </div>
                                            <ul class="list-time"><li class="disable item-time">00:15</li><li class="disable item-time">08:10</li><li class="disable item-time">10:20</li><li class="disable item-time">11:40</li><li class="disable item-time">12:20</li><li class="disable item-time">13:50</li><li class="disable item-time">13:55</li><li class="disable item-time">14:50</li><li class="disable item-time">16:10</li><li class="disable item-time">16:55</li><li class="disable item-time">18:20</li><li class="item-time">19:30</li><li class="item-time">21:30</li><li class="item-time">23:40</li></ul>
                                        </li>
                                        
                                    </ul>
                                   
                                </div>
                                
                            </div>

                            <div className="cinestar-item collapseItem active">
                                <div className="cinestar-heading collapseHead">
                                    <h4 className='tittle'>Cinestar Quốc Thanh</h4>
                                    <TextRotationAngledown />

                                </div>
                                <div className="cinestar-body collapseBody">
                                    <p className='addr'>271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, Thành Phố Hồ Chí Minh</p>
                                    <ul className='cinestar-list collapseBlockJS'>
                                        <li className='item-info'>
                                            <div className="tt">
                                                Standard
                                            </div>
                                            <ul class="list-time"><li class="disable item-time">00:15</li><li class="disable item-time">08:10</li><li class="disable item-time">10:20</li><li class="disable item-time">11:40</li><li class="disable item-time">12:20</li><li class="disable item-time">13:50</li><li class="disable item-time">13:55</li><li class="disable item-time">14:50</li><li class="disable item-time">16:10</li><li class="disable item-time">16:55</li><li class="disable item-time">18:20</li><li class="item-time">19:30</li><li class="item-time">21:30</li><li class="item-time">23:40</li></ul>
                                        </li>
                                        
                                    </ul>
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
}
