import { Category } from "./category";

export class PcpProductModel {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public categoryId: number;
  public category: Category;
}


export interface IProductModel {
  id: number;
  title: string;
  description: string;
  price: number;
  categoryId: number;
  category: Category;
}
