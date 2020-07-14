# CSS Questions

- CSS 的 class 和 ID 兩者有何差異？
  
  - 是在於 ID 選擇器在一個 HTML 文件中只能被使用一次，而 Class 選擇器在一個 HTML 文件中可以被使用多次。第二個不同的地方，是 ID 選擇器可以被 Javascript 中的 GetElementByID 函數所運用，而 Class 選擇器無法被 Javascript 運用到。
  
  - 並沒有什麼固定的規則，來決定什麼時候要用 ID 及什麼時候要用 Class。我們的建議是盡量用 Class，因為這樣子最靈活 (同一個 HTML 文件可以利用這類的選擇器多次)。唯一的例外，是當你要用 Javascript 的 GetElementByID 函數時。在這個情況下，你就應該要用 ID。做到好維護  id给js用，class给css用

- 描述 “resetting” 和 “normalizing” 的差異性？
  
  > resetting：因為不同瀏覽器對於標籤預設樣式都不同，因此定義出一套可以覆蓋所有HTML標籤的CSS樣式表，使所有瀏覽器標準一致。
  > 
  > normalizing：相對於resetting將所有標籤的預設樣式都歸零，這類的樣式僅針對不同瀏覽器和版本不相容的標籤進行微調。

- 描述 Floats 並解釋如何運作
  
  - 浮動定位。有`float:left`、`float:right`兩種可供選擇，它會將該元素整個往左、往右移並脫離網頁原先流向，並且會讓周圍的元素圍繞它

- 描述 z-index 並且描述堆疊內容 (stacking context) 如何形成
  
  - 

- 解釋 BFC(Block Formatting Context) 是什麼、如何運作的。
  
  - 內部的Box會在垂直方向，一個接一個地放置。 就是我們平常div一行一行塊級放置的樣式。 
     Box垂直方向的距離由margin決定。屬於同一個BFC的兩個相鄰Box的margin會發生重疊。  每個元素的margin box的左邊， 
    與包含塊border box的左邊相接觸(對於從左往右的格式化，否則相反)。

- 哪些不同的 clearing 技術？
  
  - clear 可以的值有 left（清除左邊浮動區塊）、right（清除右邊浮動區塊）、both（清除兩邊浮動區塊）、none（預設就是這個，兩邊都可以有浮動區塊）最後還有 inherit（繼承）

- 描述 CSS sprites, 你如何實作在網頁或網站上？
  
  - 一張圖片幾個icon然後分在不同的區塊上

- 你最喜愛的圖片取代技術是什麼？你什麼時候會用到？

- 針對各瀏覽器制定的樣式表（browser-specific styling），你的做法是？
  
  - autoprefixer

- 你熟悉任何有關 SVG 嗎？
  
  - Snap svg

- 你如何優化你的網頁以利於列印？
  
  - media print

- 高效的 CSS時，有什麼要注意的？
  
  - 使用Reset但並非全域Reset
  
  - 良好的命名習慣
  
  - 代碼縮寫
  
  - 利用CSS繼承
  
  - 使用多重選擇器
  
  - 適當的代碼注釋
  
  - 給你的CSS代碼排序
  
  - 保持CSS的可讀性
  
  - 選擇更優的樣式屬性值
  
  - 使用<link>代替@import
  
  - 使用外部樣式表

- CSS preprocessors 的優點和缺點
  
  - 缺點：上手門檻，其次是維護門檻，再來是團隊整體水平和規範的門檻
  
  - 優點：無需考慮瀏覽器的相容性問題，例如你可以在CSS中使用變數、簡單的邏輯程式、函式等等在程式語言中的一些基本特性，可以讓你的CSS更加簡潔、適應性更強、可讀性更佳，更易於程式碼的維護等諸多好處。

- 瀏覽器如何按照 CSS selector 找到對應的 element
  
  - 大於(>)就是選取底下**直接**的子元素
    
    - .box p會影響到box這個div底下所有的p元素，而因為「>」只會影響到直接的子元素
  
  - /deep/ 影響到box這個div底下所有的p元素
  
  - 加號符號(+)則是會影響到**後方同層級**的**第一個**元素
  
  - 取代符號(~)是影響到**後方同層級**的**全部**元素

- relative、fixed、absolute 和 static 元件差異性
  
  > static：預設值，按照瀏覽器預設的配置排版
  
  > relative：可以設定top、left、right、bottom，使元素相對調整原本該出現的位置，此調整不影響其他元素的位置
  
  > fixed：相對於瀏覽器視窗來定位，即使畫面捲動也會出現在固定的位置
  
  > absolute：相對於body來定位

- responsive design 與 adaptive design 有何不同？
  
  - RWD主要是依靠高彈性的佈局策略，使同一個頁面能適應不同設備的運行環境。AWD則是通過辨識客戶設備，提供針對該設備的不同版本的頁面內容和資源。

- css specificity
  
  - ** `0-0-0-0`
  
  - div, p, ul, ol, li, em, header, footer, article.... `0-0-0-1`
  
  - class `0-0-1-0`
  
  - id `0-1-0-0`
  
  - inline style ex: div style="..."  `1-0-0-0` (最高)
    
    其他項目
  
  - psuedo-class(偽類) `0-0-1-0`
  
  - !important `1-0-0-0-0`
  
  - ### `!important > inline style > ID > Class/psuedo-class(偽類)/attribute（屬性選擇器） > Element`

- 偽元素和偽類
  
  - 偽類 (Pseudo-classes)
    
    - :active :hover :focus
      
      ![1-M86d0RMEQfc-S59SCvE-og.png](/Users/mac/Desktop/1-M86d0RMEQfc-S59SCvE-og.png)
      
      
  
  - 偽元素 (Pseudo-elements)
    
    - ::before、 ::after
