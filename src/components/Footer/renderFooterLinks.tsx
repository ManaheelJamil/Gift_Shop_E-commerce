import React from 'react';
import { RenderSectionProps } from './type';

function RenderSection({
  title,
  items,
  visible = 'block',
}: RenderSectionProps) {
  return (
    <div className={`${visible}`}>
      <h1 className="text-gray-900 font-semibold lg:text-lg ">{title}</h1>
      <div className="mt-[24px] ">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <a href={item.link} key={index}>
              <h1 className="text-[#444444] z-20 hover:text-yellow-700 cursor-pointer lg:text-sm text-xs mt-[12px]">
                {item.name}
              </h1>
            </a>
          ))
        ) : (
          <h1 className="text-gray-400">Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default RenderSection;
