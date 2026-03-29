#Multilevel Inheritance

class Father:
      def showF(self):
          print("Father Class Method")
          
          
class Son(Father):
      def showS(self):
          print("Son Class Method")
          
class Grandson(Son):
      def showG(self):
		  
          print("Grandson Class Method")    
              
g = Grandson()
g.showG()
g.showF()
g.showS()

