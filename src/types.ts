export type Product = {
    id: string,
    name: string,
    group: string,
    msrp: number,
    price: number,
    status: string,
}

export type CartItem = {
    product: Product,
    quantity: number,
}

