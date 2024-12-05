import SwiperPc from "./swiper";

export default function SwiperMobile() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 z-10">关闭</div>
        <div className="absolute top-0 right-0 z-10">查看</div>
        <div className="absolute bottom-0 left-0 z-10 select-none pointer-events-none">
          我是描述 我是描述 我是描述 我是描述 我是描述 我是描述 我是描述
          我是描述
        </div>
        <div className="w-full h-screen">
          <SwiperPc />
        </div>
      </div>
    </>
  );
}
