import { useProducts } from "../hooks/useProducts";
import { ProductsItems } from "./ProductsItems";
import "../Styles/ProductsList.css";
import { useFilters } from "../context/filters";

export const ProductsList = () => {
  const { data } = useProducts();
  const { filterProducts } = useFilters();

  if (!data) {
    return <p>Loading products...</p>;
  }

  const filteredProducts = filterProducts(data);

  return (
    <ul className="products">
      {filteredProducts.map(({ id, thumbnail, title, category, price }) => {
        return (
          <ProductsItems
            key={id}
            thumbnail={thumbnail}
            title={title}
            category={category}
            price={price}
          />
        );
      })}
    </ul>
  );
};
