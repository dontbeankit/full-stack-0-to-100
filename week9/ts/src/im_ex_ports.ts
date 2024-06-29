export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

//if we do 
//export default add;
//while importing, we can name it anything and add will be exported as the name
//ex: import ankit from "filename" will impport add as ankit.