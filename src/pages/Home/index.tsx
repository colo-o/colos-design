import Header from '../../components/Header';
import bannerImg from '../../assets/banner.jpg';

const Home = () => {
  return (
    <div className="w-full md:h-full grid justify-items-center items-center">
      <div className="col-start-1 relative row-start-1 blur-lg flex justify-center items-center z-1">
        <h3 className="text-primary text-4xl md:text-xxl font-black opacity-5 tracking-wider select-none">
          PROJECTS
        </h3>
      </div>
      <div className="bg-purple w-[94%] h-[35%] md:w-[47%] md:h-[25%] rounded-3xl col-start-1 row-start-1 relative rotate-20 shadow-5xl z-2" />
      <div className="w-full h-[65dvh] col-start-1 row-start-1 z-3 relative flex justify-center items-center">
        <img
          src={bannerImg}
          className="w-11/12 h-[60%] md:w-5/12 md:h-3/5 object-cover z-2"
        ></img>
        <h1 className="text-primary font-secondary text-7xl md:text-10xl font-black absolute top-[19.2%] left-[-6%] md:top-[14.8%] md:left-[7%]">
          CREATIVE
        </h1>
        <h1 className="text-primary font-secondary text-7xl md:text-10xl font-black absolute bottom-[17.4%] right-[-6%] md:bottom-[12.4%] md:right-[7%]">
          DEVELOPER
        </h1>
      </div>
      <div className="row-start-2">
        <h3 className="text-primary font-sans text-md text-center font-medium">
          As a Software Engineer, together we will bring your ideas to brilliant
          products that create the ideal conditions for success.
        </h3>
      </div>
    </div>
  );
};

export default Home;
