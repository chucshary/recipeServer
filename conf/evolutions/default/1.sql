# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table ingredients (
  id                        integer auto_increment not null,
  nombre                    varchar(255),
  cantidad                  varchar(255),
  clasificacion             varchar(255),
  id_recipe_ingredient      integer,
  recipe_id                 integer,
  constraint pk_ingredients primary key (id))
;

create table recipe (
  id                        integer auto_increment not null,
  nombre                    varchar(255),
  tipo                      varchar(255),
  categoria                 varchar(255),
  duracion                  varchar(255),
  porcion                   integer,
  nombreimagen              varchar(255),
  base64                    TEXT,
  url                       varchar(255),
  constraint pk_recipe primary key (id))
;

create table step (
  id                        integer auto_increment not null,
  paso                      integer,
  paso_descripcion          varchar(1000),
  id_recipe_step            integer,
  id_step_recipe_id         integer,
  constraint pk_step primary key (id))
;

alter table ingredients add constraint fk_ingredients_recipe_1 foreign key (recipe_id) references recipe (id) on delete restrict on update restrict;
create index ix_ingredients_recipe_1 on ingredients (recipe_id);
alter table step add constraint fk_step_id_step_recipe_2 foreign key (id_step_recipe_id) references recipe (id) on delete restrict on update restrict;
create index ix_step_id_step_recipe_2 on step (id_step_recipe_id);



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table ingredients;

drop table recipe;

drop table step;

SET FOREIGN_KEY_CHECKS=1;

