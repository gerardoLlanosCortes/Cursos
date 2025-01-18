"use client";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";

export default function WidgetsGrid() {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count.toString()}
        href="/dashboard/counter"
        label="Contador"
        subTitle="Productos agregados"
        icon={<IoCartOutline size={50} className="text-blue-500" />}
      />
      {/* <SimpleWidget /> */}
    </div>
  );
}
