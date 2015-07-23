package controllers;

import models.AuxStep;
import models.Recipe;
import models.Step;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;

/**
 * Created by Shary on 09/07/2015.
 */
public class InstruccionController extends Controller {

    public Result createStep() {
        AuxStep auxStep = Json.fromJson(request().body().asJson(), AuxStep.class);
        Recipe recipeStep = Recipe.find.where()
                .eq("id", auxStep.getIdRecipeStep())
                .findUnique();
        System.out.println("AQUI AUX " + auxStep.getPaso() + " " + auxStep.getIdRecipeStep() + " RECIPE " + recipeStep.getId());

        Step step = new Step();
        if (recipeStep == null) {
            return notFound();
        } else {
            step.setPaso(auxStep.getPaso());
            step.setPaso_descripcion(auxStep.getPaso_descripcion());
            step.setIdRecipe_step(auxStep.getIdRecipe_step());
            step.setId_step_recipe(recipeStep);
            step.save();
            return ok(Json.toJson(step));
        }
    }

    public Result getAllStep() {
        List<Step> steps = Step.find.all();
        return ok(Json.toJson(steps));
    }
}
