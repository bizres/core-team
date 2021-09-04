def rauchberechnung(alter,name):
    if alter < 16:
        print(name, "Sollte nicht rauchen")
    elif alter >= 16:
        print("Ok,",name,"viel Spass bim rauche!")
    else:
        print("rauchen ist schlecht")
name = input("Dein name?")
alter = int(input("Dein alter?"))
rauchberechnung(alter,name)