import { Cart } from "./model/Cart"
import { Item } from "./model/Item"

export const ITEMS: Item[] = [
{
    id:1,
    name: "Hamburger",
    price: 12.50,
    selected: false,
    quantity: 0
},
{
    id:2,
    name: "Hot Dog",
    price: 8.50,
    selected: true,
    quantity: 1
},
{
    id:3,
    name: "Pizza Slice",
    price: 3.50,
    selected: false,
    quantity: 0
},
{
    id:4,
    name: "Macarroni and Cheese",
    price: 5.00,
    selected: true,
    quantity: 1
},
{
    id:5,
    name: "Pizza",
    price: 20.00,
    selected: false,
    quantity: 0
}
]

export  const CARTS: Cart[] = []
