# Crear un arreglo
elemento = [1,2,3,4,"cinco",6,7,8,9]
# puts elemento

# Devuelve 4
# puts elemento[3]

# Modificar el elemento -> Cambia "cinco" por 5
elemento[4] = 5
# puts elemento

# Metodos de arreglo
elemento.push(10)
# puts elemento

# Eliminar ultimo elemento
elemento.pop()
# puts elemento

# Eliminar primer elemento
elemento.shift()
# puts elemento

# agregar  elemento al principio del arreglo
elemento.unshift(1)
# puts elemento

# obtener la longitud de un arreglo
# puts elemento.length

# Obtener el indice de un elemento
# puts elemento.index(5)

# Preguntar si un elemento está dentro del arreglo
# puts elemento.include?("cinco")

# Ordenar el arreglo
elemento.sort
# puts elemento

# Ordenar el arreglo inverso
elemento.sort!

# Concatenar arreglos
array1 = [1,2,3,4]
array2 = [5,6,7,8]
# concatenacion = array1 + array2
concatenacion = array1.concat(array2)
# puts concatenacion

# Interseccion -> Devuelve un arreglo con los elementos que se encuentran en ambos arreglos
array1 = [1,2,3,4]
array2 = [3,4,5,6]
# interseccion = array1 & array2
interseccion = array1.intersection(array2)
# puts interseccion

# Union -> Elimina los duplicados de un arreglo
union = array1 | array2
union = array1.union(array2)
# puts union

# Diferencia -> Devuelve un arreglo con los elementos que se encuentran en el primer arreglo pero no en el segundo
diferencia = array1 - array2
difrenceia = array1.difference(array2)
# puts diferencia