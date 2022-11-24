const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema(
    {
        name: {
            type: String,
        },



    },
    {
        timestamps: true,
    }
);

const Ingredient = model("Ingredient", ingredientSchema);

module.exports = Ingredient;