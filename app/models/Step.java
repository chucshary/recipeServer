package models;

import com.avaje.ebean.Model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by Shary on 07/07/2015.
 */
@Entity
public class Step extends Model {
    @Id
    private Integer id;
    private Integer paso;
	@Column(length=1000)
    private String paso_descripcion;
    private Integer idRecipe_step;
    @JsonIgnore
    @ManyToOne
    private Recipe id_step_recipe;

    public static Finder<Integer, Step> find =
            new Finder(Step.class);

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPaso() {
        return paso;
    }

    public void setPaso(Integer paso) {
        this.paso = paso;
    }

    public String getPaso_descripcion() {
        return paso_descripcion;
    }

    public void setPaso_descripcion(String paso_descripcion) {
        this.paso_descripcion = paso_descripcion;
    }

    public Integer getIdRecipe_step() {
        return idRecipe_step;
    }

    public void setIdRecipe_step(Integer idRecipe_step) {
        this.idRecipe_step = idRecipe_step;
    }

    public Recipe getId_step_recipe() {
        return id_step_recipe;
    }

    public void setId_step_recipe(Recipe id_step_recipe) {
        this.id_step_recipe = id_step_recipe;
    }
}
