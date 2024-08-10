import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// export default () => {
//   //   return (
//   //     <Swiper
//   //       spaceBetween={50}
//   //       slidesPerView={2}
//   //       onSlideChange={() => console.log("slide change")}
//   //       onSwiper={(swiper) => console.log(swiper)}
//   //     >
//   //       <SwiperSlide>

//   //       </SwiperSlide>
//   //       <SwiperSlide>
//   //         {" "}

//   //       </SwiperSlide>
//   //       <SwiperSlide>

//   //       </SwiperSlide>
//   //     </Swiper>
//   //   );
// };

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      infinite={true}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDak01bFZZM0E3ZWhua1Y4cWFLVUtGUDhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXRPVnMvK0xjdWJSTGNZak9kenU3ZVZmY1BIbXdKdTZHQkJxQjU1d2E5aWtnPT0=&traceId=1"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDaEtZdVY3TDNHWkJvd3VlMlcxbzlseEpFd0xhWDVibStLdGRYRmxkNGI4VTdpMGJRT0ppMjh4RlRZQkc0Q3FZZEJNK3Z0Qk9IeXBSZkJWWnlDNFRRcHE=&traceId=1"
          alt=""
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQE93_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VEt0Rkk1TGVZeSs2bXpncmJlRHRWUHZ4OU1ucmxYekw5aGF6a2ZZcG9hazdPN2hFakIxbjdEcTdvSm41NlVxWjY4QUVCdUdBMlBPcFgrL3RBcVB1cmY5akxmSjBzTThIaWphQnAvU3pXTzFBVEJDMDBTeHpiUGx2K1ZRQnF4MUhYVVFWSzhKVFNmVjh2Um01S1FhVEVhaTIrN0cvbXhYblF1c2l5cUlBNU5PNDZOWHdhc3B5U2lGbzBUOTBkemxIUURmam1WUXkrbEhBSFh5cFV5eHZZQT09"
          alt=""
          className="h-[340px] w-full overflow-clip object-contain"
        />
      </SwiperSlide>
    </Swiper>
  );
};
