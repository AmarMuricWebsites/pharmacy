import Image from "next/image"
import { ArrowLeft, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"

export default function ProductPage({ params }: { params: { id: string } }) {
  // This would normally come from a database based on the ID
  const product = {
    id: params.id,
    name: "Vitamin C Complex",
    price: 19.99,
    description:
      "Our Vitamin C Complex provides essential immune support with a powerful blend of vitamin C, zinc, and elderberry. Each tablet delivers 1000mg of vitamin C to help maintain a healthy immune system, support collagen production, and provide antioxidant protection.",
    features: [
      "1000mg of Vitamin C per tablet",
      "Added zinc for immune support",
      "Elderberry extract for additional antioxidants",
      "Easy to swallow tablets",
      "No artificial colors or preservatives",
      "Suitable for vegetarians",
    ],
    usage:
      "Take one tablet daily with food. Do not exceed the recommended dose. If you are pregnant, nursing, or taking any medications, please consult with your healthcare provider before use.",
    ingredients:
      "Vitamin C (as Ascorbic Acid), Zinc (as Zinc Citrate), Elderberry Extract, Microcrystalline Cellulose, Stearic Acid, Croscarmellose Sodium, Silicon Dioxide, Magnesium Stearate, Hypromellose.",
    image: "/placeholder.svg?height=600&width=600",
    category: "Vitamins",
    rating: 4.5,
    reviews: 128,
    stock: 50,
  }

  // Related products would also come from a database
  const relatedProducts = [
    {
      id: "5",
      name: "Multivitamin Tablets",
      price: 15.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Vitamins",
      rating: 4.6,
    },
    {
      id: "9",
      name: "Omega-3 Fish Oil",
      price: 22.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Supplements",
      rating: 4.7,
    },
    {
      id: "3",
      name: "Pain Relief Gel",
      price: 12.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Pain Management",
      rating: 4.2,
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/products" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden border">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                  } ${i === Math.floor(product.rating) && product.rating % 1 > 0 ? "fill-gradient-to-r from-yellow-400 to-gray-200" : ""}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="text-sm text-muted-foreground mb-6">
            <p className="mb-2">
              <span className="font-medium text-foreground">Availability:</span> Please visit our pharmacy or call us to
              check current availability.
            </p>
            <p className="mb-2">
              <span className="font-medium text-foreground">Category:</span> {product.category}
            </p>
            <p>
              <span className="font-medium text-foreground">SKU:</span> MED-{product.id.padStart(6, "0")}
            </p>
          </div>

          <Button asChild className="bg-teal-600 hover:bg-teal-700 w-full md:w-auto">
            <Link href="/contact">Contact Us About This Product</Link>
          </Button>
        </div>
      </div>

      {/* Product Tabs */}
      <Tabs defaultValue="details" className="mb-12">
        <TabsList className="w-full grid grid-cols-3 mb-8">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="usage">Usage & Dosage</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="p-6 border rounded-lg">
          <h3 className="text-lg font-medium mb-4">Product Features</h3>
          <ul className="list-disc pl-5 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="usage" className="p-6 border rounded-lg">
          <h3 className="text-lg font-medium mb-4">Usage & Dosage</h3>
          <p>{product.usage}</p>
        </TabsContent>
        <TabsContent value="ingredients" className="p-6 border rounded-lg">
          <h3 className="text-lg font-medium mb-4">Ingredients</h3>
          <p>{product.ingredients}</p>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
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
    </div>
  )
}
