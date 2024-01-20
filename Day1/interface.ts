interface userInterface {
    name: string,
    id: number
}

// userInterface has to be followed otherwise this will have error
// Types by reference also works here
const user : userInterface = {
    name: "manoj",
    id: 98,
}

class User {
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}

const user2 : userInterface = new User("manoj1",45);

console.log(user2);
