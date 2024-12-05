import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import LangSelect from "./langSelect";

export default function Header() {
  return (
    <header className="p-2 md:flex md:items-center md:justify-between flex flex-row justify-between">
      <div className="min-w-0 flex flex-row">
        <Image
          isBlurred
          width={36}
          src="https://nextui.org/images/album-cover.png"
          alt=""
        />
        <h4 className="ml-2 text-2xl/7 self-center font-bold text-black sm:truncate sm:text-xl sm:tracking-tight hidden md:block">
          Mesr 一个专注图片资源的引擎
        </h4>
      </div>
      <div className="flex flex-row md:ml-4 md:mt-0 self-center">
        <input
          id="section-search"
          name="section-search"
          className="w-1/2 min-w-0 flex-auto rounded-md border-0 bg-gray-300 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
        />
        <LangSelect />
      </div>
    </header>
  );
}
