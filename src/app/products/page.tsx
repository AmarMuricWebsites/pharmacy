import { ProductCard } from "@/components/product-card";
import VitaminC from "../../../public/vitaminc.jpg";
import Thermo from "../../../public/thermo.jpg";
import Pain from "../../../public/pain.jpg";
import FirstAid from "../../../public/first-aid.jpg";
import Multivitamin from "../../../public/multivitamin.jpg";
import PressureMonitor from "../../../public/pressure-monitor.jpg";
import AllergyRelief from "../../../public/allergy-relief.jpg";
import Glucose from "../../../public/glucose.jpg";
import HandCleanser from "../../../public/hand-cleanser.jpg";
import Sunscreen from "../../../public/sunscreen.jpg";
import Syrup from "../../../public/syrup.jpg";
import FishOil from "../../../public/fish-oil.jpg";

export default function ProductsPage() {
  const products = [
    {
      id: "1",
      name: "Vitamin C Complex",
      price: 19.99,
      image: VitaminC,
      category: "Vitamins",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Digital Thermometer",
      price: 24.99,
      image: Thermo,
      category: "Medical Devices",
      rating: 4.8,
    },
    {
      id: "3",
      name: "Pain Relief Gel",
      price: 12.99,
      image: Pain,
      category: "Pain Management",
      rating: 4.2,
    },
    {
      id: "4",
      name: "First Aid Kit",
      price: 29.99,
      image: FirstAid,
      category: "First Aid",
      rating: 4.7,
    },
    {
      id: "5",
      name: "Multivitamin Tablets",
      price: 15.99,
      image: Multivitamin,
      category: "Vitamins",
      rating: 4.6,
    },
    {
      id: "6",
      name: "Blood Pressure Monitor",
      price: 49.99,
      image: PressureMonitor,
      category: "Medical Devices",
      rating: 4.9,
    },
    {
      id: "7",
      name: "Allergy Relief Tablets",
      price: 8.99,
      image: AllergyRelief,
      category: "Allergy",
      rating: 4.3,
    },
    {
      id: "8",
      name: "Hand Sanitizer",
      price: 3.99,
      image: HandCleanser,
      category: "Personal Care",
      rating: 4.4,
    },
    {
      id: "9",
      name: "Omega-3 Fish Oil",
      price: 22.99,
      image: FishOil,
      category: "Supplements",
      rating: 4.7,
    },
    {
      id: "10",
      name: "Glucose Monitor Kit",
      price: 39.99,
      image: Glucose,
      category: "Medical Devices",
      rating: 4.8,
    },
    {
      id: "11",
      name: "Cough Syrup",
      price: 7.99,
      image: Syrup,
      category: "Cold & Flu",
      rating: 4.1,
    },
    {
      id: "12",
      name: "Sunscreen SPF 50",
      price: 14.99,
      image: Sunscreen,
      category: "Personal Care",
      rating: 4.6,
    },
  ];

  // Group products by category
  const categories = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="text-muted-foreground">
          Browse our selection of healthcare products. Please visit our pharmacy
          or call us to check availability.
        </p>
      </div>

      {Object.entries(categories).map(([category, categoryProducts]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
