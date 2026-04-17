import React from "react";

const TailwindPoint = () => {
  return (
    <div>
      {/* 1.타이포그래프*/}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,50)]">text-sm</div>
      <div className="text-base font-bold">text-base</div>
      <div className="text-lg font-semibold text-red-500">text-lg</div>
      <div className="text-xl">text-xl</div>
      <div className="text-2xl">text-2xl</div>
      <div className="text-[30px] font-bold text-purple-500">text-30px</div>

      {/* 2. background color */}
      <div className="bg-red-500">Background Color</div>

      {/* 3.사이즈 */}
      {/* 기본적으로 w-50 이라고하면 50 * 4 로 계산해서 200px이 된다. */}
      <div className="h-50 w-50 bg-black text-white">Box Size</div>
      <div className="h-full w-full bg-red-500 font-bold text-blue-500">
        w:100%, height:100%
      </div>

      {/* 4. 여백 */}
      {/* top,botto,left,right는 pt,pb,pl,pr로 할 수 있다. margin도 동일 */}
      {/* x, y축으로 해주고싶으면 px-2 py-2 이런식으로 사용이 가능하다 */}
      <div className="m-10 h-50 w-50 bg-orange-500 p-6">
        <div className="h-full w-full bg-indigo-500 text-lg">Padding</div>
      </div>

      {/* 5.border */}
      {/* rounded는 border-radius속성, border도 padding과 마찬가지로 x,y가능하며 
          top,bottoml,left,right도 설정이 가능하다, 기본으로 border로하면 border-width:1px 적용이 된다.
      */}
      <div className="h-20 w-40 rounded-md border-2 border-red-500">border</div>

      {/* 6. flex */}
      {/* gap-x-2 이런 경우 column-gpa, gap-y-2 는 row-gap 
          items는 align-items 이다.
      */}
      <div className="my-20 flex justify-between">
        <div className="flex h-40 w-40 items-center justify-center border">
          1
        </div>
        <div className="h-40 w-40 border">2</div>
        <div className="h-40 w-40 border">3</div>
        <div className="h-40 w-40 border">4</div>
      </div>
    </div>
  );
};

export default TailwindPoint;
