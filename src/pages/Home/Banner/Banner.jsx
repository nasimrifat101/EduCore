import circle from "../../../assets/blurleft.png";
import spin from "../../../assets/spin.svg";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">

      {/* ✅ TEXT LAYER */}
      <div className="min-h-screen max-w-screen-2xl mx-auto relative z-10">
        <div className="space-y-5 pt-30 text-primary">
          <p className="text-9xl font-bold">Creating</p>

          <p className="text-9xl font-bold">
            The <span>Future</span>
          </p>

          <p className="text-9xl font-bold">
            Of <span className="hover-stroke">Edu-Institute</span>
          </p>

          <p className="text-9xl font-bold">Management</p>

          <p className="text-3xl pt-10">
            Helping educational businesses grow with high-tech applications.
          </p>
        </div>
         <div
        className="absolute top-10 -right-[630px] spin-slow  opacity-20"
        style={{ willChange: "transform" }}
      >
        <img src={spin} alt="logo" className="w-[900px]" />
      </div>
      </div>

      {/* ✅ SHADOW / BLUR LAYER */}
      <img
        src={circle}
        alt=""
        className="absolute -top-[400px] -left-[400px] z-0"
      />

      <img
        src={circle}
        alt=""
        className="absolute top-[400px] left-[1300px] z-0"
      />

    </div>
  );
};

export default Banner;
