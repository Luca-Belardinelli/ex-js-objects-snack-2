// 🎯 Code Question 6 (Bonus)


const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}



// Qual è il metodo migliore per clonare l’oggetto chef, e perché? è spread perchè all interno abbiamo delle funzioni, ma ci sono anche degli oggetti annidati
// correzione dopo video
// tra i metodi visti non c'è n'è uno con cui riusciamo a fare una copia profonda ma  per farlo possiamo fare tanti spread annidati solamente se conosciamo l'oggetto in questione
