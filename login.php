<link href="/css/login.css" rel="stylesheet" type="text/css" />
<div>
    <div id="frmLogin" onSubmit="return validate();">
        <div class="demo-table">

            <div class="form-head">Login</div>
            <?php
            if (isset($_SESSION["errorMessage"])) {
            ?>
                <div class="error-message"><?php echo $_SESSION["errorMessage"]; ?></div>
            <?php
                unset($_SESSION["errorMessage"]);
            }
            ?>
            <div class="field-column">
                <div>
                    <label for="username">Username</label><span id="user_info" class="error-info"></span>
                </div>
                <div>
                    <input name="user_name" id="user_name" type="text" class="demo-input-box">
                </div>
            </div>
            <div class="field-column">
                <div>
                    <label for="password">Password</label><span id="password_info" class="error-info"></span>
                </div>
                <div>
                    <input name="password" id="password" type="password" class="demo-input-box">
                </div>
            </div>
            <div class=field-column>
                <div>
                    <button class="btnLogin" id="login-btn">Login</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="/scripts/login.js"></script>