-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trivia-game
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema trivia-game
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trivia-game` DEFAULT CHARACTER SET utf8 ;
USE `trivia-game` ;

-- -----------------------------------------------------
-- Table `trivia-game`.`short_high_score`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`short_high_score` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`short_high_score` (
  `score_id` INT NOT NULL AUTO_INCREMENT,
  `initials` VARCHAR(45) NOT NULL,
  `score` INT NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`score_id`),
  UNIQUE INDEX `score_id_UNIQUE` (`score_id` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia-game`.`medium_high_score`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`medium_high_score` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`medium_high_score` (
  `score_id` INT NOT NULL AUTO_INCREMENT,
  `initials` VARCHAR(45) NOT NULL,
  `score` INT NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`score_id`),
  UNIQUE INDEX `score_id_UNIQUE` (`score_id` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia-game`.`long_high_score`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`long_high_score` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`long_high_score` (
  `score_id` INT NOT NULL AUTO_INCREMENT,
  `initials` VARCHAR(45) NOT NULL,
  `score` INT NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`score_id`),
  UNIQUE INDEX `score_id_UNIQUE` (`score_id` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia-game`.`app_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`app_user` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`app_user` (
  `app_user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `password_hash` VARCHAR(2048) NOT NULL,
  `disabled` BIT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`app_user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia-game`.`app_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`app_role` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`app_role` (
  `app_role_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`app_role_id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia-game`.`app_user_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`app_user_role` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`app_user_role` (
  `app_user_id` INT NOT NULL,
  `app_role_id` INT NOT NULL,
  PRIMARY KEY (`app_user_id`, `app_role_id`),
  INDEX `fk_app_user_role_app_role1_idx` (`app_role_id` ASC) ,
  CONSTRAINT `fk_app_user_role_app_user`
    FOREIGN KEY (`app_user_id`)
    REFERENCES `trivia-game`.`app_user` (`app_user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_app_user_role_app_role1`
    FOREIGN KEY (`app_role_id`)
    REFERENCES `trivia-game`.`app_role` (`app_role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

delimiter //
create procedure get_known_good_state()
begin

	delete from short_high_score;
    alter table short_high_score auto_increment = 1;
    delete from medium_high_score;
    alter table medium_high_score auto_increment = 1;
    delete from long_high_score;
    alter table long_high_score auto_increment = 1;

    insert into short_high_score(initials, score, `date`) values
        ("BJS", "499", now()),
        ("2FH", "250", now()),
        ("2FH", "500", now());

	insert into medium_high_score(initials, score, `date`) values
        ("BJS", "899", now()),
        ("2FH", "750", now()),
        ("2FH", "1200", now());
        
	insert into long_high_score(initials, score, `date`) values
        ("BJS", "2499", now()),
        ("2FH", "2250", now()),
        ("2FH", "2500", now());

end //
-- 4. Change the statement terminator back to the original.
delimiter ;

insert into app_role (`name`) values
    ('USER'),
    ('ADMIN');

-- passwords are set to "P@ssw0rd!"
insert into app_user (username, password_hash, disabled)
    values
    ('john@smith.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0),
    ('sally@jones.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0),
    ('srbachwich', '$2a$10$zfA/Z60nPEY52a6VS8Q1/eWyvT6B2RwNimgVqhyGus0AgsWTkU6PW', 0);

insert into app_user_role
    values
    (1, 2),
    (2, 1),
    (3, 1);

