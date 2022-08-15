// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface Employee {
    name: string;
    code: number;
}

let employee: Employee = {
    code: 10,
    name: "John"
};

console.log(employee);
