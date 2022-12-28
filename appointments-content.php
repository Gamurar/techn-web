<?php
require("db.php");
$sql = "SELECT
          appointments.*,
          clients.first_name as client_first_name,
          clients.last_name as client_last_name,
          cats.name as cat_name,
          cats.age as cat_age
        FROM appointments
        INNER JOIN clients ON appointments.client_id = clients.id
        INNER JOIN cats ON appointments.cat_id = cats.id";

$result = $conn->query($sql);
?>

<link rel="stylesheet" href="/css/appointments.css" />
<script src="/scripts/appointments.js"></script>
<style src="/css/appointments.css"></style>
<div class="formbold-main-wrapper container mt-5">
    <h1 class="mb-5">Appointments</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Client Name</th>
                <th scope="col">Cat name/age</th>
                <th scope="col">Visit date</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <?php
            while ($row = $result->fetch_array()) {
            ?>
                <tr>
                    <td><?php echo $row['client_first_name'] . " " . $row['client_last_name']; ?></td>
                    <td><?php echo $row['cat_name'] . " (" . $row['cat_age'] . ")"; ?></td>
                    <td>
                        <span class="current-visit-date">
                            <?php echo $row['visit_date']; ?>
                        </span>
                        <input type="date" class="date-selector" name="date" value="<?php echo $row['visit_date']; ?>" min="2018-01-01" max="2023-12-31" />
                    </td>
                    <td>
                        <div class="btn-group btn-group-sm" role="group">
                            <div class="show-btns-state">
                                <button type="button" class="btn btn-danger" data-id="<?php echo $row['id']; ?>" data-action="delete">Delete</button>
                                <button type="button" class="btn btn-primary" data-action="modify">Modify</button>
                            </div>
                            <div class="save-btns-state">
                                <button type="button" class="btn btn-success" data-id="<?php echo $row['id']; ?>" data-action="save">Save</button>
                            </div>
                        </div>
                    </td>
                <?php
            }
                ?>
        </tbody>
    </table>
</div>