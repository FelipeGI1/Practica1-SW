import Swal from 'sweetalert2';

export const showSuccessAlert = (titleMessage, message) => {
    Swal.fire(
      titleMessage,
      message,
      'success'
    );
};

export const showLoadingAlert = () => {
  Swal.fire({
      title: 'Esperando predicción',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
          Swal.showLoading();
      }
  });
};