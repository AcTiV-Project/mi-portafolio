document.addEventListener('DOMContentLoaded', ()=>{
      var certificado = document.querySelector('.certificado');

      certificado.addEventListener('click', () => {
            // Crear un enlace temporal
            const link = document.createElement('a');
            link.href = '../docs/Certificado Python.jpg'; // Ruta al archivo
            link.download = 'certificado_descargado.jpg'; // Nombre con el que se descargará

            // Agregar el enlace al documento y hacer clic
            document.body.appendChild(link);
            link.click();

            // Eliminar el enlace del documento
            document.body.removeChild(link);
      });
})