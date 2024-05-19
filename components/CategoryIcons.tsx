import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  className?: string;
};

export default function CategoryIcons({ icon, title, className }: Props) {
  const radio = `Icon-radio-${title.replace(/\s/g, "")}`;
  return (
    <div
      className={`group mx-2 flex flex-1 flex-col items-center justify-center gap-2 self-end rounded-lg bg-white text-gray-500 transition-all duration-500 hover:text-black/80`}
    >
      <input
        type="radio"
        id={radio}
        name="hosting"
        value={radio}
        className="peer hidden transition-all duration-300 group-active:scale-95"
        required
      />
      <label
        htmlFor={radio}
        className="flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-300 group-active:scale-95 peer-checked:cursor-default peer-checked:text-black"
      >
        {icon}
        <p className="truncate text-[11px] mobile:text-[11.5px]">{title}</p>
      </label>
      <div className="h-[2.3px] w-full rounded-full bg-white transition-all duration-500 group-hover:bg-[#888888]/40 peer-checked:bg-gray-800 " />
    </div>
  );
}
