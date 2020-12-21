export const  actualizarAvance = () => {
    //selecionar tareas existentes

    const tareas = document.querySelectorAll('li.tarea');
    if(tareas.length) {
        //seleccionar tareas completadas
        const tareasCompletas = document.querySelectorAll('i.completo');

        //calcular avance
        const avance = (tareasCompletas.length / tareas.length) * 100

        //mostrar el avance
        const porcentaje = document.querySelector('#porcentaje');
        porcentaje.style.width = avance+'%'
    }
}