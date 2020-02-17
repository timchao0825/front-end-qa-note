# JavaScript Questions

- 描述 event delegation。

- 描述 “hoisting”

- 談談Scope Chain
  
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
