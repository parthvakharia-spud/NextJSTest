import React from "react";

const ShoppingCartContext = React.createContext({});

const ShoppingCartProvider = ({ children }: any) => {
  const [state, setState] = React.useState({
    products: [],
  });

  const setShoppingCartState = (partialUpdatedState: any) => {
    setState({
      ...state,
      ...partialUpdatedState,
    });
  };

  const addToShoppingCart = (product: any) => {
    setShoppingCartState({
      products: [...state.products, product],
    });
  };

  const removeFromShoppingCart = (id: string) => {
    const productIndex = state.products.findIndex((x: any) => x.id === id);
    if (productIndex > -1) {
      state.products.splice(productIndex, 1);
      setShoppingCartState({
        products: [...state.products],
      });
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        ...state,
        addToShoppingCart,
        removeFromShoppingCart,
        setShoppingCartState,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCartContext = () => {
  const context = React.useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCartContext can only be used inside ShoppingCartProvider"
    );
  }

  return context;
};
