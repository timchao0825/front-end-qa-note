# JavaScript Questions

- 描述”Event Bubbling“
  
  - 事件冒泡
  
  - 當某個事件發生在某個DOM element上（如：點擊），這個事件會觸發DOM element的event handler，接下來會再觸發他的parent的event handler，以及parent的parent的event handler…直到最上層。

- 描述”Event Capturing“
  
  - 事件捕獲
  
  - `e.stopPropagation`跟`e.preventDefault`的差別，前者我們剛剛已經說明了，就是取消事件繼續往下傳遞，而後者則是取消瀏覽器的預設行為。
  
  - 當事件傳遞到點擊的真正對象，也就是 e.target 的時候，無論你使用`addEventListener`的第三個參數是`true`還是`false`，這邊的`e.eventPhase`都會變成`AT_TARGET`。
    
    既然這邊已經變成`AT_TARGET`，自然就沒有什麼捕獲跟冒泡之分，所以執行順序就會根據你`addEventListener`的順序而定，先添加的先執行，後添加的後執行。
    
    所以，這就是為什麼我們上面把捕獲跟冒泡的順序換了以後，會先出現`list_item_link bubbling`的原因。
    
    1. 先捕獲，再冒泡
    2. 當事件傳到 target 本身，沒有分捕獲跟冒泡

- 描述”Event Delegation“
  
  - 事件代理
  
  - 一個 ul，底下 1000 個 li，如果你幫每一個 li 都加上一個 eventListener，你就新建了 1000 個 function，任何點擊 li 的事件其實都會傳到 ul 身上，因此我們可以在 ul 身上掛一個 listener 就好

- 描述"Event Loop" 事件循環
  
  - JavaScript是單線程（single threaded runtime）的程式語言，程式碼片段都會在堆疊中（stack）被執行，而且一次只會執行一個程式碼片段（one thing at a time）

- 描述"Event Queue" 事件序列
  
  - 等待條件觸發在 JavaScript 稱為 Event queue，像是 setTimeout, addEventListener, XMLHttpRequest 等等，這些方法在執行時會先將事件放到這地方，並將所有的事件堆疊**完成後**，才會開始讓 `event queue` 內的事件被觸發。
  
  - 等待被觸發的事件

- 描述"Currying"
  
  - 柯里化：又稱為 parital application 或 partial evaluation，是個「將一個接受 n 個參數的 function，轉變成 n 個只接受一個參數的 function」的過程

- 描述"this"
  
  - this js training (training file)
  - this永遠指向函式執行時所在的物件，而不是函式被建立時所在的物件
  - 普通的函式呼叫，函式被誰呼叫，this就是誰
  - 建構函式的話，如果不用new操作符而直接呼叫，那即this指向window。用new操作符生成物件例項後，this就指向了新生成的物件
  - 匿名函式或不處於任何物件中的函式指向window
  - 如果是call，apply等，指定的this是誰，就是誰

- 描述 “hoisting”
  
  - 編譯器（compiler）會先由上到下逐行將程式碼轉為電腦可懂的命令，然後再執行編譯後的指令。在這個編譯的階段，編譯器找出所有的變數並繫結所屬範疇，但不賦值，所以此刻變數所帶的值是
     undefined；而在執行階段，JavaScript 引擎才會處理給值的事情。
    
    我們可以把這個過程想像成是將這些變數「提升」到程式碼的最頂端
    
    1. 變數宣告跟函式宣告都會提升
    2. 只有宣告會提升，賦值不會提升
    3. 別忘了函式裡面還有傳進來的參數
  
  - 函數宣告可以hoist，但類別宣告無法hoist
  
  - Great POST from Huli:https://blog.techbridge.cc/2018/11/10/javascript-hoisting/

- 描述”immutable“

- call by value , call by reference
  
  - call by value
    
    - 在呼叫 function 的時候把「值」給複製一份。
  
  ```js
  function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
  }
  
  var x = 10;
  var y = 20;
  swap(x, y);
  console.log(x, y) // 10, 20
  ```
  
  - call by reference
    
    - 你傳進去的東西就是真的 x 跟 y，function 裡面的 a 跟 b 只是別名（alias）而已，改變 a 就會改變 x
  
  ```js
  function add(obj) {
   obj.number++
  }
  var o = {number: 10}
  add(o)
  console.log(o.number) // 11
  ```
  
  - call by sharing
    
    - 我們讓 function 裡面的那個`obj`跟外面的`o`「共享」同一個 object，所以透過裡面的 obj，你可以去修改「共享到的那個 object」的資料
  
  ```js
  function add(obj) {
    // 讓 obj 變成一個新的 object
    obj = {
      number: obj.number + 1
    }
  }
  
  var o = {number: 10}
  add(o)
  console.log(o.number) // 10
  ```

    

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

- 三元運算式
  
  - ```
    console.log(9 << 2) // 36 (二進制計算)
    console.log(9 >> 2) // 2
    ```

- CORS/XSS/CSRF筆記
  
  - **C** ross **O** rigin **R** equest **S** haring （跨來源資源請求）
    
    我們讓瀏覽器對不同網域 *(Domain)*、通訊協定 *(Protocol)* 或是 *Port* 送出請求
    這就叫 *Cross Origin HTTP Reuest* （跨來源HTTP請求）
  
  - **(X)** Cross **S** ite **S** cripting **(跨站腳本)** 縮寫為了不與`CSS`搞混，所以把Cross縮寫為Ｘ
    
    攻擊者透過
    
    1. 特定連結，被稱為Refected Link
    
    2. 當網頁已經被置入永久的scripts
    
    目標通常是將有儲存用戶資訊的部分（Cookie或Session）回傳給攻擊者，或是將受害者導到特定的網站。
    
    預防：
    
    #### Stored、Reflected 防範
    
    前兩種 Stored、Reflected 的類型都必須由後端進行防範，除了必要的 HTML 代碼，任何允許使用者輸入的內容都需要檢查，刪除所有「<script>」、「 onerror=」及其他任何可能執行代碼的字串。當瀏覽器解析時遇到右欄的文字內容，會認為是左欄的字元，但絕對不會當成代碼的部份，而是純粹的文字，所以顯示上還是會像左邊的字元。
    
    #### DOM-Based 防範
    
    其他兩種類型必須由後端來防範，而 DOM-Based 則必須由前端來防範，但基本上還是跟前面的原則相同。
    
    另外不同的一點就是應該選擇正確的方法、屬性來操作
     DOM，譬如前面的示範中會產生漏洞的主要原因是「 document.getElementById('show_name').innerHTML
     = name; 」中的「 innerHTML 」屬性，此屬性代表插入的內容是合法的 HTML 字串，所以字串會解析成 DOM 物件。
    
    此處的話應該使用「 innerText 」，使用此屬性插入字串時，會被保證作為純粹的文字，也就不可能被插入惡意代碼執行了。
  
  - **C** ross **S** ite **R** equest **F** orgery （跨站請求偽造）
    
    Ex. 如果我的網站([http://exampleMe.com](http://exampleMe.com)) 上有個按鈕，是刪除文章用，點擊時送出這樣的請求 `GET /delete/article/:article_id`。
    
    那麼如果在別的網站上 ([http://exampleB.com](http://exampleB.com)) 有個按鈕，`href` 為 `http://exampleMe.com/delete/article/:article_id`，這樣的話，只要能取得瀏覽器內的cookie或session資訊，就能在別的網站偽造同樣的請求，刪除我自己網站上的文章。預防：
    
    #### Server 的防禦：
    
    簡單來說就是：「我要怎麼擋掉從別的 domain 來的 request」
    
    #### 檢查 Referer：
    
     request 的 header 裡面會帶一個欄位叫做 referer，代表這個 request 是從哪個地方過來的，可以檢查這個欄位看是不是合法的 domain，不是的話直接 reject 掉即可
    
    加上圖形驗證碼、簡訊驗證碼等等：就跟網路銀行轉帳的時候一樣，都會要你收簡訊驗證碼，多了這一道檢查就可以確保不會被 CSRF 攻擊
    
    #### CSRF token：
    
    要防止 CSRF 攻擊，我們其實只要確保有些資訊「只有使用者知道」即可。那該怎麼做呢？
    
    我們在 form 裡面加上一個 hidden 的欄位，叫做`csrftoken`，這裡面填的值由 server 隨機產生，並且存在 server 的 session 中
    
    #### browser 本身的防禦：
    
    成立 CSRF，是因為瀏覽器的機制所導致的，有沒有可能從瀏覽器方面下手，來解決這個問題呢？
    
    有！而且已經有了。而且啟用的方法非常非常簡單。
    
    Google 在 Chrome 51 版的時候正式加入了這個功能：[SameSite cookie](https://www.chromestatus.com/feature/4672634709082112)，對詳細運行原理有興趣的可參考：[draft-west-first-party-cookies-07](https://tools.ietf.org/html/draft-west-first-party-cookies-07)。

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
    
    - JavaScript 中透過 fetch 或 XMLHttpRequest 存取資源時，需要遵守 CORS (Cross-Origin Resource Sharing，跨來源資源共用)。瀏覽器在發送請求之前會先發送 preflight request (預檢請求)，確認伺服器端設定正確的 `Access-Control-Allow-Methods`、`Access-Control-Allow-Headers` 及 `Access-Control-Allow-Origin` 等 header，才會實際發送請求。使用 cookie 的情況下還需額外設定 `Access-Control-Allow-Credentials` header
  
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

- JS higher order function (高階函式)

- JS原型鍊練習(file training)
  
  - new 做了什麼？
  
  - prototype chain
  
  - prototype

- `apply`、`bind`、`call` 是什麼？
  
  - apply
    
    - **apply()** 方法會呼叫一個以 this 的代表值和一個陣列形式的值組
    
    - 語法：fun.apply(thisArg, [argsArray])
    
    - ```js
      var person = {
        firstName : 'Tim',
        lastName : 'Lin',
        getFullName : function(){
          var fullname = this.firstName + ' ' + this.lastName;
          return fullname;
        }
      }
      const logName = function(location1 , location2){
        console.log('logged: ' + this.getFullName());
        console.log('Arguments: ' + location1 + location2);
      }
      var arg = ['Taiwan' , 'Taipei'];
      logName.apply(person, arg);
      ```
  
  - bind
    
    - 會建立一個新函式。該函式被呼叫時，會將 `this` 關鍵字設為給定的參數，並在呼叫時，帶有提供之前，給定順序的參數
    
    - 語法：fun.bind(thisArg[, arg1[, arg2[, ...]]])
    
    - ```js
      this.x = 9; // global x
      var module = {
        x: 81,
        getX: function(){return this.x},
      }
      // console.log(module.x); // 81
      var retrieveX = module.getX;
      console.log(retrieveX()); // 9
      var newRetrieveX = retrieveX.bind(module);
      console.log(newRetrieveX()); // 81
      ```
  
  - call
    
    - 使用給定的`this`參數以及分別給定的參數來呼叫某個函數
    
    - 語法：fun.call(thisArg[, arg1[, arg2[, ...]]])
    
    - ```js
      function Product(name, price) {
        this.name = name;
        this.price = price;
      
        if (price < 0)
          throw RangeError('Cannot create product "' + name + '" with a negative price');
        return this;
      }
      
      function Food(name, price) {
        Product.call(this, name, price);
        this.category = 'food';
      }
      Food.prototype = new Product();
      
      function Toy(name, price) {
        Product.call(this, name, price);
        this.category = 'toy';
      }
      Toy.prototype = new Product();
      
      var cheese = new Food('feta', 5);
      var fun = new Toy('robot', 40);
      ```

- `null`、`undefined`和 `undeclared`變數之間有什麼差異？
  
  - null > 是一個空的物件引用。“沒有物件”，即該處不應該有值
  
  - undeclared > (未宣告) 變數在未宣告並使用的狀況下會得到，瀏覽器會報錯，JS執行會中斷
  
  - undefined > (未定義) 表示變數曾被宣告．但值未被定義

- 時間複雜度
  
  - 定義：完全地執行程式所需的計算機時間
  
  - 例子：
  
  - O(1)：演算法執行的步驟是固定的，無關輸入的值而改變
    
    不管 n 輸入多少，這個程式永遠只會執行一次
    
    ```js
    function(int n){
        print(n);
    }
    ```
  
  - O(n)：依據輸入的 n 的數量會跑 n 次
    
    ```js
    function(int n){
        for(i=0;i<n;i++){
            print(i);
        }
    }
    ```
  
  - O(2^n)：跑了n x (n - 1) = n^2 - n 次，但我們還是會記做O(n^2)
    
    ```js
    function(int n){
        for(i=0;i<n;i++){
            for(j=0;j<n-1;j++){
                print(i*j);
            }
        }
    }
    ```

- Pure Functions (純函式)：將相同的input丟入函式，永遠會回傳相同的output結果，而且在過程中完全沒有任何的“副作用”，**副作用**通常意味著「避免狀態改變」、「避免資料改變」
  
  ```js
  // slice: Pure Function 
  var arr = [1, 2, 3, 4, 5, 6];
  arr.slice(0, 3); // output = [1, 2, 3], arr = [1, 2, 3, 4, 5, 6]
  arr.slice(0, 3); // output = [1, 2, 3], arr = [1, 2, 3, 4, 5, 6]
  
  // splice: not Pure Function 
  var arr = [1, 2, 3, 4, 5, 6];
  arr.splice(0, 3); // output = [1, 2, 3], arr = [4, 5, 6]
  arr.splice(0, 3); // output = [4, 5, 6], arr = []
  ```
  
  - slice 函式(Functions)就符合我們**Pure Functions**的規範，*相同input，永遠回傳相同output且無副作用。*而splice函式(Functions)則是每次呼叫，output以及原始資料皆會不相同，因此不算是Pure Functions
