class Animal 
    def ruido(sonido) 
        puts "Hace ruido #{sonido}"
    end 
end 

# Herencia
class Gato < Animal 
end 

class Gayo < Animal 
end 

misifus = Gato.new()
misifus.ruido("Miau")

claudio = Gayo.new()
claudio.ruido("kikiriki")