export interface Product {
  id: number;
  name: string;
  category: "Desserts" | "Entries" | "Main dishes" | "Drinks";
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: number;
  active: boolean;
  pictureUrl?: string;
}
