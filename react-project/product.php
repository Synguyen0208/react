<?php
include "funtion.php";

if($_SERVER["REQUEST_METHOD"]=="GET"){
$conn=new connect_database("php_project");
$sql="pro.id, pro.name,quantity, price, sell_price, title,status,ED, MFG, image, mass, industry, com.name as company FROM ((product pro INNER JOIN product_industry ind ON pro.industry_id=ind.id) INNER JOIN company com on pro.id_com=com.id)";
$result=$conn->select($sql);
// $count=mysqli_fetch_assoc($result);
$arr=array();
while ($row = mysqli_fetch_array($result)) {
    $arr[]=$row;
}
echo json_encode($arr);
}

?>