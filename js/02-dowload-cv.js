document.addEventListener('DOMContentLoaded', ()=> {
      var cv = document.querySelector('.cv');

      cv.addEventListener('click', function(){
            // Crear un enlace temporal
            const link = document.createElement('a');
            link.href = '../docs/CV-JorgeBernuil.pdf'; // Ruta al archivo
            link.download = 'cv_descargado.pdf'; // Nombre con el que se descargará

            // Agregar el enlace al documento y hacer clic
            document.body.appendChild(link);
            link.click();

            // Eliminar el enlace del documento
            document.body.removeChild(link);
      });
});