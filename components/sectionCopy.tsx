import Image from "next/image";
import bgUrl from "../public/bg.png";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

export default function SectionCopy() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-16">
      <Image
        src={bgUrl}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="relative isolate overflow-hidden px-6 py-4 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Mesr
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
          一个专注图片资源的引擎，打造最好的图片引擎网站！
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 w-full">
          <div className="w-full md:w-2/5">
            <Popover placement="bottom" className="z-20">
              <PopoverTrigger>
                <input
                  id="section-search"
                  name="section-search"
                  className="w-full min-w-0 flex-auto rounded-md border-0 bg-gray-300 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                />
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Popover Content</div>
                  <div className="text-tiny">This is the popover content</div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
