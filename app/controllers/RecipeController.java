package controllers;

import models.Recipe;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.List;

/**
 * Created by Shary on 09/07/2015.
 */
public class RecipeController extends Controller {

    public Result createRecipe() {
        Recipe recipe = Json.fromJson(request().body().asJson(), Recipe.class);
        String base64 = recipe.getBase64();
        byte[] bytes = Base64.getDecoder().decode(base64);
        System.out.println("IMAGEN DECODER " + bytes);
        String filename = recipe.getNombreimagen();

        InputStream in = new ByteArrayInputStream(bytes);
        BufferedImage bImageFromConvert = null;
        try {
            bImageFromConvert = ImageIO.read(in);
        } catch (IOException e) {
            e.printStackTrace();
        }
        File outputFile = new File("public/images/" + filename);
        try {
            ImageIO.write(bImageFromConvert, "jpg", outputFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String url = "/assets/images/" + recipe.getNombreimagen();
        recipe.setUrl(url);
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
