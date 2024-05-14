import SearchProductProvider from "@/app/contexts/SearchProductContext";

const fetchProducts = async (
  params: string | undefined
): Promise<unknown[]> => {
  const fetchProducts = await fetch(
    `sualoja/api/catalog_system/pub/products/search/${params}`,
    { next: { revalidate: 900 } }
  );

  return await fetchProducts.json();
};

const SearchProductWrapper = async ({
  params,
  children,
}: {
  params: string;
  children: React.ReactNode;
}) => {
  const productsApi = await fetchProducts(params);

  return (
    <SearchProductProvider products={productsApi}>
      {children}
    </SearchProductProvider>
  );
};

export default SearchProductWrapper;
