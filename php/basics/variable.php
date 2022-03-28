<?php

/* Creating variables */
/* Str */
$name = 'John';
/* int */
$age = 25;
/* boolean */
$is_married = false;
/* Statement */
echo $name . ' is ' . $age . ' years old.';
/* float */
$weight = 65.5;
/* array */
$array = array(
    'name' => 'John',
    'age' => 25,
    'is_married' => false,
    'weight' => 65.5
);
/* object */    
class User {
    public $name;
    public $age;
    public $is_married;
    public $weight;
}
echo gettype($array);
