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
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`score_id`),
  UNIQUE INDEX `score_id_UNIQUE` (`score_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia-game`.`medium_high_score`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`medium_high_score` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`medium_high_score` (
  `score_id` INT NOT NULL AUTO_INCREMENT,
  `initials` VARCHAR(45) NOT NULL,
  `score` INT NOT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`score_id`),
  UNIQUE INDEX `score_id_UNIQUE` (`score_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia-game`.`long_high_score`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`long_high_score` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`long_high_score` (
  `score_id` INT NOT NULL AUTO_INCREMENT,
  `initials` VARCHAR(45) NOT NULL,
  `score` INT NOT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`score_id`),
  UNIQUE INDEX `score_id_UNIQUE` (`score_id` ASC) VISIBLE)
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
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia-game`.`app_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`app_role` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`app_role` (
  `app_role_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`app_role_id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trivia-game`.`app_user_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`app_user_role` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`app_user_role` (
  `app_user_id` INT NOT NULL,
  `app_role_id` INT NOT NULL,
  PRIMARY KEY (`app_user_id`, `app_role_id`),
  INDEX `fk_app_user_role_app_role1_idx` (`app_role_id` ASC) VISIBLE,
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


-- -----------------------------------------------------
-- Table `trivia-game`.`game_storage`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trivia-game`.`game_storage` ;

CREATE TABLE IF NOT EXISTS `trivia-game`.`game_storage` (
  `question_id` INT NOT NULL AUTO_INCREMENT,
  `game_id` INT NOT NULL,
  `correct_answer` VARCHAR(100) NOT NULL,
  `incorrect_answer_1` VARCHAR(100) NOT NULL,
  `incorrect_answer_2` VARCHAR(100) NOT NULL,
  `incorrect_answer_3` VARCHAR(100) NOT NULL,
  `question` VARCHAR(200) NOT NULL,
  `earned_points` INT NOT NULL DEFAULT 0,
  `answered` BIT(1) NOT NULL DEFAULT 0,
  `correct` BIT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`question_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
