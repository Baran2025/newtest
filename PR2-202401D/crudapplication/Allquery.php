<?php

include( './connection.php' );

if ( isset( $_REQUEST[ 'savebtn' ] ) )
 {
    $sqlquery = "INSERT INTO `admin`(`Name`, `Email`) VALUES ('".$_REQUEST[ 'stdname' ]."','".$_REQUEST[ 'stdemail' ]."')";
    $result = mysqli_query( $connect,  $sqlquery );
    header( 'location: create.php' );

}

if ( isset( $_REQUEST[ 'btnedit' ] ) ) {

    $stmt = $connect->prepare( 'UPDATE admin SET Name = ?, Email = ? WHERE ID = ?' );
    $stmt->bind_param( 'ssi', $_REQUEST[ 'stdname' ], $_REQUEST[ 'stdemail' ], $_REQUEST[ 'id' ] );
    $stmt->execute();
    header( 'location: show.php' );

}

if ( isset( $_REQUEST[ 'btndelete' ] ) )
 {
    $sqlquery = "DELETE FROM `admin` WHERE ID = ".$_POST[ 'id' ]."";
    $result = mysqli_query( $connect,  $sqlquery );
    header( 'location: show.php' );

}




mysqli_close( $connect );

?>