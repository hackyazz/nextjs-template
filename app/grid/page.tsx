import PostSource from "@/components/PostSource";
export default function Grid() {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        {/* mx-auto grid max-w-2xl items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:auto-rows-auto */}
        <div className="mx-auto grid max-w-2xl items-start lg:grid-cols-3 gap-5 lg:auto-rows-auto lg:max-w-none lg:mx-0">
          <div className="px-4 py-4 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-start-1 lg:col-end-3 lg:row-start-1">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <h2>我是标题</h2>
                <div>......</div>
              </div>
              <p>我是描述 我是描述</p>
              <div className="flex justify-between">
                <div>浏览25k</div>
                <div>2024-11-09 08:00</div>
              </div>
            </div>
          </div>
          <div className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3">
            <PostSource />
          </div>
          <div className="col-start-1 col-end-3 row-start-2 row-end-4 bg-[#D1BA74]">
            <p>分享一下！</p>
            <p>分享一下！</p>
            <p>分享一下！</p>
            <p>分享一下！</p>
          </div>
          <div className="col-start-1 col-end-3 row-start-4 row-end-5 bg-[#D1BA74]">
            <p>分享一下！</p>
          </div>
          <div className="col-start-3 row-start-3 row-end-4 bg-[#BEE7E9]">
            其他对象
          </div>
        </div>
      </div>
    </>
  );
}
