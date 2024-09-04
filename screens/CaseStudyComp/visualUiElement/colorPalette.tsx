const ColorPalette = (props: any) => {
  return (
    <>
      <p className="text-subtitle text-2xl font-semibold mb-3 uppercase">
        Color Palette
      </p>
      <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6">
        {props.colorPilatr.map((item: any, index: any) => {
          return (
            <div className={`bg-[${item}] h-48 rounded-2xl relative`}>
              <div className="bg-white rounded-lg absolute bottom-3 w-[90%] right-3 text-center">
                <p className={`text-[${item}] font-semibold`}>{item}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... h-28 w-full rounded-2xl my-6`}
      ></div>
    </>
  );
};

export default ColorPalette;
