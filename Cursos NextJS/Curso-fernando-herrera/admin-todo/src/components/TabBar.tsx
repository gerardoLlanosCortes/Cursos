"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

// https://tailwindcomponents.com/component/radio-buttons-1

const tabOptions = [1, 2, 3, 4, 5];

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  tabOptions = [1, 2, 3, 4],
  currentTab = 1,
}: Props) => {
  const [selected, setSelected] = useState(currentTab);
  const router = useRouter();

  const onSelectedTab = (tab: number) => {
    setSelected(tab);
    setCookie("selectedTab", tab.toString());
    router.refresh();
  };

  return (
    <div
      className={`grid w-full grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2
       grid-cols-${tabOptions.length}
    `}
    >
      {tabOptions.map((tabOption) => (
        <div key={tabOption.toString()}>
          <input
            checked={selected === tabOption}
            onChange={() => {}}
            type="radio"
            id="1"
            className="peer hidden"
          />
          <label
            onClick={() => onSelectedTab(tabOption)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {tabOption}
          </label>
        </div>
      ))}
    </div>
  );
};
