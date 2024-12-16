import { ArticlesList } from "@/components/articles/main";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Articles() {
  return (
   <div>
    <Navbar/>
    <ArticlesList/>
    <Footer/>
   </div>
  );
}