## JavaSceipt再学習

これはJavaScriptを再学習するにあたって、慣らす為に簡単なコードを書いていきます。

### 入力値を受け取った値で検証する。


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<p>JS再学習</p>
<p>値を入力して下さい</p>
<input type="text" id="num">
<input type="button" value="計算" onclick="checkNum();">

<script src="main.js"></script>
</body>
</html>
```

- checkNum.js

```js
function checkNum() {
    var score = document.getElementById('num').value;
    if (score > 60){
        console.log("OK!");
    }else if(score == 40){
        console.log("so so!");    
    }else{
        console.log("No!");  
    }
}
```