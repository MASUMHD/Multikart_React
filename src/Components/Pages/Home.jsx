import Slider from "../HomeComponent/Slider";
import Category from "../HomeComponent/Category";
import TopCategory from "../HomeComponent/TopCategory";

const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <TopCategory />
      <h1 className="mt-6 ">Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
