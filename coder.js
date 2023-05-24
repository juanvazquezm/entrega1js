let razaMascota = prompt("Tenes un gato o un perro?").toLowerCase();
let nombreMascota = prompt(
  "Como se llama tu " + razaMascota + "?"
).toLowerCase();
let pesoMascota = prompt(
  "Cuantos kilogramos pesa " + nombreMascota + "?"
).toLowerCase();
if (razaMascota == "gato" && pesoMascota < "3") {
  alert(nombreMascota + " tiene que comer entre 30g y 40g en el dia");
} else if (razaMascota == "gato" && pesoMascota >= "3" && pesoMascota <= "6") {
  alert(nombreMascota + " tiene que comer entre 40g y 60g en el dia");
} else if (razaMascota == "gato" && pesoMascota > "6") {
  alert(nombreMascota + " tiene que comer entre 60g y 80g en el dia");
} else if (razaMascota == "perro" && pesoMascota < "10") {
  alert(nombreMascota + " tiene que comer entre 50g y 90g en el dia");
} else if (
  razaMascota == "perro" &&
  pesoMascota >= "10" &&
  pesoMascota < "20"
) {
  alert(nombreMascota + " tiene que comer entre 190g y 310g al día");
} else if (
  razaMascota == "perro" &&
  pesoMascota >= "20" &&
  pesoMascota < "40"
) {
  alert(nombreMascota + " tiene que comer entre 500g o 600g al día");
} else if (razaMascota == "perro" && pesoMascota >= "40") {
  alert(nombreMascota + " tiene que comer entre 600g y 800g en el dia");
} else {
  alert("Ups, no se pudo calcular\n Volve a intentarlo por favor");
}
