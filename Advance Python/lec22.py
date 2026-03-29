# Constructor in Inheritance

class Father:
    def __init__(self,m):
        self.money=1000
        print("Father Class Constructor")
        
    def show(self):
         print("Father Class Instance Method")
         
         
class Son(Father):
    def disp(self):
        print("Son Class Instance Method",self.money+1000)
        
s = Son(1000)
print(s.money)
s.show()
s.disp()   

