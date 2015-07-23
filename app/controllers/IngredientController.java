package controllers;

import models.Ingredients;
import models.NameReceta;
import models.Recipe;
import play.mvc.Controller;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;

/**
 * Created by Shary on 09/07/2015.
 */
public class IngredientController extends Controller {

    public Result createIngredient() {
        NameReceta nameReceta = Json.fromJson(request().body().asJson(), NameReceta.class);
        Recipe recipe = Recipe.find.where()
                .eq("id", nameReceta.getIdRecipe())
                .findUnique();
        System.out.println("AQUI AUX " + nameReceta.getNombre() + " " + nameReceta.getIdRecipe() + " RECIPE " + recipe.getId());

        Ingredients ingredients = new Ingredients();
        if (recipe == null) {
            return notFound();
        } else {
            ingredients.setNombre(nameReceta.getNombre());
            ingredients.setClasificacion(nameReceta.getClasificacion());
            ingredients.setCantidad(nameReceta.getCantidad());
            ingredients.setIdRecipeIngredient(nameReceta.getIdRecipeIngredient());
            ingredients.setRecipe(recipe);
            ingredients.save();
            return ok(Json.toJson(ingredients));
        }
    }

    public Result getAllIngredient() {
        List<Ingredients> ingredientses = Ingredients.find.all();
        return ok(Json.toJson(ingredientses));
    }
}
