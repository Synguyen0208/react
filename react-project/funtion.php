<?php
class connect_database{
    private $database_name;
    private $conn;

    function connect_database($name){
        $this->database_name=$name;
        $this->conn = mysqli_connect("localhost", "root", "", "$this->database_name");
    }

    function getDatabaseName(){
        return $this->database_name;
    }

    function setDatabaseName($name){
        $this->database_name=$name;
    }

    public function execute($sql){
        if (!$this->conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        $result = mysqli_query($this->conn, $sql);
        return $result;
    }
    private function checkError($result){
        if(!$result)
            echo "<script>alert('Thực thi không thành công!')</script>";
        return $result;
    }
    public function insert($state){
        $sql="insert into ".$state;
        
        return $this->checkError($this->execute($sql));
    }
    public function update($state, $id){
        $sql="update ".$state." where id=$id";
        echo $sql;
        $this->checkError($this->execute($sql));
    }
    public function delete($state, $id){
        $sql="delete from  ".$state." where id=$id";
        echo $sql;
        $this->checkError($this->execute($sql));
    }
    public function select($state){
        $sql="select ".$state;
        return $this->execute($sql);
    }
}
 ?>