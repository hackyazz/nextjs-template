"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function LangSelect() {
  return (
    <>
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            文字切换
            <Icon
              icon="uil:english-to-chinese"
              className="inline-block mr-1 size-6"
            ></Icon>
          </button>
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions">
          <DropdownItem key="zh">简体中文</DropdownItem>
          <DropdownItem key="en">English</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
