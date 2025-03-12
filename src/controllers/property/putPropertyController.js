export default function putPropertyController(req, res) {
  return res.json({
    message: "Imóvel editado com sucesso!",
    addres: "Rua Fernão Dias Paes Leme",
    number: 220,
    city: "Caraguatatuba",
    cep: "11662-010"
  });
}
