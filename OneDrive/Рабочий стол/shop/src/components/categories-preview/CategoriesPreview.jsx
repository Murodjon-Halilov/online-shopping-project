import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriesContext";
import CategoryPreview from "../category-preview/CategoryPreview";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
      <>
        {
          Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title];
            return <CategoryPreview key={title} products={products} title={title} />
          })
        }
      </>
    );
}

export default CategoriesPreview