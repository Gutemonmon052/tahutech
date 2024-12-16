import { CategoriesPage } from "@/components/categories/main";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Articles() {
  return (
   <div>
    <Navbar/>
    <CategoriesPage/>
    <Footer/>
   </div>
  );
}