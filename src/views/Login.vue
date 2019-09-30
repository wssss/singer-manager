<template>
	<div class="login">
        <h2>登录</h2>
        <div class="input-text">
            <input type="text" class="login-input"  placeholder="请输入账号" />
            <input type="password" class="login-input"  placeholder="请输入密码" />
        </div>
        <img src="../assets/images/go.jpg" class="bottom-img" />
        <flexbox class="login-button">
            <flexbox-item class="text-center">
                忘记密码
            </flexbox-item>
            <flexbox-item class="text-center">
                <div>|</div>
            </flexbox-item>
            <flexbox-item class="text-center">
                用户注册
            </flexbox-item>
        </flexbox>
        <flexbox >
            <flexbox-item class="text-center">
                我已经阅读并遵守
                <b>服务条例</b>
            </flexbox-item>
        </flexbox>
    </div>
</template>
<script>
import {  Flexbox, FlexboxItem } from "vux";
export default {
	components: {
		Flexbox,
		FlexboxItem
	}
};
</script>
<style lang="less" scoped>
.input-text{
    margin-bottom: 15%;
}
.input-text input{
    margin-top: 20px;
}
.login{
    padding-top: 20%;
    width: 100%;
    text-align: center
}
.text-center{
    text-align: center;
}
.login-input {
	width: 100%;
	background-color: #e8e8e8;
	height: 45px;
	border: 0px solid;
	border-radius: 40px;
	text-align: center;
}
.bottom-img {
	width: 80px;
}
.login-button{
    margin: 15% 0 30px;
}
</style>