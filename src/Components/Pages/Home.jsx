import Slider from "../HomeComponent/Slider";
import Category from "../HomeComponent/Category";
import TopCategory from "../HomeComponent/TopCategory";
import Banner from "../HomeComponent/Banner";
import FeatureProduct from "../HomeComponent/FeatureProduct";
import LatestBlog from "../HomeComponent/LatestBlog";
import Shipping from "../HomeComponent/Shipping";

const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <TopCategory />
      <Banner />
      <FeatureProduct />
      <LatestBlog />
      <Shipping />
    </div>
  );
};

export default Home;
