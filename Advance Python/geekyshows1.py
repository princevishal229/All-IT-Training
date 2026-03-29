# Example3

class Mobile:
    def __init__(self,m):
        self.model = m

    def show_model(self, p):
        self.price = p
        print("Model:",self.model, "Price:", self.price)
        
realme = Mobile('RealMe X')
realme.show_model(1000)
print(id(realme))
print()

	
   

