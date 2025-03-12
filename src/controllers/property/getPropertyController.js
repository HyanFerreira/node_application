export default function getPropertyController(req, res) {
  const { id } = req.params;

  return res.json({
    id: +id,
    addres: "Rua Fernão Dias Paes Leme",
    number: 220,
    city: "Caraguatatuba",
    cep: "11662-010"
  });
}
