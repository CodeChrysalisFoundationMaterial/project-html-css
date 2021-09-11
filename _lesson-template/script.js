'use strict'
// Please don't delete the 'use strict' line above

console.log("Welcome to Foundations!");

/*
レビュー
１．HTMLとはウェブページの内容を記載する

２．CSSとはウェブページを装飾する。

３．HTMLの中でCSS, JSを組み合わせる。
*/


/*
　演習手順

この演習には期限があります。5 週間コース: 第 3 週の土曜日までに提出してください。
学習の素材が提供されていますが、今日のこの時間はまず手を動かしてページを作り始めることをお勧めします。

_lesson-templates フォルダをコピーする

コピーしたフォルダをhtml-css-homework という名前に変更する。

フォルダ html-css-homeworkの中に　styles.cssという名前のファイル（フォルダじゃないよ）を作る

cssファイルを indx.htmlにリンクさせる。monarchのリンクを参考にしてください。

写真のアップロードに使えるサイトです。写真の管理に便利なので活用してください。
https://imgbb.com/

実際に作成したウェブページを投稿してもらうサイトです。これを使うとURLで簡単にページを共有できます。
https://codepen.io/


//私の自己紹介　https://codepen.io/mikuSan/pen/YzXEOWj

おすすめサイト
https://saruwakakun.com/html-css/basic/html
https://saruwakakun.com/html-css/basic/css

HTMLで同じタグにidを複数指定はだめ？するとどうなるのか？
https://aprico-media.com/posts/4300

何らかの理由で複数のidを指定したいときがあると思いますが、
複数のidを同じタグに指定するのはコーディング規約違反になります。
（idを複数回使うことで目に見えるエラーが起こるとは限らない）

理由
―　idが重複してしまうと、サイト内の一部機能に不具合が発生する可能性がある
―　jQueryでid名を使用したプログラムが書かれていた場合、もしくはid名を使用したプログラムを書く場合、正常に動作しなくなる可能性が高い

*/

const button = document.getElementsByTagName("button"); 
console.log("button", button); 

button[0].addEventListener("click", ()=>{window.alert("Hello everyone! I'm Miku!!")}); 