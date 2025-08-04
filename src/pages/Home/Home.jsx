
import ImageSlider from '../../Components/Home/ImageSlider';
import Products from '../../Components/Home/Products';
import { CategoriesContainer } from './CategoriesContainer';



// Sample Data mimicking ProductCardResponseDto
const sampleProducts = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    name: 'Eco-friendly Water Bottle',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 299.99,
    noOfUnits: 5,
    description: 'A sustainable, reusable water bottle made from BPA-free materials.',
    subCategoryName: 'Kitchen Essentials',
  },
  {
    id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    name: 'Wireless Earbuds',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 1499.49,
    noOfUnits: 20,
    description: 'Experience high-quality sound with these comfortable and compact wireless earbuds.',
    subCategoryName: 'Electronics',
  },
  {
    id: '9f1b1c2a-f6c1-4d4f-99da-3e58a437f12c',
    name: 'Yoga Mat',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 899.00,
    noOfUnits: 8,
    description: 'A premium yoga mat with excellent grip and cushioning for all your workouts.',
    subCategoryName: 'Fitness',
  },
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d179',
    name: 'Eco-friendly Water Bottle',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 299.99,
    noOfUnits: 5,
    description: 'A sustainable, reusable water bottle made from BPA-free materials.',
    subCategoryName: 'Kitchen Essentials',
  },
  {
    id: '7c9e6679-7025-40de-944b-e07fc1f90ae7',
    name: 'Wireless Earbuds',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 1499.49,
    noOfUnits: 20,
    description: 'Experience high-quality sound with these comfortable and compact wireless earbuds.',
    subCategoryName: 'Electronics',
  },
  {
    id: '9f1b1c2a-f6c1-4d4k-99da-3e58a437f12c',
    name: 'Yoga Mat',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 899.00,
    noOfUnits: 8,
    description: 'A premium yoga mat with excellent grip and cushioning for all your workouts.',
    subCategoryName: 'Fitness',
  }
];
 

  // Products

  export function ProductsPage1() {
    return (
      <div>
        <Products  products={sampleProducts} />
      </div>
    );
  }

  

const Home = () => {
    return (
        <div className='bg-[#f7f9f7]' >
            
            <CategoriesContainer/>
            <ImageSlider/>
              <ProductsPage1 />
      
        </div>
      )
}

export default Home;