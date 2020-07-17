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
  
  - 使用i18n framework

- 使用data- 屬性的好處？
  
  - 以往總是在標籤上添加自定義屬性來儲存和使用，但是不知道何時會被重置掉，且也不符合HTML規範
    
    因此HTML5加入data屬性，data在頁面上是不顯示的，但卻可讀可寫
    
    `<div id="awesome" data-myid="3e4ae6c4e">Some awesome data</div>`
    
    `var myid= jQuery("#awesome").data('myid');`

- 考慮 HTML5 作為一個開放式的網站平台，組成 HTML5 的技術有哪些？
  
  - 語義特性：HTML5賦予網頁更好的意義和結構
  
  - 本地存儲特性：基於HTML5開發的網頁APP擁有更短的啟動時間，更快的聯網速度，這些全得益於HTML5 APP Cache，以及本地存儲功能。  
  
  - 連接特性：更有效的連接工作效率，使得基於頁面的實時聊天，更快速的網頁遊戲體驗，更優化的在線交流得到了實現。  
  
  - 網頁多媒體特性：支持網頁端的Audio、Video等多媒體功能， 與網站自帶的APPS，攝像頭，影音功能相得益彰。  
  
  - CSS3特性：在不犧牲性能和語義結構的前提下，CSS3中提供了更多的風格和更強的效果。  

- 請描述 `cookies`, `sessionStorage` 和 `localStorage` 的不同？
  
  - cookies：每個HTTP request都會送到伺服器端，拖慢載入速度和頻寬
  
  - sessionStorage、localStorage是HTML5新增的功能，儲存在本機
  
  - sessionStorage：生命週期僅存活到瀏覽器或頁面關閉
  
  - locationStorage：生命週期較長，要等到使用Javascript清空localStorage或清空cache才會消失

- 描述下列之間的不同 `<script>`, `<script async>` & `<script defer>`
  
  - `<script src="demo.js"></script>`
    
    webpage render會停止，等到demo.js載入完畢才會繼續render
    
    `<script src="demo.js" async></script>`
    
    wepage render不會停止，demo.js在背景載入
    
    demo.js載入完畢，render停止，開始執行demo.js
    
    demo.js執行完畢，render繼續
    
    `<script src="demo.js" defer></script>`
    
    webpage render不會停止，demo.js在背景載入
    
    等到webpage載入完畢才會執行demo.js

- 為什麼把 CSS `<link>` 放在 `<head></head>` 之間，與將 JS `<script>` 放在 `</body>` 之前是個較好的主意？有什麼例外情形嗎？

- 什麼是漸進式呈現？
  
  - 以平行與排定優先順序的方式擷取與呈現頁面元件，來幫助提升頁面效能。如果您注意到社群頁面要花費很長的時間載入，您才能看見元件在螢幕上呈現，那麼漸進式呈現便能幫助改善您的體驗。

- 有用過 HTML 樣板語言（template languages）嗎？

- HTTP 協定中，有哪些 request method ?
  
  - **GET**
    
    **GET is used to request data from a specified 
    resource.**
    
    **GET is one of the most common HTTP methods.**
    
    Note that the query string (name/value pairs) is sent in the URL of 
    a GET request:
    
    /test/demo_form.php?name1=value1&name2=value2
    
    **Some other notes on GET requests:**
    
    - GET requests can be cached
    - GET requests remain in the browser history
    - GET requests can be bookmarked
    - GET requests should never be used when dealing with sensitive data
    - GET requests have length restrictions
    - GET requests are only used to request data (not modify)
  
  - **POST**
    
    **POST is used to send data to a server to create/update a resource.**
    
    The data sent to the server with POST is stored in the request body of the 
    HTTP request:
    
    POST /test/demo_form.php HTTP/1.1  
    
    Host: w3schools.com  
    
    name1=value1&name2=value2
    
    **POST is one of the most common HTTP methods.**
    
    **Some other notes on POST requests:**
    
    - POST requests are never cached
    - POST requests do not remain in the browser history
    - POST requests cannot be bookmarked
    - POST requests have no restrictions on data length
  
  - **PUT**
  
  - **HEAD**
  
  - **DELETE**
  
  - **PATCH**
  
  - **OPTIONS**


