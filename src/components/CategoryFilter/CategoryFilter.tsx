import styles from "./CategoryFilter.module.css";

const CategoryFilter = ({
  category,
  setCategory,
}: {
  category: string;
  setCategory: (category: string) => void;
}) => {
  const categories = ["All", "Laptop", "Tablet", "Mobile", "Accessory"];

  console.log(category);
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.title}>Filter by Category:</h3>
      <select
        className={styles.select}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
