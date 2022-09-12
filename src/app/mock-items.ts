import { Cart } from "./model/Cart"
import { Item } from "./model/Item"

export const ITEMS: Item[] = [
{
    id:1,
    name: "Hamburger",
    description:"buns and meat",
    price: 12.50,
    selected: false,
    quantity: 0
},
{
    id:2,
    name: "Hot Dog",
    description:" long meat in buns",
    price: 8.50,
    selected: true,
    quantity: 1
},
{
    id:3,
    name: "Pizza Slice",
    description:"cheese on bread",
    price: 3.50,
    selected: false,
    quantity: 0
},
{
    id:4,
    name: "Macarroni and Cheese",
    description:"cheese on pasta",
    price: 5.00,
    selected: true,
    quantity: 1
},
{
    id:5,
    name: "Pizza",
    description:"cheese on big bread",
    price: 20.00,
    selected: false,
    quantity: 0
}
]

export  const CARTS: Cart[] = []
