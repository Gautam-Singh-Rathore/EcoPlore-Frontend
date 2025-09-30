import logo from "../../assets/Images/greenplore.png"
import { Button } from "./Button";
import { Users,Truck,Store } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
const navigate = useNavigate();

    return (
        <nav className="bg-white shadow-sm mb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img 
                         onClick={()=>{navigate("/admin-dashboard")}}
                        className="cursor-pointer h-10 w-28 md:h-15 md:w-44"   src={logo} alt="GreenPlore" width={50} height={50}  />
                    </div>
                  
<div className="flex items-center gap-2 md:gap-4">
    {/* All Sellers Button */}
    <Button
        onClick={()=>{navigate("/admin-allsellers")}}
        variant="outline"
        className="p-2 text-green-700 hover:bg-green-50 md:px-4 md:py-2 cursor-pointer "
        title="All Sellers"
    >
        <Store className="h-5 w-5" />
        <span className="hidden md:inline md:ml-2 text-xs font-semibold">
            All Sellers
        </span>
    </Button>

    {/* All Customers Button */}
    <Button
        onClick={()=>{navigate("/admin-allcustomers")}}
        variant="outline"
        className="p-2 text-green-700 hover:bg-green-50 md:px-4 md:py-2 cursor-pointer"
        title="All Customers"
    >
        <Users className="h-5 w-5" />
        <span className="hidden md:inline md:ml-2 text-xs font-semibold">
            All Customers
        </span>
    </Button>

    {/* All Orders Button */}
    <Button
        onClick={()=>{navigate("/admin-allorders")}}
        className="p-2 bg-green-600 text-white shadow-md hover:bg-green-700 md:px-4 md:py-2 cursor-pointer"
        title="All Orders"
    >
        <Truck className="h-5 w-5" />
        <span className="hidden md:inline md:ml-2 text-xs font-semibold">
            All Orders
        </span>
    </Button>
</div>

                </div>
            </div>
        </nav>
    );
};