import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { StaticImageData } from "next/image";

type ProductImage = string | StaticImageData;

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: ProductImage;
  category: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  rating,
  isNew,
  isSale,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link href={`/products/${id}`}>
          <div className="overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              className="h-[200px] w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-teal-600">New</Badge>
        )}
        {isSale && (
          <Badge className="absolute top-2 right-2 bg-red-600">Sale</Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <Link href={`/products/${id}`} className="hover:underline">
          <h3 className="font-medium line-clamp-2 h-12">{name}</h3>
        </Link>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-2">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="mt-3 font-bold">${price.toFixed(2)}</div>
      </CardContent>
    </Card>
  );
}
