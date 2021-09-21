const HomeCard = ({img, number, descr}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-10 space-x-7">
      <img src={`${img}`} alt="" className="z-40 h-[390px] md:h-[520px] w-auto" />
      <div className="z-40 md:space-y-7">
        <p className="text-white text-lg md:text-2xl font-bold">{number}</p>
        <p className="text-sm md:text-base  text-white md:w-[240px] md:h-[300px]">
          {descr}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
