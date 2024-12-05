import React from "react";
import { CategorySelect, SortButton, Container } from "./styles";
import { SortButtonsProps } from "./types";

const SortButtons: React.FC<SortButtonsProps> = ({
  setSortOrder,
  categories,
  setSelectedCategory,
}) => {
  const categoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setSortOrder("category");
  };

  return (
    <Container>
      <CategorySelect onChange={categoryChange}>
        <option value="">Select category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </CategorySelect>
      <SortButton onClick={() => setSortOrder("asc")}>
        Sort by price: low to high
      </SortButton>
      <SortButton onClick={() => setSortOrder("desc")}>
        Sort by price: high to low
      </SortButton>
      <SortButton onClick={() => setSortOrder("none")}>Reset</SortButton>
    </Container>
  );
};

export default SortButtons;
