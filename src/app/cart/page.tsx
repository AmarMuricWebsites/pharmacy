"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/product-card";

export default function CartPage() {
  // This would normally come from a cart state or context
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Vitamin C Complex",
      price: 19.99,
      image: "/placeholder.svg?height=100&width=100",
      quantity: 2,
    },
    {
      id: "2",
      name: "Digital Thermometer",
      price: 24.99,
      image: "/placeholder.svg?height=100&width=100",
      quantity: 1,
    },
    {
      id: "3",
      name: "Pain Relief Gel",
      price: 12.99,
      image: "/placeholder.svg?height=100&width=100",
      quantity: 1,
    },
  ]);

  // Recommended products
  const recommendedProducts = [
    {
      id: "4",
      name: "First Aid Kit",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "First Aid",
      rating: 4.7,
    },
    {
      id: "5",
      name: "Multivitamin Tablets",
      price: 15.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Vitamins",
      rating: 4.6,
    },
    {
      id: "6",
      name: "Blood Pressure Monitor",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Medical Devices",
      rating: 4.9,
    },
    {
      id: "7",
      name: "Allergy Relief Tablets",
      price: 8.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Allergy",
      rating: 4.3,
    },
  ];

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <Link
          href="/products"
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you {"haven't"} added any products to your cart yet.
          </p>
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-center p-4 hidden sm:table-cell">
                      Price
                    </th>
                    <th className="text-center p-4">Quantity</th>
                    <th className="text-right p-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="w-16 h-16 relative mr-4 hidden sm:block">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-muted-foreground sm:hidden">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center hidden sm:table-cell">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-r-none"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <div className="h-8 w-10 flex items-center justify-center border-y">
                            {item.quantity}
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-l-none"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end">
                          <span className="mr-4">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Free shipping on orders over $50</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Taxes calculated at checkout
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Proceed to Checkout
                </Button>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Have a promo code?</div>
                  <div className="flex">
                    <Input
                      placeholder="Enter code"
                      className="rounded-r-none"
                    />
                    <Button variant="outline" className="rounded-l-none">
                      Apply
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}

      {/* Recommended Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
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
  );
}
