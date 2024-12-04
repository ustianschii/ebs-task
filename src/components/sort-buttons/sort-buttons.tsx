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
    <div
      style={{
        width: "600px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <select onChange={categoryChange}>
        <option value="">select category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => setSortOrder("asc")}>
        sort by price: low to high
      </button>
      <button onClick={() => setSortOrder("desc")}>
        sort by price: high to low
      </button>
      <button onClick={() => setSortOrder("none")}>reset</button>
    </div>
  );
};

export default SortButtons;
