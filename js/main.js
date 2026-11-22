import {area_circle, volume_sphere, greet as salamu} from "./hesabu.js"
import greet, {sum} from "./example.js";

import * as calc from "./hesabu.js"
let area = area_circle(7)

console.log(`Area of circle is ${area} and volume of sphere is ${volume_sphere(7)}`)

greet()
salamu()
calc.surface_area()

sum(5,8)