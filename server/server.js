import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./model/users.js";
import Product from "./model/product.js";

const dbUrl = "mongodb://127.0.0.1:27017/test";

const app = express();

mongoose
  .connect(dbUrl)
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database Error");
    console.log(err);
  });

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("app is working");
});

app.post("/register", async (req, resp) => {
  try {
    const newUser = new User(req.body);
    let result = await newUser.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error);
  }
});

app.post("/login", async (req, resp) => {
  try {
    if (req.body.password && req.body.email) {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        resp.send(user);
      } else {
        resp.send({ result: "No Data Found " });
      }
    } else {
      resp.send({ result: "No Data Found " });
    }
  } catch (error) {
    resp.status(500).send(error);
  }
});

app.post("/add-product", async (req, resp) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error);
  }
});

app.get("/products", async (req, resp) => {
  try {
    const products = await Product.find();
    if (products.length > 0) {
      resp.send(products);
    } else {
      resp.send({ result: "No Product found" });
    }
  } catch (error) {
    resp.status(500).send(error);
  }
});

app.delete("/products/:id", async (req, resp) => {
  try {
    let result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error);
  }
});

app.get("/products/:name", async (req, resp) => {
  try {
    let result = await Product.findOne({ name: req.params.name });
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error);
  }
});

app.put("/products/:id", async (req, resp) => {
  try {
    let result = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error);
  }
});

app.get("/search/:key", async (req, resp) => {
  try {
    let result = await Product.find({
      $or: [
        {
          name: { $regex: req.params.key, $options: "i" },
        },
        {
          company: { $regex: req.params.key, $options: "i" },
        },
        {
          category: { $regex: req.params.key, $options: "i" },
        },
      ],
    });
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error);
  }
});

const port = 8000;

app.listen(port, () => {
  console.log("Server started!");
});
