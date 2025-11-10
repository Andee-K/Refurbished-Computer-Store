import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("All");

  // Initial data fetch from api
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://s3.us-east-1.amazonaws.com/assets.spotandtango/products.json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filtering products based on category
  let filteredProducts = products;
  if (category !== "All") {
    filteredProducts = products.filter(
      (product: { group: string }) => product.group === category
    );
  }

  return (
    <>
      <header>
        <div className="header-content">
          <h1>
            Spot & Tango Computers{" "}
            <span>
              <img
                src="FluentAnimalDog24Filled.svg"
                alt="Dog Icon"
                width="24"
                height="24"
              ></img>
            </span>
          </h1>
          <Cart />
        </div>
      </header>

      <main>
        <h2>Welcome to S&T's Refurbished Computer Store</h2>
        <CategoryFilter category={category} setCategory={setCategory} />
        <section>
          {loading && <p>Loading products...</p>}
          {error && <p>Error: {error}</p>}
          <ProductList products={filteredProducts} />
        </section>
      </main>
    </>
  );
}

export default App;
