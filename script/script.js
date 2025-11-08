// HTMLドキュメントがすべて読み込まれたことを確認してから実行
document.addEventListener('DOMContentLoaded', () => {

    // (1) HTMLから id="myButton" の要素（ボタン）を探して取得
    const button = document.getElementById('myButton');

    // (2) 取得したボタンがクリックされた時の動作を設定
    button.addEventListener('click', () => {
        
        // (3) ダイアログ（アラート）を表示する
        alert('ボタンが押されました！');
        
    });

});
