import express from "express";

const router = express.Router();

const user = {
  name: "Hyan Ferreira",
  email: "hyanferreira.dev@gmail.com",
  avatar: "http://github.com/hyanferreira.png"
};

router.get("/", (req, res) => {
  res.json({
    user
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "Usuário criado com sucesso!",
    user
  });
});

router.put("/", (req, res) => {
  res.json({
    message: "Usuário editado com sucesso!",
    user
  });
});

router.patch("/", (req, res) => {
  res.json({
    message: "Avatar editado com sucesso!",
    user: user.avatar = "http://github.com/lastfenrreira.png"
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "Usuário deletado com sucesso!"
  });
});

export default router;
