<?php include 'db.php';

if(isset($_POST['insert']))
{

$name = $_POST['name'];
$source = $_POST['source'];
$destination = $_POST['destination'];
$journey = $_POST['journey_date'];
$departure = $_POST['departure_date'];
$arrival = $_POST['arrival_date'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$sql = "INSERT INTO passengers VALUES
(NULL,'$name','$source','$destination','$journey','$departure','$arrival','$phone','$email')";

if($conn->query($sql))
echo "Inserted Successfully";
else
echo "Error";

}

if(isset($_POST['delete']))
{

$phone = $_POST['phone'];

$sql = "DELETE FROM passengers WHERE phone='$phone'";

$conn->query($sql);

echo "Deleted Successfully";

}

if(isset($_POST['update']))
{

$name = $_POST['name'];
$source = $_POST['source'];
$destination = $_POST['destination'];
$journey = $_POST['journey_date'];
$departure = $_POST['departure_date'];
$arrival = $_POST['arrival_date'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$sql = "UPDATE passengers SET

name='$name',
source='$source',
destination='$destination',
journey_date='$journey',
departure_date='$departure',
arrival_date='$arrival',
email='$email'

WHERE phone='$phone'";

$conn->query($sql);

echo "Updated Successfully";

}

if(isset($_POST['search']))
{

$phone = $_POST['phone'];

$sql = "SELECT * FROM passengers WHERE phone='$phone'";

$result = $conn->query($sql);

echo "<table border=1>";

echo "<tr>

<th>Name</th>
<th>From</th>
<th>To</th>
<th>Phone</th>
<th>Email</th>

</tr>";

while($row=$result->fetch_assoc())
{

echo "<tr>";

echo "<td>".$row['name']."</td>";
echo "<td>".$row['source']."</td>";
echo "<td>".$row['destination']."</td>";
echo "<td>".$row['phone']."</td>";
echo "<td>".$row['email']."</td>";

echo "</tr>";

}

echo "</table>";

}

?>

<html>
<head>
<title>Flight Booking</title>
</head>

<body>

<h2>Flight Booking Form</h2>

<form method="post">

Name:
<input type="text" name="name" required>
<br><br>

From:
<input type="text" name="source" required>
<br><br>

To:
<input type="text" name="destination" required>
<br><br>

Journey Date:
<input type="date" name="journey_date" required>
<br><br>

Departure Date:
<input type="date" name="departure_date" required>
<br><br>

Arrival Date:
<input type="date" name="arrival_date" required>
<br><br>

Phone:
<input type="text" name="phone" required>
<br><br>

Email:
<input type="email" name="email" required>
<br><br>

<input type="submit" name="insert" value="Insert">

<input type="submit" name="update" value="Update">

<input type="submit" name="delete" value="Delete">

<input type="submit" name="search" value="Search">

</form>

</body>
</html>