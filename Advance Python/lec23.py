#Connstructor with super method

class Father:
    def __init__(self):
        self.money = 1000
        print("Father Class Connstructor")
        
    def show(self):
        print("Father Class Instance Method")
        
        
class Son(Father):
    def __init__(self):
        super().__init__()
        print("Son Class Constructor")
        
    def disp(self):
        print("Son Class Instance Method",self.money)
        
s = Son()
s.disp()    
    
        
        