// This is a Basic intro project to get us started with  the Typescript

// Currently we will built a pizza resturant app

const menu = [
    { name: "margerita", price: 8 },
    { name: "pepperoni", price: 6 },
    { name: "cheese", price: 10 },
    { name: "paneer", price: 9 }
]

const cashInRegister = 100

const orderQueue = []

let nextOrderId = 1

const addNewPizza = (pizzaObj) => {

    menu.push(pizzaObj)
    console.log(menu);
}

function placeOrder(name) {
    let orderedPizza = menu.find((ele) => ele.name == name)
    cashInRegister += orderedPizza.price
    let newOrder = {
        pizza: orderedPizza,
        status: "ordered",
        orderId: nextOrderId++
    }
    orderQueue.push(newOrder)
    console.log(orderQueue);
    return newOrder
}
placeOrder("cheese")
placeOrder("cheese")

function completedOrder(orderId) {
    const foundOrder = orderQueue.find(ele => ele.orderId === orderId)
    foundOrder.status = "completed"
    return foundOrder
}
console.log(completedOrder("1"));

