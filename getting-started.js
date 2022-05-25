const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb://root:secret@localhost:27017/mongoose-getting-started?authSource=admin"
  );

  const kittySchema = new mongoose.Schema({
    name: String,
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  const Kitten = mongoose.model("Kitten", kittySchema);

  const kittens = await Kitten.find();
  console.log(kittens);

  //   const silence = new Kitten({ name: "Silence" });
  //   console.log(silence.name); // 'Silence'

  //   const fluffy = new Kitten({ name: "fluffy" });
  //   fluffy.speak(); // "Meow name is fluffy"

  //   await silence.save();
  //   await fluffy.save();

  //   return;
}
