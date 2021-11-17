// Esta funcion recibe como entrada, 3 parametros, los cuales son:
// Lo que pintara el input label, El error del color, y la clase para la animacion
export async function errorHandler(
  labelInput: String,
  colorError: String,
  classInput: String
) {
  labelInput = "Invalid pokemon Name";
  colorError = "border : 2px solid red";
  classInput = "form-control animate__animated animate__shakeX";
  setTimeout(() => {
    labelInput = "Search here!";
    colorError = "";
    classInput = "form-control";
  }, 3000);
}
