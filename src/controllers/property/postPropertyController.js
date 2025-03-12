export default function postPropertyController(req, res) {
  const property = req.body;

  return res.json({
    message: "Imóvel criado com sucesso!",
    property: property
  });
}
