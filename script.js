function sumar() {
  const numero1 = parseFloat(document.getElementById("num1").value);
  const numero2 = parseFloat(document.getElementById("num2").value);
  
  if (isNaN(numero1) || isNaN(numero2)) {
    document.getElementById("resultado").textContent = "Por favor, ingresa dos números válidos.";
  } else {
    const suma = numero1 + numero2;
    document.getElementById("resultado").textContent = "Resultado: " + suma;
  }
}