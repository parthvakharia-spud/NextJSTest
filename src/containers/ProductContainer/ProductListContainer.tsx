import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import { useShoppingCartContext } from "@/providers/ShoppingCartProvider";

const ProductListContainer = (props: any) => {
  const router = useRouter();
  const { isNested } = props;
  const {
    products: shoppingCartProducts,
    addToShoppingCart,
    removeFromShoppingCart,
  }: any = useShoppingCartContext();

  return (
    <Box p={2}>
      <Box display="flex" gap={4} flexDirection="row">
        {props?.products?.map((x: Record<string, any>) => (
          <Card key={x.id} sx={{ width: 345 }}>
            <CardActionArea
              onClick={() => {
                router.push("/products/[product_id]", `/products/${x.id}`);
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={`${x.image}?timestamp=${x.id}`}
                alt={x.altImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {x.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {x.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button variant="contained" onClick={() => addToShoppingCart(x)}>
                Add
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  removeFromShoppingCart(x.id);
                }}
              >
                Remove
              </Button>
            </Box>
          </Card>
        ))}
      </Box>

      {!isNested && shoppingCartProducts?.length > 0 && (
        <Box>
          <Typography variant="h1">Shopping Cart</Typography>
          <ProductListContainer isNested products={shoppingCartProducts} />
        </Box>
      )}
    </Box>
  );
};

export default ProductListContainer;
