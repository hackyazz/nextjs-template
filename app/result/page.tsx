import { Icon } from "@iconify/react";

export default function Result() {
  return (
    <>
      <div className="relative overflow-hidden px-6 py-4 shadow-2xl h-screen sm:rounded-3xl sm:px-16">
        <h2 className="text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Mesr
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-pretty text-lg/8">
          一个专注图片资源的引擎，打造最好的图片引擎网站！
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 w-full">
          <div className="w-full md:w-2/5">
            <input
              id="section-search"
              name="section-search"
              className="w-full min-w-0 flex-auto rounded-md border-0 bg-gray-300 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
            />
          </div>
        </div>
        <section id="history-search">
          <div className="flex justify-between">
            <div>历史搜索</div>
            <Icon
              icon="ic:baseline-cleaning-services"
              className="inline-block mr-1"
            ></Icon>
          </div>

          <div className="flex flex-wrap">
            <div className="flex items-center mr-2">
              <Icon
                icon="solar:history-linear"
                className="inline-block mr-1"
              ></Icon>
              <span className="">111</span>
            </div>
          </div>
        </section>

        <section id="recommand-search">
          <div>推荐搜索</div>
          <div className="flex flex-wrap">
            <div className="mr-2">111</div>
            <div className="mr-2">222</div>
          </div>
        </section>

        <div className="absolute bottom-6 left-0 right-0 text-center">
          <span>已收录内容：25w </span>
          <span>搜索次数：3585w</span>
        </div>
      </div>
    </>
  );
}
