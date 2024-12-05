import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

export default function SearchSection() {
  return (
    <>
      <Popover placement="bottom">
        <PopoverTrigger>
          <Input type="text" placeholder="搜索一下" className="Slate-700" />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Popover Content</div>
            <div className="text-tiny">This is the popover content</div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
