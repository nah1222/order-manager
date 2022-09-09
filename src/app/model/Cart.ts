import { Item } from "./Item";

export interface Cart{
    id: number;
    order:Item[];
    totalPrice: number;
    //tableNo: number;
}