package controllers;

import models.Recipe;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import java.util.List;

/**
 * Created by Shary on 09/07/2015.
 */
public class RecipeController extends Controller {

    public Result createRecipe() {
        Recipe recipe = Json.fromJson(request().body().asJson(), Recipe.class);
        recipe.save();
        return ok(Json.toJson(recipe));
    }

    public Result getAllRecipe() {
        List<Recipe> recetas = Recipe.find.all();
        return ok(Json.toJson(recetas));
    }

    public Result getOneRecipe(Integer id) {
        Recipe recipe = Recipe.find.byId(id);
        if (recipe == null) {
            return notFound();
        } else
            return ok(Json.toJson(recipe));
    }

    public Result deleteRecipe(Integer id) {
        Recipe recipe = null;
        if (Recipe.find.byId(id) != null) {
            Recipe.find.deleteById(id);
            return ok();
        } else {
            return notFound();
        }
    }

}
