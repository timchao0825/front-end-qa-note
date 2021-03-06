# HTML Questions

- **HTML**（HyperText Markup Language，超文本標記語言）是打造網頁的基石。它表述並定義網頁的*內容*。伴隨 HTML 而來的技術還有描述網頁外觀（[CSS](https://developer.mozilla.org/zh-TW/docs/Web/CSS)）及功能性的程式語言（[JavaScript](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript)）。
  
  - 「超文本」（HyperText）是指從某個網頁連到其他網頁的連結，不管它連結到站內抑或站外。連結連結 Web 的核心概念。藉由撰寫與上載網頁到網際網路中，你就積極參與了全球資訊網（World Wide Web)。

- What does a `doctype` do? | `doctype` 做什麼用的？
  
  document type(文件型別)的簡寫
  
  該網站網頁編寫的 HTML、XHTML 所用標籤是採用什麼樣的 (X)HTML 版本
  
  http://www.webpage.idv.tw/maillist/maillist4/new/02/02.htm

- HTTP 的資料傳輸(HTTP & HTTPS Def)
  
  - HTTP 全名是 [超文本傳輸協定（HyperText Transfer Protocol）](https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)，內容只規範了客戶端請求與伺服器回應的標準，實際上是藉由 [TCP](https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE) 作為資料的傳輸方式。
    - 例如使用者送出了一個請求，經過 TCP 的三次握手之後，資料便能透過 TCP 傳遞給伺服器，並等待伺服器回應；然而這個一來一往的傳輸過程，資料都是 [明文](https://zh.wikipedia.org/zh-tw/%E6%98%8E%E6%96%87)；如果傳遞的過程中有惡意竊聽者，資料便有機會被窺探、盜用。
    - 在HTTP協議裏，Web端與Server端進行通訊是使用"明文"的方式，因為HTTP協議本身並不具備加密的功能，所以無法對請求端以及響應端的內容進行加密。
    - HTTP協議不管是web端還是server端都不會對雙方的身份來進行驗證(例如server端收到請求時，只會要求訊息正確，卻不會去驗證這是不是真的是對應到的web端發出來的，而且server只會對請求做出一次響應)，也無法驗證內文的完整性，所以內容很有可能被竊聽或是竄改(也就是你可能不是跟你所想的對象交談)
  - HTTPS(超文本傳輸"安全協定")，就是透過了SSL/TSL去做了一道安全鎖，透過前述提到的andshake(交握)、公鑰基礎設施(也就是公私鑰加密)、CA(第三方身分認證機構)等，來解決前面我們HTTP無法解決的問題。

- HTTP/1 , HTTP/1.1 , HTTP/2 的介紹
  
  - HTTP 1

- HTTP 1.1
  
  - HTTP/1.1 有一個非常大的缺陷是每個對伺服器的 Request 資源請求，都必須佔用一個網路連線（TCP connection），傳完一個檔案才能再傳下一個，瀏覽器無法同時下載。因此在 HTTP/1.1 時代，瀏覽器為了加速下載的時間，只好同時允許六個網路連線（TCP connection）併發去連接伺服器，好可以達成同時下載六個資源。但是極限也是如此了，並不是說無限制增加網路連線就可以解決這個瓶頸，因為每一次的網路連線，都必須經過三次握手的初始網路連線程序，而且每次初始連線因為流量控制的關係，一開始的網路封包會傳輸比較慢，後來才逐漸加快

- HTTP/2
  
  - 只需要單一網路連線（Single TCP connection），就可以連接網站伺服器，下載所有需要的資源。大大節省 HTTP/1.1 需要一直建立多個網路連線時的啟動時間浪費
  
  - 連線多工（Multiplexing），在單一網路連線上，就可以同時傳輸多個 HTTP Request 和 Response，併發請求 CSS/JS/Images 等等資源。它的原理是將 Requests/Responses 都拆碎成小 frames 進行傳輸，而這些 frames 是可以交錯的，因此檔案再多也不怕，不會發生佔用網路連線（TCP connection）的情況。這就是為什麼在圖檔多的情況下，HTTP/2 特別有優勢
  
  - 優先權設計([Prioritization](https://nghttp2.org/blog/2014/04/27/how-dependency-based-prioritization-works/))，伺服器可以決定例如 CSS 或 JavaScript 檔案，哪些要優先傳送
  
  - Binary 二進位的封包結構設計，對伺服器和瀏覽器來說，可以更快的解析這些資料。冷知識：在 HTTP/1.1 定義了[四種解析訊息的方式](https://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.4)，在 HTTP/2 只需要一種
  
  - 伺服器主動推送資源（Server Push），允許伺服器除了 HTML 之外，連同需要的 CSS/JavaScript/Images 檔案，主動推到瀏覽器的快取之中。不過，這個功能比較有爭議，一來他需要 Web 開發者額外描述有哪些檔案需要隨著 HTML 一起推送給瀏覽器，不是 Web 伺服器升級 HTTP/2 就自動會有。二來它不管瀏覽器是不是已經有快取這個資源，都會推送而造成頻寬浪費。因此實務上筆者認為可以改用瀏覽器的 [Prefetch](https://css-tricks.com/prefetching-preloading-prebrowsing/) 功能，讓客戶端的瀏覽器自己處理即可

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
  
  - localStorage：生命週期較長，要等到使用Javascript清空localStorage或清空cache才會消失

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
    
    **PUT is used to send data to a server to create/update a resource.**
    
    The difference between POST and PUT is that PUT requests are idempotent. 
    
    That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly have side effects of creating the same resource multiple times.
  
  - **HEAD**
    
    **HEAD is almost identical to GET, but without the response body.**
    
    In other words, if GET /users returns a list of users, then HEAD /users will make the same request but will not return the list of users.
    
    HEAD requests are useful for checking what a GET request will return before actually making a GET request - like before downloading a large file or response body.
  
  - **DELETE**
    
    **The DELETE method deletes the specified resource.**
  
  - **PATCH**
  
  - **OPTIONS**
    
    **The OPTIONS method describes the communication options for the target 
    resource.**

|         | Safe? | Idempotent? |
| ------- |:-----:|:-----------:|
| GET     | Y     | Y           |
| POST    | N     | N           |
| PATCH   | N     | N           |
| PUT     | N     | Y           |
| DELETE  | N     | Y           |
| HEAD    | Y     | Y           |
| OPTIONS | Y     | Y           |
