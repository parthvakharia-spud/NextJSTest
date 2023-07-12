import ProductListContainer from "@/container/ProductContainer/ProductListContainer";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface ProductListServerSideProps {
  products: Record<string, any>[];
}

const ProductList = ({
  serverSideProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <ProductListContainer products={serverSideProps?.products} />
);

export const getServerSideProps: GetServerSideProps<{
  serverSideProps: ProductListServerSideProps;
}> = async (props) => {
  console.log("Product list getServerSideProps function getting executed");
  
  return {
    props: {
      serverSideProps: {
        products: [
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
        ],
      },
    },
  };
};

export default ProductList;
