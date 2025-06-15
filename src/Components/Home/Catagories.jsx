import { FaChevronDown } from 'react-icons/fa';


// for Mobile

  export const CategorySlider = ({category}) => {
    return (
      <div
      key={category.index}
      className="flex flex-col items-center justify-center min-w-[80px] text-center"
    >
      <img
        src={category.img}
        alt={category.name}
        className="w-12 h-12 object-contain rounded-full border border-gray-200 shadow-2xl shadow-slate-100"
      />
      <span className="text-sm mt-1">{category.name}</span>
    </div>
    )
  }
  
// for large screens
  export const CategoryGrid = ({category}) => {
    return (
      <div key={category.index} className="relative group text-center cursor-pointer">
      {/* <img
        src={category.img}
        alt={category.name}
        className="w-16 h-16 mx-auto mb-2 rounded-full shadow-2xl shadow-slate-100"
      /> */}
      <div className="flex items-center justify-center gap-1 text-sm font-medium text-gray-700 lg:text-xl">
        {category.name}
        <FaChevronDown className="text-xs text-gray-500 mt-0.5" />
      </div>

      {/* Dropdown on hover */}
      <div className="absolute left-1/2 -translate-x-1/2  hidden group-hover:flex flex-col bg-white  rounded-sm shadow-lg z-10 min-w-[140px] py-2">
        {category.subcategories.map((sub, i) => (
          <button
            key={i}
            className="px-4 py-2 text-left hover:bg-[#f7f9f7] text-sm cursor-pointer text-gray-700"
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
    );
  };
