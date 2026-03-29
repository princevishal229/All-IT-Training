# Class Variable - Namespace

class Mobile:

    fp = 'Yes'
        
    @classmethod
    def is_fp(cls):
        print("FingerPrint:", cls.fp)
            
realme = Mobile()
redmi = Mobile()
geek = Mobile()

print("Class FP:" , Mobile.fp)
print("RealMe:" , realme.fp)
print("Redmi:" , redmi.fp)
print("Geek:" , geek.fp)

print()



