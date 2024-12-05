import { FC } from "react";
import { Container, Input } from "./styles";

interface SearchFieldProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchField: FC<SearchFieldProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <Container>
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for products"
        aria-label="Search for products"
      />
    </Container>
  );
};

export default SearchField;
