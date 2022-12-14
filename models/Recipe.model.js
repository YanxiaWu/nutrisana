const { Schema, model, Types } = require("mongoose");

const recipeSchema = new Schema(
    {
        ingredients: [{ type: String }],
        calories: { type: String },
        carbohydrate: { type: String },
        fat: { type: String },
        protein: { type: String },
        owner: {
            type: Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);


const Recipe = model("Recipe ", recipeSchema);

module.exports = Recipe;

//cuando el usuario rellena el formulario, el usuario siempre pone un number de quantity,
// pero el API necesita un string,
// Así lo pide la API => {"ingr": ["10 g oil"] }