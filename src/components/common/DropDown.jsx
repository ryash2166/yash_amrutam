import React, { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropDown = ({ title, data1, data2, data3, data4, data5, classname }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([title]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );

  return (
    <Dropdown className="font-[Nunito]">
      <DropdownTrigger>
        <Button
          variant="bordered"
          className={`flex items-center justify-between py-3 px-2 max-h-10 max-w-[146px] w-full h-full rounded-md capitalize !outline-none ${classname}`}
        >
          <p className="text-base max-lg:text-sm leading-[28px] font-medium text-[#585858] ml-1">
            {selectedValue}
          </p>
          <MdOutlineKeyboardArrowDown className="w-5 h-5  text-[#585858]" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={setSelectedKeys}
      >
        {data1 && (
          <DropdownItem className="!outline-none" key={data1}>
            {data1}
          </DropdownItem>
        )}
        {data2 && (
          <DropdownItem className="!outline-none" key={data2}>
            {data2}
          </DropdownItem>
        )}
        {data3 && (
          <DropdownItem className="!outline-none" key={data3}>
            {data3}
          </DropdownItem>
        )}
        {data4 && (
          <DropdownItem className="!outline-none" key={data4}>
            {data4}
          </DropdownItem>
        )}
        {data5 && (
          <DropdownItem className="!outline-none" key={data5}>
            {data5}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
