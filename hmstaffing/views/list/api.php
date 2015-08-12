<?php
    //connect
    mysql_connect("mysql18.ezhostingserver.com", "hagan", "P@ssW0rd") or die(mysql_error());
    mysql_select_db("employee") or die(mysql_error());

    //call
    if(function_exists($_GET['method'])) {
        echo $_GET['method'];
        if($_GET['method'] = 'getAllEmployees'){
            if(isset($_GET['end'])) {
                $end = $_GET['end'];      
            }
            getAllEmployees($end);
        }
        if($_GET['method'] = 'deleteEmployee'){
            if(isset($_GET['id'])) {
                $id = $_GET['id'];      
            }
            deleteEmployee($id);
        }
    }

    //methods
    function getAllEmployees($end) {
        $query = "select * from employees WHERE isDeleted = `0` LIMIT " . $end ;
        $employee_sql = mysql_query($query);
        $employees = array();
        while($employee = mysql_fetch_assoc($employee_sql)) {
            $employees[] = $employee;
        }
        $employees = json_encode($employees);
        echo $_GET['jsoncallback'] . '(' . $employees . ')';
    }

    function deleteEmployee($id) {
        $query = "update employees set isDeleted = 1 where id = " . $id ;
        $employee_sql = mysql_query($query);
        $employees = array();
        while($employee = mysql_fetch_assoc($employee_sql)) {
            $employees[] = $employee;
        }
        $employees = json_encode($employees);
        echo $_GET['jsoncallback'] . '(' . $employees . ')';
    }
?>