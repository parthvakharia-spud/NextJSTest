import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

const ProductListContainer = (props: any) => {
  const router = useRouter();
  console.log("serverSideProps", props);

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
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProductListContainer;
