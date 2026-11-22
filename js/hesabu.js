export function volume_sphere(r){
    let res = 4/3 * 22/7 * r**3
    return res
}

export function surface_area(r){
    return 4 * 22/7 * r**2
}

export const area_circle = (r) => 22/7 * r**2

// allows to use in another files or module

export function greet() {
    console.log("Hello")
}
