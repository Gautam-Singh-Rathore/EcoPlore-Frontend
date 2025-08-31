
import ImageSlider from '../../Components/Home/ImageSlider';
import Marquee from '../../Components/Home/Marquee';
import Products from '../../Components/Home/Products';
import { CategoriesContainer } from './CategoriesContainer';
import CategoryProducts from './CategoryProducts';
  

const Home = () => {
    return (
        <div className='bg-[#f7f9f7]' >
            
            <CategoriesContainer/>
            <ImageSlider/>
             <CategoryProducts/>
             <Marquee/>
      
        </div>
      )
}

export default Home;