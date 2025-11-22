let myName: "hello mike" = "hello mike"
const myName2: "hello2" = "hello2"


type UserRole = "admin" | "member" | "guest"
//This is a union , like I can assingn what kind of values my varibale can have , in the above case I had defined that my UserRole cna only be three strings that I had defined
const newUser: UserRole = "guest"

type User = {
    id: number,
    username: string
    role: UserRole
}

let users = [
    { id: 1, username: "james brown", role: "admin" },
    { id: 2, username: "james brown", role: "admin" },
    { id: 3, username: "james brown", role: "admin" },
    { id: 4, username: "james brown", role: "admin" }
]

function updateUser(id: any, updates: any) {
    let userFound = users.find(user => user.id === id)

    if (!userFound) return

    else {
        Object.assign(userFound, updates)
    }

    return userFound

    // We cant pass the return type here as User ,as we don't lnow what is gonna be updated and which thing is getting passed

}
updateUser(2, { username: "new_john_doe" })
console.log(users);