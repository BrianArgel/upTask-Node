import axios from 'axios'
import Swal from 'sweetalert2'
import {actualizarAvance} from '../funciones/avance';



const tareas = document.querySelector('.listado-pendientes');

if(tareas) {

    tareas.addEventListener('click', e => {
        if(e.target.classList.contains('fa-check-circle')){
            const icono = e.target;
            const idTarea = icono.parentElement.parentElement.dataset.tarea;

            // request hacia /tareas/:id
            const url = `${location.origin}/tareas/${idTarea}`;
            
            axios.patch(url, { idTarea })
                .then(function(respuesta){
                    if(respuesta.status === 200){
                        icono.classList.toggle('completooo')
                        actualizarAvance()
                    }
                })
        }

        if(e.target.classList.contains('fa-trash')){
            // console.log("probando....")
            const tareaHTML = e.target.parentElement.parentElement,
                  idTarea= tareaHTML.dataset.tarea;
            // console.log(tareaHTML, idTarea)
            Swal.fire({
                title: 'Deseas eliminar esta tarea?',
                text: "una tarea eliminado no se puede recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Borrar',
                cancelButtonText: "No, cancelar"
              }).then((result) => {
                if (result.value) {
                    // console.log('eliminado...')
                    const url = `${location.origin}/tareas/${idTarea}`;
                    //enviar el delete por medio de exios

                    axios.delete(url, {params: { idTarea}})
                        .then(function (respuesta) {
                            // console.log(respuesta)
                            if(respuesta.status === 200) {
                                //eliminar nodo
                                tareaHTML.parentElement.removeChild(tareaHTML);

                                //opcional alerta
                                Swal.fire (
                                    'Tarea Eliminada',
                                    respuesta.data,
                                    'success'
                                )
                                actualizarAvance()

                                
                            }
                        })
                    }
                })
    

        }
    });

}

export default tareas