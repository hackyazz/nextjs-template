export default function PostSource() {
  return (
    <>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 p-4">
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 position-reletive">
          <div className="flex py-2 justify-between w-full">
            <div className="flex gap-2">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/50"
                alt="avatar"
              />
              <div className="flex flex-col text-md leading-10">作者</div>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-2xl tracking-tight">我是来源</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>

            <div
              dangerouslySetInnerHTML={{
                __html: "来源描述",
              }}
              className="space-y-6 text-base"
            />
          </div>
        </div>
      </div>
    </>
  );
}
