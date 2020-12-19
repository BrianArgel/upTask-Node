import Swal from 'sweetalert2';
import axios from 'axios'

const btnEliminar = document.querySelector('#eliminar-proyecto');

if(btnEliminar) {
    btnEliminar.addEventListener("click", (e) => {
        const urlProyecto = e.target.dataset.proyectoUrl;
        //console.log(urlProyecto)
        Swal.fire({
            title: 'Deseas eliminar este proyecto?',
            text: "un poryecto eliminado no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar',
            cancelButtonText: "No, cancelar"
          }).then((result) => {
            if (result.isConfirmed) {

                //enviar peticion a axios
                const url = `${location.origin}/proyectos/${urlProyecto}`
               

                
                //enviar peticion eliminar
                axios.delete(url, {params: {urlProyecto}})
                    .then(function(respuesta) {
                        Swal.fire(
                            'Proyecto eliminado!',
                            'Proyecto se ha eliminado.',
                            'success'
                          );
                           
                          //redireccionar al inicio
                          setTimeout(() => {
                            window.location.href= '/'
                          }, 3000);
                          console.log(respuesta)
                    })
                    
                    .catch(() => {
                        Swal.fire({
                            type: 'Error',
                            title: 'Hubo un error',
                            text: "No se pudo eliminar el proyecto"
                        })
                    })
             
            }
          })
    })
}

export default btnEliminar;