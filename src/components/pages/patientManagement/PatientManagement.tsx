"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";
import PatientTable from "./components/PatientTable";

interface SearchBarProps {
  onSearch?: (value: string) => void;
  onFilterChange?: (value: string) => void;
}

export default function PatientManagement({
  onSearch,
  onFilterChange,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSearchChange = (value: string) => {
    setQuery(value);
    onSearch?.(value);
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
    onFilterChange?.(value);
  };

  return (
    <div className="space-y-4">
      {/* Search + Select Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-end">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search here..."
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-9 rounded-full"
          />
        </div>

        {/* Select Dropdown */}
        <Select value={filter} onValueChange={handleFilterChange}>
          <SelectTrigger className="w-full sm:w-45 rounded-full h-12.5 bg-primary text-white text-[16px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="high">High Fitness</SelectItem>
            <SelectItem value="low">Low Fitness</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <PatientTable />
    </div>
  );
}
