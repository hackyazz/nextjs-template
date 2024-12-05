import PostSource from "./PostSource";
import SwiperPc from "./swiper";

export default function SwiperPcCopy() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-3/4 h-full relative">
          <div className="absolute top-0 left-0 z-10">关闭</div>
          <SwiperPc />
        </div>
        <div className="">
          <h2>我是标题 我是标题</h2>
          <p>我是描述 我是描述 我是描述 我是描述</p>
          <div className="flex justify-between">
            <div>日期</div>
            <div>举报</div>
          </div>
          <div>
            <PostSource />
          </div>
          <div className="cursor-pointer">
            <div>帖子列表</div>
            <div>111</div>
            <div>222</div>
            <div>333</div>
            <div>444</div>
          </div>
          <div>分享一下！</div>
        </div>
      </div>
    </>
  );
}
