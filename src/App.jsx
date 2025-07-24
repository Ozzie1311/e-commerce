import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { FilterProvider } from "./context/filters";

export default function App() {
  return (
    <FilterProvider>
      <main className="wrapper">
        <Header />
        <ProductsList />
      </main>
    </FilterProvider>
  );
}
