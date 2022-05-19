/// set up state 
import { createContext } from "react";


const CartContext = createContext() // tạo context => và nó sẽ tạo ra 1 ojb
// => trong cái ojb này có 2 thằng consumer() và provider (dùng nó để ôm conponent cha)
// + Với Provider nó sẽ có 1 cái props tên là value(nó sẽ nhận cái gì liệu cần truyền)
// --> tênContext.Provider
console.log(CartContext);

export default CartContext;
