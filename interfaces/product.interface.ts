export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: number;
  active: boolean;
}
