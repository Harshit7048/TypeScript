//  we will now see the difference btw index.js and index.ts with the same code
// This is a Basic intro project to get us started with  the Typescript

// Currently we will built a pizza resturant app

type Pizza = {
    id: number
    name: string,
    price: number
}
type Order = {
    id: number,
    pizza: Pizza
    status: OrderStatus
}
type OrderStatus = "completed" | "ordered"
let menu: Pizza[] = [
    { id: 1, name: "pepperoni", price: 6 },
    { id: 2, name: "cheese", price: 10 },
    { id: 3, name: "margerita", price: 8 },
    { id: 4, name: "paneer", price: 9 }
]

let orderIdAssigned = 6



let cashInRegister = 100

let orderQueue: Order[] = []

let nextOrderId: number = 1

function addNewPizza(pizzaObj: Pizza): void {
    let id = orderIdAssigned++
    // let newPizza = pizzaObj
    // newPizza.id = id
    menu.push(pizzaObj)
    console.log(menu);

    // I thought of this idead in my own , liek I am making a fucntion for passing id and other items diffrently 
    // but the solution in tutorial is a bit different so let's also look at that and see how that works
}
addNewPizza({id:orderIdAssigned++, name: "cheese bacon", price: 12 })
addNewPizza({id:orderIdAssigned++, name: "cheese bacon chilli", price: 12 })

console.log(completedOrder(1));


function placeOrder(pizzaName: string): Order | undefined {
    let orderedPizza = menu.find((ele) => ele.name == pizzaName)
    if (!orderedPizza) {
        console.error(`${pizzaName} does not exiist`)
        return
    }
    cashInRegister += orderedPizza.price
    let newOrder: Order = {
        pizza: orderedPizza,
        status: "ordered",
        id: nextOrderId++
    }
    orderQueue.push(newOrder)
    console.log(orderQueue);
    return newOrder
}
placeOrder("cheese")
placeOrder("cheese")

function completedOrder(orderId: number): Order | undefined {
    const foundOrder = orderQueue.find(ele => ele.id === orderId)
    if (!foundOrder) {
        console.error("Order not found");
        return
    }
    foundOrder.status = "completed"
    return foundOrder
}



// Above Code is working properly for now , As we had maded it more defined , but we hadn't checked every edge cases , let's see them ahead

////////////////////////////////////////////////////////Here we had added some advance function this below is by ourself
/// Adding another utility function getpizzadetails
//////////Here what we learned is called typeNarrowing

export function getPizzaDetails(identifier: number | string): Pizza | undefined {
    // console.log(typeof identifier);

    if (typeof identifier === "string") {
        if (!menu.find(ele => ele.name.toLowerCase() == identifier.toLowerCase())) return

        return menu.find(ele => ele.name.toLowerCase() == identifier.toLowerCase())
    }
    else if (typeof identifier === "number") {
        console.log(identifier);
        if (!menu.find(ele => ele.id === identifier)) return
        return menu.find(ele => ele.id == identifier

        }
    else {
        throw new TypeError("Identifier can be a string or a number only")
    }
}

getPizzaDetails("cheese")
getPizzaDetails(1)


//////////////One of the important note , While doing typescript , typ to be as explicit as you can , it menas tyr to think in the ways that we might get the error