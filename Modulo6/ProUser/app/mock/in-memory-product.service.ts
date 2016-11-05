import {InMemoryDbService} from "angular2-in-memory-web-api";

export class InMemoryProductService implements InMemoryDbService {
    createDb() {
        let products = [
            {
                id: 1,
                name: "Samsung galaxy 8",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            },
            {
                id: 2,
                name: "Samsung galaxy 10",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            },
            {
                id: 3,
                name: "Samsung galaxy 20",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            }
        ];

        let users = [
            {
                id: 1,
                email: "admin@admin.co",
                password: "1234",
                firstname: "Alexander",
                lastname: "Ospina",
                phone: "21345546"
    
            },
            {
                id: 2,
                email: "admin2@admin.co",
                password: "5678",
                firstname: "Cristian",
                lastname: "Sosa",
                phone: "7589647"
    
            },
            {
                id: 3,
                email: "admin3@admin.co",
                password: "9012",
                firstname: "Richard",
                lastname: "Rincon",
                phone: "8695742"
    
            },
        ];

        return {products, users};
  }
}