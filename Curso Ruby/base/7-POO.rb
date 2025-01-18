# Ejemplo
# class Banco 
#     def initialize()
#     end

#     def test
#         puts "Hola desde la clase"
#     end 
# end 

# banco_ameria = Banco.new()
# banco_santander = Banco.new()

# banco_ameria.test()
# banco_santander.test()


# Creando la Clase 
class Persona 
    # Atributo de clase -> Pertenecen a la clase Persona
    @@contador = 0

    def initialize(nombre, edad)
        # Atributo de instancia -> Valor diferente por cada persona
        @nombre = nombre
        @edad = edad
        @@contador += 1
    end 

    def self.totalPersonas 
        @@contador
    end 

    def mostrarDatos
        puts "#{@nombre}" + " #{@edad}"
    end 
end

persona1 = Persona.new("Juan", 20)
persona2 = Persona.new("Maria", 30)

persona1.mostrarDatos()
persona2.mostrarDatos()
puts Persona.totalPersonas()
