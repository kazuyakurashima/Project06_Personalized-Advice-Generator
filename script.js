// ボタンと表示エリアの取得
// ================================================
const addBtn = document.getElementById("addBtn");
const display = document.getElementById("display");

// ボタンと表示エリアの取得
// ================================================
async function fetchAdvice() {
    try {
        // APIから英語のアドバイスを取得
            // APIからデータを取得     
            const response = await fetch("https://api.adviceslip.com/advice");
            // responseは、fetchでデータリクエストした返事。お返事の「箱」
            const data = await response.json();
            // お返事はJSON（JavaScript Object Notation（JavaScriptオブジェクト表記）、すなわち「文字列」で帰ってくる）
            // JSONのテキストをJavaScriptオブジェクト（プロパティ（データの名前と値のペア）を持つデータ構造）に変換します。
            const englishAdvice = data.slip.advice;
        // 日本語に翻訳
            // 翻訳する関数を別途定義。翻訳したものをtranslatedAdviceとした
            const translatedAdvice =await translateToJapanese(englishAdvice);
        // 英語と日本語の表記
            // strongは太文字で強調
            display.innerHTML =`
            <p><strong>英語　：</strong> ${englishAdvice}</p>
            <p><strong>日本語：</strong> ${translatedAdvice}</p>
            `;
    } catch(error) {
            display.textContent ="deepLただいま休憩中です(^_-)";
    }
    }

    // 翻訳関数の定義
    async function translateToJapanese(text) {
        // これがAPIキーです！！！
        const apiKey ="a51bbc7f-a18f-46ab-b82c-68d6b95ffb78:fx"
        // deepLに翻訳させます。target_lag=JAで日本語にしてます
        const url = `https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${encodeURIComponent(text)}&target_lang=JA`;

        const response =await fetch(url);
        // urlにリクエスト送信してます（fetch)
        const data =await response.json();
        // JSONのテキストをJavaScriptオブジェクト（プロパティ（データの名前と値のペア）を持つデータ構造）に変換します。
        return data.translations[0].text;
        // deepLは、translationsという配列に翻訳が入っています。配列に1つ翻訳なので[0]です。
    }

// add Btn Event
// ================================================
addBtn.addEventListener("click", fetchAdvice);