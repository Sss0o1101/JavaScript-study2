// ブラウザ全体のオブジェクトとして捉えた場合のもの
console.log(window);

// ポップアップを呼ぶ関数
window.alert("Hello world");

//表示している全体のオブジェクト
console.log(document);
// ーーーーーーーーーーーーーーーーーーーー



// ダイアログで"HeLLo"と表示する
alert("Hello");

// コンソールに"Hello"と表示する
console. log (Hello);

// タイマーを設定し、5秒後にダイアログで"HeLlo"と表示する
const timer = setTimeout (() => {
   alert("Hello world");
},5000);


// / タイマーをキャンセル
clearTimeout (timer);