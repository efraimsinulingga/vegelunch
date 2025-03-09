export default interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: "drink" | "food" | "snack";
  image: string;
  price: number;
  isBestSeller: boolean;
  amount: number;
  isBooked: boolean;
}
