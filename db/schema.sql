-- Drops the burgers_db if it already exits --
drop database if exists burgers_db;

-- Create a database-called burgers_db --
create database burgers_db;

-- Use burgers_db for the following statements --
use burgers_db;

create table burgers (
	-- Create a numeric column called id --
    id integer auto_increment,
    -- Create a string for burger name --
    burger_name varchar(30),
    -- Create a boolean for devoured --
    devoured boolean not null,
    -- set the primary key --
    primary key (id)
);


