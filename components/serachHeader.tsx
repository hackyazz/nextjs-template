import { Icon } from "@iconify/react";

export default function SearchHeader() {
  return (
    <header className="p-2 md:flex md:items-center md:justify-between flex flex-row justify-between">
      <div className="min-w-0 flex-1">
        <Icon
          icon="solar:round-arrow-left-linear"
          className="inline-block mr-1"
        ></Icon>
      </div>
      <div className="flex flex-row md:ml-4 md:mt-0 self-center">
        <div className="self-center hidden md:block">街拍、美女</div>
        <input
          id="section-search"
          name="section-search"
          className="w-1/2 min-w-0 flex-auto rounded-md border-0 bg-gray-300 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
        />
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          文字切换
        </button>
      </div>
    </header>
  );
}
