import Swal from 'sweetalert2';

export const showSuccessAlert = (titleMessage, message) => {
    Swal.fire(
      titleMessage,
      message,
      'success'
    );
};