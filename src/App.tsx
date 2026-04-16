function App() {
  console.log("first");
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
    </div>
  );
}

export default App;
