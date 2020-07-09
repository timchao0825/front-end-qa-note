# Normal Questions

- 軟體開發四個階段
  
  分析 analysis
  
  規劃 planning
  
  實作  Implement
  
  驗證  verification

- 寫程式的哪部份最讓你感到很興奮或是有興趣？

- 最近有無遇過不容易的技術性問題，又如何解決？

- 當你開發Web應用程式或網站時，針對UI、安全性、效能、SEO、維護性，以及技術，你考量的點是什麼？

- 說說你喜好的開發環境 (作業系統, 編輯器或 IDE, 瀏覽器, 開發工具 … 之類)。
  
  VS Code

- 你最熟悉哪一套版本控制系統？
  
  Git , Bitbucket

- 你可以描述漸進增強 (progressive enhancement) 和優美退化 (graceful degradation) 間的差異嗎？
  
  > 優雅降級 (Graceful Degradation)
  > 
  > 一開始建構一個系統或網站時，就針對最新、最完善的環境來設計，然後針對其它環境進行測時與修復。使用這個方案時，我們首先會挑選一個較完善的平台完成所有的功能和經驗，然後再針對無法支援所有功能的平台或環境撰寫候選方案，讓那些較舊的平台不致於無法使用主要的功能。
  > 
  > 漸進增強 (Progressive Enhancement)
  > 
  > 漸進增強首先考慮到的是一般性，必須提供所有的平台完整的功能，然後再去針對較新的平台進行改良與優化。
  > 
  > **優雅降級成本面**
  > 
  > 開發初期僅需要把所有火力集中在一個平台上，迅速的開發出產品的雛形，進行市場試水溫的測試，對於功能尚未確定的產品來說，使用優雅降級的方式也許能夠節省資源不必要的浪費。
  > 
  > **漸進增強成本面**
  > 
  > 需要更多的時間、人力、資源開發，初期開發成本較高，但是漸進增強提供更好的穩定性以及平台支援，以長期來說反而減少維護、開發成本。

- 描述開發一個網站的流程

- 說出三種能加快網頁讀取速度的方法
  
  將javascript和css壓縮最小化，將不必要的程式碼拿掉
  
  如果可以的話．可用外部載入ＣＤＮ減少伺服器壓力
  
  壓縮圖片

- 什麼是FOUC？如何避免FOUC？
  
  Flash of Unstyled Content：瀏覽器加載網頁時會出現短暫的CSS失效畫面
  
  瀏覽器會先加整個畫面的DOM，再載入外部的CSS，這中間的過渡期就會產生FOUC
  
  解決方法：在`<head>中加入<link>或<script>`就可以了

- 解釋 CSS 動畫與 JavaScript 動畫之間的憂與劣。(參考：https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/423526/)
  
  - CSS
    
    - 性能好，瀏覽器會對CSS3的動畫做一些優化
    
    - CSS3比JS更簡單，性能調優方向固定
    
    - 低版本瀏覽器，CSS3可以做到自然降級，而JS則需要另外寫
      
      > 缺點
    
    - 動畫被支援的時間函數非常少，不夠靈活
    
    - CSS3有兼容性問題，而JS大多時候沒有兼容性問題
  
  - JavaScript
    
    - JavaScript動畫控制能力很強, 可以在動畫播放過程中對動畫進行控制：開始、暫停、回放、終止、取消
    
    - 動畫效果比css3動畫豐富,有些動畫效果，比如曲線運動,衝擊閃爍,視差滾動效果，只有JavaScript動畫才能完成
    
    - CSS3有相容性問題，而JS大多時候沒有相容性問題
      
      > 缺點
    
    - 程式碼的複雜度高於CSS動畫
    
    - JavaScript在瀏覽器的主執行緒中執行，而主執行緒中還有其它需要執行的JavaScript指令碼、樣式計算、佈局、繪製任務等,對其干擾導致執行緒可能出現阻塞，從而造成丟幀的情況。

- 寫一個簡易的投影片頁面？

- 你用什麼工具來測試你的程式碼效能？

- 解釋什麼是 ARIA 與 screenreaders，它們是怎麼樣讓網站使用更無障礙？
  
  > ARIA 為Web app提供滿足用戶不同需求的解決方案。建設起用戶和網頁之間的橋梁。 
  > 新的HTML5標准中增加 aria-* 的標簽屬性，全稱Accessible Rich Internet Application。與role標簽屬性配合使用。 
  > role屬性表示一個非標準的tag的實際作用。比如用div做button，設置div 的 role=“button”，輔助工具就可以認出這實際上是個button。而aria-*的作用就是描述這個tag在可視化的情境中的具體信息。 
  > 最簡單的應用比如， 
  > < div role=”checkbox” aria-checked=”checked”> 
  > 輔助工具就會知道，這個div實際上是個checkbox的角色，為選中狀態

- CORS 是什麼，它解決了什麼問題？
  
  https://blog.techbridge.cc/2018/08/18/cors-issue/

- CSRF Cross Site Request Forgery (跨站請求偽造)
  
  - 或稱為 one-click attack 或者 session riding
  
  - 攻擊手法：小黑是一個邪惡的壞蛋，想要讓小明在不知情的情況下就把自己的文章刪掉，該怎麼做呢？
    
    他知道小明很喜歡心理測驗，於是就做了一個心理測驗網站，並且發給小明。但這個心理測驗網站跟其他網站不同的點在於，「開始測驗」的按鈕長得像這樣：
    
    ```html
    <a href='https://small-min.blog.com/delete?id=3'>開始測驗</a>
    ```
    
    小明收到網頁之後很開心，就點擊「開始測驗」。點擊之後瀏覽器就會發送一個 GET 請求給`https://small-min.blog.com/delete?id=3`，並且因為瀏覽器的運行機制，一併把 `small-min.blog.com` 的 cookie 都一起帶上去。
    
    Server 端收到之後檢查了一下 session，發現是小明，而且這篇文章也真的是小明發的，於是就把這篇文章給刪除了。
    
    這就是 CSRF，你現在明明在心理測驗網站，假設是 `https://test.com` 好了，但是卻在不知情的狀況下刪除了 `https://small-min.blog.com` 的文章，你說這可不可怕？超可怕！
    
    這也是為什麼 CSRF 又稱作 one-click attack 的緣故，你只要點一下就中招了。
  
  - 舉的例子是刪除文章，這你可能覺得沒什麼，那如果是銀行轉帳呢？攻擊者只要在自己的網頁上寫下轉帳給自己帳號的 code，再把這個網頁散佈出去就好，就可以收到一大堆錢。
  
  - 解決方法：Server 的防禦
    
    - 檢查 Referer
    
    - 加上圖形驗證碼、簡訊驗證碼等等
    
    - 加上 CSRF token
    
    - Double Submit Cookie
