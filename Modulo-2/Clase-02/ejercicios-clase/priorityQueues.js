// En un sistema de gestión de tareas o trabajos, se podría utilizar una cola de prioridad para procesar primero las tareas más urgentes o importantes.

class ColaDePrioridad {
  constructor() {
    this.items = [];
  }

  agregar(item, prioridad) {
    this.items.push({ item, prioridad });
    this.items.sort((a, b) => b.prioridad - a.prioridad);  // Ordena por prioridad
  }

  extraer() {
    return this.items.shift();  // Extrae el primer elemento (el de mayor prioridad)
  }
}

let cola = new ColaDePrioridad();
cola.agregar("Tarea urgente", 1);
cola.agregar("Tarea normal", 3);
console.log(cola.extraer());  // Imprime { item: "Tarea normal", prioridad: 3 }