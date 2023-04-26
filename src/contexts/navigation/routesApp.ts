interface GetProductProps {
  productId: string;
}

const routesApp: Record<string, (args?: any) => string> = {
  getHome: () => "/",
  getCatalog: () => `/catalog`,
  getProduct: ({ productId }: GetProductProps) => `/catalog/${productId}`,
  getCart: () => `/cart`,
};

export default routesApp;
