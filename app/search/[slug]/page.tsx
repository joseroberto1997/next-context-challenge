import Input from "@/app/components/Input";
import Product from "../../components/Products/Product";
import SearchProductWrapper from "./SearchProductWrapper";

const Search = ({ params }: { params: { slug: string } }) => {
  return (
    <SearchProductWrapper params={params.slug}>
      <Input />
      <Product />
    </SearchProductWrapper>
  );
};

export default Search;
