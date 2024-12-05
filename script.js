// add Btn Event
// ================================================
document.getElementById("addBtn").addEventListener("click", ()=> {
    console.log("ボタンがクリックされたよ")
    // APIからデータを取得
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
        // responseは、fetchでデータリクエストした返事。お返事の「箱」
        // お返事はJSON（JavaScript Object Notation（JavaScriptオブジェクト表記）、すなわち「文字列」で帰ってくる）
            console.log(response);
            return response.json();
            // JSONのテキストをJavaScriptオブジェクト（プロパティ（データの名前と値のペア）を持つデータ構造）に変換します。
        })
        .then((data) => {
            console.log(data.slip.advice);
            // slipは、apiから返されるデータで、「アドバイスに関する情報」をまとめているオブジェクトの名前。
            // slipには、id,adviceがある。
            const advice = data.slip.advice;
            document.getElementById("display").innerText = advice;
            // displayというidを見つけ、ここにinnnerText（テキスト）を設定します。そのテキストは、advice
        })
        .catch((error) => {
            console.error("エラーが発生しました：", error);
        });
});


// Display Habits Function
// ================================================
// 習慣を表示する関数

// Clear All Habits Event
// ================================================
// すべての習慣を消すボタンのクリックイベント


// Initial Habit Display on Page Load
// ================================================
// ページを読み込んだ時に習慣を表示
