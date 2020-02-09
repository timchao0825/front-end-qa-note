# HTML Questions

- **HTML**（HyperText Markup Language，超文本標記語言）是打造網頁的基石。它表述並定義網頁的*內容*。伴隨 HTML 而來的技術還有描述網頁外觀（[CSS](https://developer.mozilla.org/zh-TW/docs/Web/CSS)）及功能性的程式語言（[JavaScript](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript)）。
  
  - 「超文本」（HyperText）是指從某個網頁連到其他網頁的連結，不管它連結到站內抑或站外。連結連結 Web 的核心概念。藉由撰寫與上載網頁到網際網路中，你就積極參與了全球資訊網（World Wide Web)。

- What does a `doctype` do? | `doctype` 做什麼用的？
  
  document type(文件型別)的簡寫
  
  該網站網頁編寫的 HTML、XHTML 所用標籤是採用什麼樣的 (X)HTML 版本
  
  http://www.webpage.idv.tw/maillist/maillist4/new/02/02.htm

- standards mode 和 quirks mode 有什麼不同？
  
  > 目前瀏覽器的排版引擎有三種模式：怪異模式（Quirks mode）、接近標準模式（Almost standards mode）、以及標準模式（Standards mode）。在**怪異模式**，排版會模擬 Navigator 4 與 Internet Explorer 5 的非標準行為。
  
  - standards mode：有宣告doctype
    
    quirks mode：沒有宣告doctype，使用較舊的瀏覽器模式
    
    Box Model 定義不同
    
    standards mode： width代表內容寬
    quirks mode：width包含內容寬 + padding + border

- 使用 XHTML 有什麼限制？?
  
  - 可擴展超文本置標語言(eXtensibleHyperTextMarkupLanguage)
  
  - XHTML是一種為適應XML而重新改造的HTML（條件更為嚴謹）
  
  - 元素必須正確的插入
  
  - 元素必須被關閉
  
  - 元素必須使用小寫
  
  - 所有元素必須放在html標籤內
  
  - 所有屬性都必須使用雙引號

- 如果網頁使用 `application/xhtml+xml` 會有問題嗎？
  
  - xhtml 語法要求嚴格，一旦遇到錯誤，立刻停止解析，並顯示錯誤信息。 
    如果頁面使用application/xhtml+xml，一些老的瀏覽器會不兼容

- 你怎麼做一個需要支持多國語言的網頁？
