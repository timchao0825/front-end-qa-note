# JavaScript Questions

- 描述”Event Bubbling“
  
  - 事件冒泡
  
  - 當某個事件發生在某個DOM element上（如：點擊），這個事件會觸發DOM elemtn的event handler，接下來會再觸發他的parent的event handler，以及parent的parent的event handler…直到最上層。

- 描述”Event Capturing“
  
  - 事件捕獲
  
  - `e.stopPropagation`跟`e.preventDefault`的差別，前者我們剛剛已經說明了，就是取消事件繼續往下傳遞，而後者則是取消瀏覽器的預設行為。
  
  - 當事件傳遞到點擊的真正對象，也就是 e.target 的時候，無論你使用`addEventListener`的第三個參數是`true`還是`false`，這邊的`e.eventPhase`都會變成`AT_TARGET`。
    
    既然這邊已經變成`AT_TARGET`，自然就沒有什麼捕獲跟冒泡之分，所以執行順序就會根據你`addEventListener`的順序而定，先添加的先執行，後添加的後執行。
    
    所以，這就是為什麼我們上面把捕獲跟冒泡的順序換了以後，會先出現`list_item_link bubbling`的原因。
    
    1. 先捕獲，再冒泡
    2. 當事件傳到 target 本身，沒有分捕獲跟冒泡

- 描述”event delegation“
  
  - 事件代理
  
  - 一個 ul，底下 1000 個 li，如果你幫每一個 li 都加上一個 eventListener，你就新建了 1000 個 function，任何點擊 li 的事件其實都會傳到 ul 身上，因此我們可以在 ul 身上掛一個 listener 就好

- 描述 “hoisting”

- 描述”immutable“

- 談談”Scope Chain“
  
  - 簡單的來說，Scope Chain就是在找變項的過程中，從內層找到外層，直到最外面的global environment的這條鍊，就叫做Scope Chain。
  
  - https://pjchender.blogspot.com/2015/12/javascriptscope-chainouter-environment.html

- 什麼是 closure, 如何/為什麼使用?
  
  - 閉包是函式記得並存取語彙範疇的能力，可說是指向特定範疇的參考，因此當函式是在其宣告的語彙範疇之外執行時也能正常運作。
  
  - https://pjchender.blogspot.com/2017/05/javascript-closure.html
  
  - ```
    function foo() {
      var a = 2;
    
      function bar() {
        console.log(a);
      }
    
      return bar;
    }
    
    var baz = foo();
    
    baz(); // 2
    ```

- `==` 和 `===` 有什麼不同？
  
  - 兩個等於（==）會對被判別的變數做**轉換型別的動作（coercion又稱為implicit type conversion）**。

- CORS/XSS/CSRF筆記
  
  - **C** ross **O** rigin **R** equest **S** haring （跨來源資源請求）
    
    我們讓瀏覽器對不同網域 *(Domain)*、通訊協定 *(Protocol)* 或是 *Port* 送出請求
    這就叫 *Cross Origin HTTP Reuest* （跨來源HTTP請求）
  
  - **(X)** Cross **S** ite **S** cripting **(跨站腳本)** 縮寫為了不與`CSS`搞混，所以把Cross縮寫為Ｘ
    
    攻擊者透過
    
    1. 特定連結，被稱為Refected Link
    
    2. 當網頁已經被置入永久的scripts
    
    目標通常是將有儲存用戶資訊的部分（Cookie或Session）回傳給攻擊者，或是將受害者導到特定的網站。
  
  - **C** ross **S** ite **R** equest **F** orgery （跨站請求偽造）
    
    Ex. 如果我的網站([http://exampleMe.com](http://exampleMe.com)) 上有個按鈕，是刪除文章用，點擊時送出這樣的請求 `GET /delete/article/:article_id`。
    
    那麼如果在別的網站上 ([http://exampleB.com](http://exampleB.com)) 有個按鈕，`href` 為 `http://exampleMe.com/delete/article/:article_id`，這樣的話，只要能取得瀏覽器內的cookie或session資訊，就能在別的網站偽造同樣的請求，刪除我自己網站上的文章。

- 有使用過HTTP/2的經驗嗎？
  
  - 只需要單一網路連線（Single TCP connection），就可以連接網站伺服器，下載所有需要的資源。大大節省 HTTP/1.1 需要一直建立多個網路連線時的啟動時間浪費。
  
  - 連線多工（Multiplexing），在單一網路連線上，就可以同時傳輸多個 HTTP Request 和 Response，併發請求 ，CSS/JS/Images 等等資源。它的原理是將 Requests/Responses 都拆碎成小 frames 進行傳輸，而這些 frames 是可以交錯的，因此檔案再多也不怕，不會發生佔用網路連線（TCP connection）的情況。這就是為什麼在圖檔多的情況下，HTTP/2 特別有優勢。
  
  - 優先權設計([Prioritization](https://nghttp2.org/blog/2014/04/27/how-dependency-based-prioritization-works/))，伺服器可以決定例如 CSS 或 JavaScript 檔案，哪些要優先傳送。
  
  - Header 壓縮，在 HTTP/1.1 的 Headers 其實是沒有壓縮的，大小佔了約 200 bytes 到 2KB 不等，而且同一瀏覽器的每個 Requests 其實絕大部份的 Headers 都是重複的。HTTP/2 用了 [HPACK](https://http2.github.io/http2-spec/compression.html) 壓縮技術，大大減少每次都要重複傳輸一樣的 Headers。
  
  - Binary 二進位的封包結構設計，對伺服器和瀏覽器來說，可以更快的解析這些資料。冷知識：在 HTTP/1.1 定義了[四種解析訊息的方式](https://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.4)，在 HTTP/2 只需要一種。
  
  - 伺服器主動推送資源（Server Push），允許伺服器除了 HTML 之外，連同需要的 CSS/JavaScript/Images 檔案，主動推到瀏覽器的快取之中。不過，這個功能比較有爭議，一來他需要 Web 開發者額外描述有哪些檔案需要隨著 HTML 一起推送給瀏覽器，不是 Web 伺服器升級 HTTP/2 就自動會有。二來它不管瀏覽器是不是已經有快取這個資源，都會推送而造成頻寬浪費。因此實務上筆者認為可以改用瀏覽器的 [Prefetch](https://css-tricks.com/prefetching-preloading-prebrowsing/) 功能，讓客戶端的瀏覽器自己處理即可。
  
  - 合併圖片([Image Sprites](https://css-tricks.com/css-sprites/))，為了減少瀏覽器發送 Requests 的數量，就把很多小圖(例如Icon)合併成一張大圖下載，然後透過 CSS 樣式去切出其中一個小圖。這一招用起來其實很麻煩，因為每次新增小圖或修改，整張大圖都要重新產生過。
  
  - 合併 CSS 和 JavaScript 檔案，也是為了減少瀏覽器發送 Requests 的數量。但是開發的時候一定會拆成不同檔案才比較好維護，而最後佈署到伺服器時，需要額外去進行把檔案合併的動作。
  
  - 內插 CSS、JavaScript 或圖片，也是為了減少瀏覽器發送 Requests 的數量，就把原本應該獨立的檔案，直接內插到 HTML 裡面。圖片會用 Base64 編碼成純文字後置入。但這招會破壞瀏覽器快取機制，本來是可以單獨快取這些靜態資源的，內插後反而沒有快取了，而且圖片實際大小會變大浪費頻寬。
  
  - Domain 切分（Domain Sharding），瀏覽器針對同一個網址只能開六個網路連線，為了突破這個限制，網站者可能會拆多個子網域，用不同網址來下載圖片。另外也因為拆分不同 Domain 的關係，可以讓瀏覽器的 Cookie 不會送到這些次要網域，減少一點頻寬浪費。

- Asynchronous Programming
  
  - 同步Synchronous 簡意：一次執行一行程式
  
  - 非同步Asynchronous 簡意：同時執行
  
  - simple callback programing
    
    - https://codepen.io/Tim-chao/pen/BaNLNwQ
  
  - simple Promise programing
    
    - https://codepen.io/Tim-chao/pen/GRJjpqE
  
  - simple Await programing
    
    - https://codepen.io/Tim-chao/pen/VwLKvGW

- Naming convention
  
  - CamelCase(駝峰式命名法, camelCase) , ex: schoolClass
  
  - Pascal Case(PascalCase), ex:SchoolClass
  
  - Snake Case(Snake_Case), ex:school_Class
  
  - Kebeb Case(Kebeb-Case), ex:school-class

- API 與 JSONP
  
  - 「Application Programming Interface」，中文翻作應用程式介面
  
  - XMLHttpRequest（XHR）物件的方式來存取伺服器端的資料，可以讓你直接經由指定的 URL 擷取資料卻不用刷新整個網頁
  
  - 瀏覽器因為安全性的考量，[同源政策](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Same_origin_policy_for_JavaScript)，Same-origin policy
  
  - CORS 全名為 Cross-Origin Resource Sharing，跨來源資源共享
    
    - 這套規範跟你說，如果你想開啟跨來源 HTTP 請求的話，Server 必須在 Response 的 Header 裡面加上`Access-Control-Allow-Origin`，當瀏覽器收到 Response 之後，會先檢查`Access-Control-Allow-Origin`裡面的內容，如果裡面有包含現在這個發起 Request 的 Origin 的話，就會允許通過，讓程式順利接收到 Response。
  
  - JSONP
    
    - 其實有些東西是不受同源政策限制的，例如說`<script>`這個 Tag，我們不是常常引用 CDN 或是 Google Analytics 之類的第三方套件嗎？網址都是其他 Domain 的，但是卻能正常載入
    
    - JSONP 就是利用`<script>`的這個特性來達成跨來源請求的
    
    - 利用 JSONP，也可以存取跨來源的資料。但 JSONP 的缺點就是你要帶的那些參數永遠都只能用附加在網址上的方式（GET）帶過去，沒辦法用 POST。
      
      如果能用 CORS 的話，還是應該優先考慮 CORS。
    
    - 簡易版本 實作jsonp範例:
      
      ```html
      <script>
        var response = {
          data: 'test'
        };
      </script>
      <script>
        console.log(response);
      </script>
      ```
    
    - Api 範例 jsonp 
      
      ```html
      <script src="https://another-origin.com/api/games"></script>
      <script>
        console.log(response);
      </script>
      ```
