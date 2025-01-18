# Sintaxis  de un metodo
# def nombre_metodo(arg1, arg2, arg3)
#     ...codigo a ejecutar...
#     return valor_retorno
# end

# funcion
def suma(a, b)
    return a + b
end 
puts suma(1, 2)

# cantidad de argumentos indefinidos
def numeroArgumentos(*args)
    args.each {|string| puts string }
end
numeroArgumentos("rojo")
numeroArgumentos("rojo", "verde", "rosado")

