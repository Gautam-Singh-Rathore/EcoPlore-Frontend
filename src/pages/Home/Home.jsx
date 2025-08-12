
import ImageSlider from '../../Components/Home/ImageSlider';
import Products from '../../Components/Home/Products';
import { CategoriesContainer } from './CategoriesContainer';
import CategoryProducts from './CategoryProducts';
  

const Home = () => {
    return (
        <div className='bg-[#f7f9f7]' >
            
            <CategoriesContainer/>
            <ImageSlider/>
             <CategoryProducts/>
      
        </div>
      )
}

export default Home;