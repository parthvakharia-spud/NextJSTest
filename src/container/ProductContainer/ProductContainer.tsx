import { useRouter } from "next/router";
import ProductListContainer from "./ProductListContainer";

interface ProductContainerProps {
  productDescription: string;
}

const ProductContainer = (props: ProductContainerProps) => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>This is Product Container</h2>
      <div>
        Product Description:
        {props.productDescription}
      </div>
      <ProductListContainer
        products={[
          {
            id: "Product_1",
            name: "Product1",
            description: "product 1",
            image: "https://picsum.photos/200/300",
            altImage: "Product1",
          },
          {
            id: "Product_2",
            name: "Product2",
            description: "product 2",
            image: "https://picsum.photos/200/300",
            altImage: "Product2",
          },
          {
            id: "Product_3",
            name: "Product3",
            description: "product 3",
            image: "https://picsum.photos/200/300",
            altImage: "Product3",
          },
        ]}
      />
    </div>
  );
};

export default ProductContainer;
