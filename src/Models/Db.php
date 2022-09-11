<?php

namespace Laura\P5\Models;

class Db {

    protected $db;

    public function __construct(){
        try{
            $this->db = new \PDO('mysql:dbname=pixy;host=127.0.0.1', 'root', '');
        } catch(\PDOException $e){
            var_dump('Erreur de connexion à la base de données'); // Traitement de l'exception pour éviter d'afficher trop de détails
            die();
        } 
        
    }


}