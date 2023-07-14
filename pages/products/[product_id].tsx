import ProductContainer from "@/containers/ProductContainer";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface ProductServerSideProps {
  productDescription: string;
}

const Product = ({
  serverSideProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <ProductContainer productDescription={serverSideProps?.productDescription} />
);

export const getServerSideProps: GetServerSideProps<{
  serverSideProps: ProductServerSideProps;
}> = async (props) => {
  console.log(
    "Product getServerSideProps function getting executed",
    props?.params
  );
  return {
    props: {
      serverSideProps: {
        productDescription: ([
          { id: "Product_1", name: "Product1", description: "product 1" },
          { id: "Product_2", name: "Product2", description: "product 2" },
          { id: "Product_3", name: "Product3", description: "product 3" },
        ].find((x) => x?.id === props?.params?.product_id)?.description || '') as string,
      },
    },
  };
};

export default Product;
