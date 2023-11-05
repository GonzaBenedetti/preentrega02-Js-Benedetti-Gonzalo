let lista = [];

function Quehacer(titulo, fecha, descripcion) {
    this.titulo = titulo;
    this.fecha = fecha;
    this.descripcion = descripcion;
}

const crearQuehacer = () => {
    let y = prompt(`Ingrese el titulo del quehacer:`);
    while(y === ''){
        alert(`Debe ingresar un valor. Vuelva a intenerlo`);        
        y = prompt(`Ingrese el titulo del quehacer:`);
    }
    
    let x = prompt(`Ingrese la fecha:`);
    while(x === ''){
        alert(`Debe ingresar un valor. Vuelva a intenerlo`);
        x = prompt(`Ingrese la fecha:`);
    }
    
    let z = prompt(`Ingrese la descripcion del quehacer:`);
    while(z === ''){
        alert(`Debe ingresar un valor. Vuelva a intenerlo`);
        z = prompt(`Ingrese la descripcion del quehacer:`);
    }
    

    let nuevoQuehacer = new Quehacer(y, x, z);
    lista.push(nuevoQuehacer);
}

const eliminarQuehacer = () => {
    if (lista.length === 0) {
        alert(`No hay ninguna tarea guardada. Comience a crear sus listas de tareas ahora mismo.`)
    }else {
        let index = Number(prompt(`Seleccione el indice a eliminar`)) - 1;
    
        if (index >= 0 && index < lista.length) {
            let eliminar = lista.splice(index, 1);
            alert(`La tarea ${eliminar[0].titulo} ha sido eliminada.`);
        } else {
            alert(`El indice no es valido. Vuelve a intentar.`);
        }
    }
}

const mostrarQuehaceres = () => {
    if (lista.length > 0) {
        for (let index = 0; index < lista.length; index += 1) {
            alert(`
                ${index + 1} - TITULO: ${lista[index].titulo}           FECHA: ${lista[index].fecha}
                Descripcion: 
                ${lista[index].descripcion}
            `);
        }
    } else {
        alert(`No hay ninguna tarea guardada. Comience a crear sus listas de tareas ahora mismo.`);
    }
}

const seleccionarOpcion = () => {
    opc = Number(prompt(`Ingrese la opcion numerica:
    1 - Mostrar lista.
    2 - Agregar quehacer.
    3 - Eliminar quehacer.
    4 - Salir.`));
}

const ejecutarPrograma = () => {
    seleccionarOpcion();
    while (opc != 4) {
        switch (opc) {
            case 1:
                mostrarQuehaceres();
                break;
            case 2:
                crearQuehacer();
                break;
            case 3:
                eliminarQuehacer();
                break;
            default:
                alert(`La opcion ingresada no es valida. Vuelva a intentarlo.`);
                break;
        }
        seleccionarOpcion();
    }
}
ejecutarPrograma();