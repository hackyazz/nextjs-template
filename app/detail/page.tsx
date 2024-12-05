export default function PostDetail() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="flex flex-col">
            <div className="text-white">
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

            <div className="aspect-h-1 aspect-w-1 w-full">
              <img
                alt={""}
                src={
                  "https://tailwindui.starxg.com/plus/img/ecommerce-images/product-page-03-product-01.jpg"
                }
                className="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </div>
          </div>

          
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 position-reletive">
            <div className="flex py-2 justify-between w-full">
              <div className="flex gap-2">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://via.placeholder.com/50"
                  alt="avatar"
                />
                <div className="flex flex-col text-md leading-10 text-white">
                  NextUI
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-2xl tracking-tight text-white">我是标题</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: "我是描述 我是描述 我是描述",
                }}
                className="space-y-6 text-base text-white"
              />
            </div>
            <div className="flex justify-between w-full">
              <div className="text-md mt-2 font-medium text-white">11-03</div>
              <div className="text-xl mt-2 font-medium text-white cursor-pointer align-center">
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
