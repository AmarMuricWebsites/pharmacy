"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // This would normally search products
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <Input
        type="search"
        placeholder="Search for medications, health products, and more..."
        className="w-full pl-10 pr-20"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Button
        type="submit"
        className="absolute right-1 top-1/2 h-7 -translate-y-1/2 bg-teal-600 hover:bg-teal-700"
        size="sm"
      >
        Search
      </Button>
    </form>
  )
}
