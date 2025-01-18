# -------- Rangos de secuencia en ruby -----------------
# rango del 1 al 10
inclusivo = 1..10
puts inclusivo

# rango de 1 al 9
exclusivo = 1...10
puts exclusivo

# ! Convertir a matriz
# Muestra los numeros del 1 al 10
# puts inclusivo.to_a
# Muestra los numeros del 1 al 9
# puts exclusivo.to_a

# Muestra las letras del a al f
letras =("a".."f")
# puts letras.to_a

# Muestra de cab a car 
cadenas = ("cab".."car")
# puts cadenas.to_a

# MUesta la letra a (el valor más minimo)
puts letras.min
puts exclusivo.max

# Ver si incluye -> Devuelve true
puts letras.include?("a")