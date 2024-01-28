interface point<type>{
    x : type,
    y : type
} // type can be send here

const Point : point<number> = {
    x: 12,
    y: 14
}

console.log(Point);

interface fa{
    name: string
}

const obj = {
    name: "ap",
    age: 13
}

function logi (a : fa) : void {
    console.log(`${a.name}`);
}

logi(obj); // tho obj is not of type fa but a subset of this is so this could work in a functional call