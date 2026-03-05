// ContentTable.tsx
"use client";

import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

type ContentData = {
  id: number;
  serial: string;
  title: string;
  category: string;
  image: string; // URL
  description: string;
  date: string; // YYYY-MM-DD
  status: "Published" | "Draft" | "Archived";
  actions?: TableAction<ContentData>[];
};

const sampleData: ContentData[] = [
  {
    id: 1,
    serial: "#1",
    title: "Healthy Eating Tips",
    category: "Nutrition",
    image: "https://picsum.photos/80/60?random=1",
    description: "Tips to maintain a balanced diet and stay healthy.",
    date: "2026-03-01",
    status: "Published",
  },
  {
    id: 2,
    serial: "#2",
    title: "Morning Workouts",
    category: "Fitness",
    image: "https://picsum.photos/80/60?random=2",
    description: "Start your day with these effective exercises.",
    date: "2026-03-02",
    status: "Draft",
  },
  {
    id: 3,
    serial: "#3",
    title: "Stress Management",
    category: "Wellness",
    image: "https://picsum.photos/80/60?random=3",
    description: "Techniques to reduce stress and improve mental health.",
    date: "2026-03-03",
    status: "Published",
  },
  {
    id: 4,
    serial: "#4",
    title: "Heart Health Tips",
    category: "Cardiac",
    image: "https://picsum.photos/80/60?random=4",
    description: "Improve heart health with these lifestyle changes.",
    date: "2026-03-04",
    status: "Archived",
  },
  {
    id: 5,
    serial: "#5",
    title: "Evening Yoga Routine",
    category: "Fitness",
    image: "https://picsum.photos/80/60?random=5",
    description: "Relax your mind and body with this yoga routine.",
    date: "2026-03-05",
    status: "Published",
  },
  {
    id: 6,
    serial: "#6",
    title: "Mindful Eating",
    category: "Nutrition",
    image: "https://picsum.photos/80/60?random=6",
    description: "Learn how to eat mindfully for better digestion.",
    date: "2026-03-06",
    status: "Draft",
  },
];

const handleRowClick = (item: ContentData) => {
  console.log("Row clicked:", item);
};

export default function ContentTable() {
  const [data, setData] = useState<ContentData[]>(sampleData);

  const handleStatusToggle = (id: number, checked: boolean) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              status: checked ? "Published" : "Draft",
            }
          : item,
      ),
    );
  };

  const columns: Column<ContentData>[] = [
    { key: "serial", label: "S.N", width: "6%" },

    { key: "title", label: "Content Title", width: "18%" },

    { key: "category", label: "Category", width: "12%" },

    {
      key: "image",
      label: "Image",
      width: "12%",
      render: (value) => (
        <img
          src={value as string}
          alt="content"
          className="h-10 w-16 object-cover rounded"
        />
      ),
    },

    { key: "description", label: "Description", width: "20%" },

    { key: "date", label: "Date", width: "12%" },

    {
      key: "status",
      label: "Status",
      width: "10%",
      render: (value) => (
        <span
          className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
            value === "Published"
              ? "bg-green-100 text-green-800 border border-green-300"
              : value === "Draft"
                ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {value as string}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      width: "0%",
      render: (_, item) => (
        <div className="flex gap-2 items-center justify-center">
          <Switch
            checked={item.status === "Published"}
            onCheckedChange={(checked) => handleStatusToggle(item.id, checked)}
          />
        </div>
      ),
    },
  ];

  return (
    <DataTable<ContentData>
      columns={columns}
      data={data}
      itemsPerPage={10}
      rowKey="id"
      onRowClick={handleRowClick}
    />
  );
}
