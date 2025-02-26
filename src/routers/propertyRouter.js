import express from "express";

const router = express.Router();

const property = {
    addres: "Rua Fernão Dias Paes Leme",
    number: "220",
    city: "Caraguatatuba",
    cep: "11662-010"
}

router.get("/", (req, res) => {
    res.json({
      property
    });
  });
  
  router.post("/", (req, res) => {
    res.json({
      message: "Imóvel criado com sucesso!",
      property
    });
  });
  
  router.put("/", (req, res) => {
    res.json({
      message: "Imóvel editado com sucesso!",
      property
    });
  });
  
  router.patch("/", (req, res) => {
    res.json({
      message: "Endereço editado com sucesso!",
      property: property.addres = "Rua Fernão Dias Paes Leme, 220"
    });
  });
  
  router.delete("/", (req, res) => {
    res.json({
      message: "Imóvel deletado com sucesso!"
    });
  });

export default router;