# Bootstrap Builder 遊戲設計文件

## 專案概述
將 Bootstrap 核心概念設計成類似 CSS Diner（或 Flexbox Froggy）的遊戲，提高學生的學習興趣和實作記憶。

## 遊戲目標
學生需要撰寫正確的 Bootstrap Class，以 Grid System 為主，將畫面右側的區塊精準地移動到指定目標區域（如指定欄位、特定斷點）。
每個單元下方預留區塊放置參考網頁設計的圖片。

## 遊戲關卡設計大綱 (共 25 關，分為 4 大主題)

*一開始提醒使用者要先掛載Bootstrap的css和js
css掛載於<head>
js掛載於</body>前

### 主題一：網格系統與排版基礎
| 關卡 | 標題 | 答案 (Class) | 說明 |參考網址 |
| :--- | :--- | :--- | :--- |
| 1-1 | 容器邊界 | container | 將內容放置於一個標準的響應式容器中，使其在頁面兩側保留適當的邊距。 |https://www.camacafe.com/New/|
| 1-2 | 全寬內容 | container-fluid | 將橫幅廣告 (Banner) 延伸至螢幕兩側邊緣，實現滿版效果。 |https://www.nintendo.com/tw/switch2/index.html|
| 1-3 | 啟動分欄 | row | 在容器中創建一個新的水平區塊，準備進行內容分欄。 |不顯示目標效果參考
| 1-4 | 自動填充 | col | 將一個元件放入 row 中，讓它自動佔滿所有可用空間 (單一區塊)。 |https://www.starbucks.com.tw/home/index.jspx|不顯示目標效果參考
| 1-5 | 通用類別 | bg-white | 設定背景顏色，觀察容器與內容的差異。 |https://www.creatures.co.jp/
| 1-6 | 雙欄對等 | col | 將兩個產品卡片放入 row 中，讓它們平均分配為兩個等寬區塊。直接在 col 上設定背景色，觀察與下一關的差異。 |https://www.dintaifung.com.tw/|
| 1-7 | 多包一層 | col | 了解 Grid System 的運作原理：col 本身有預設的 padding (gutter)，若要讓內容有背景色且不貼齊邊界，應在 col 內多包一層。 |https://www.coldstone.com.tw/product/seasonal.html|
| 1-8 | 三欄佈局 | col | 將三個服務圖標放入 row 中，平均分成三個等寬區塊。 |https://www.umai.tw/|
| 1-9 | 五等份挑戰 | col | 將五個步驟說明放入 row 中，讓它們等寬並排。 |https://tm.ccl.ttct.edu.tw/|
| 1-10 | 多筆資料 | col-4 | 若要呈現第二列以後的資料，可以使用 col-* 固定區塊寬度 |https://www.crun.com.tw/news.php?act=list&cid=1|
| 1-11 | 左窄右寬 | col-4, col-8 | 創建一個左側較窄、右側較寬的佈局：左側佔 4 欄，右側佔 8 欄。 |https://www.mos.com.tw/member/activity.html|
| 1-12 | 左寬右窄 | col-7, col-5 | 創建管理者後台常見的佈局：主要數據表格佔 7 欄，操作按鈕區佔 5 欄。 |https://www.chimeimuseum.org/special-exhibition/68a68f0a422a6/68a68fa1d1a3b|
| 1-13 | 若超過12 | col | 觀察當使用自動欄位 (col) 數量過多時的行為。 |不顯示目標效果參考
| 1-14 | 若加總超過12 | col-4, col-9 | 當指定寬度的欄位加總超過 12 時，多出的欄位會自動換行。 |不顯示目標效果參考
| 1-15 | 巢狀網格 | col-4, col-8, col-6 | 在欄位中可以再放入一個 row，實現更細緻的佈局。 |https://kpmc.com.tw/program/|


### 主題二：間距與對齊
| 關卡 | 標題 | 答案 (Class) | 說明 |參考網址 |
| :--- | :--- | :--- | :--- |
| 2-1 | 水平居中 | mx-auto | 將一個固定寬度的區塊 (如登入表單) 在頁面上水平置中。 |
| 2-2 | 文字置中 | text-center | 將標題文字對齊置中。 |
| 2-3 | 底部外擴 | mb-4 | 調整圖片區塊的下外邊距 (Margin Bottom) 為級別 4，與下方內容拉開距離。 |
| 2-4 | 頂部留白 | pt-5 | 調整標題的上內邊距 (Padding Top) 為級別 5 (最大間距)。 |
| 2-5 | 垂直對齊 | align-items-center | 將 row 內所有分欄（如圖標和文字）在垂直方向上對齊到中心。 |
| 2-6 | 均勻分佈 | justify-content-around | 將一組按鈕水平放置，並確保它們之間及邊緣都有平均間隔。 |

### 主題三：響應式設計
| 關卡 | 標題 | 答案 (Class) | 說明 |參考網址 |
| :--- | :--- | :--- | :--- |
| 3-1 | 中斷點分割 | col-12, col-md-6 | (RWD) 在桌面 (md) 尺寸下，將兩張卡片並排 (各佔 6 欄)，但在手機 (xs) 上必須堆疊。 |
| 3-2 | 順序反轉 | order-first, order-md-last | (RWD) 在桌面尺寸下，側邊欄放在右邊；但在手機上，側邊欄必須移到主內容上方。 |
| 3-3 | 欄位位移 | offset-3 | 將一個佔 6 欄的表單，向右側移動 3 欄的距離，使其在容器中置中。 |
| 3-4 | 消除間距 | g-0 | 消除圖片畫廊中所有 row 與 col 之間的預設邊距 (gutter)，實現無縫接合。 |
| 3-5 | 特定隱藏 | d-none, d-lg-block | (RWD) 隱藏手機上複雜的日期選擇器，只在大型桌面 (lg) 尺寸上顯示。 |

### 主題四：圖片處理附錄
| 關卡 | 標題 | 答案 (Class/Style) | 說明 |
| :--- | :--- | :--- | :--- |
| 4-1 | 響應式圖片 | img-fluid | 使用 Bootstrap 內建的響應式圖片類別，讓圖片自動適應容器寬度。 |
| 4-2 | 背景圖片技術 | bg-image-card | 使用 CSS background-image 替代 img 標籤，提供更好的圖片控制和佈局彈性。 |
| 4-3 | Object-Fit 裁切 | img-cover | 使用 object-fit 屬性控制圖片在容器中的顯示方式，解決圖片變形問題。 |
| 4-4 | 固定比例容器 | ratio-container | 使用 padding-bottom 技術創建固定比例的圖片容器。 |

### 主題五：表單設計
| 關卡 | 標題 | 答案 (Class/Tag) | 說明 |
| :--- | :--- | :--- | :--- |
| 5-1 | 表單基礎 | form | 了解原生 HTML 表單結構，使用 form 標籤包裹輸入元件。 |
| 5-2 | 標籤關聯 | for, id | 使用 for 屬性將 label 與 input 關聯，提升無障礙體驗。 |
| 5-3 | 資料傳送 | name | name 屬性是後端接收資料的關鍵。 |
| 5-4 | 表單樣式 | form-label, form-control | 套用 Bootstrap 的標準表單樣式。 |
| 5-5 | 下拉選單 | form-select, disabled | 美化 Select 元素並設定禁用狀態。 |
| 5-6 | 核取與單選 | form-check-input | 自定義 Checkbox 和 Radio 樣式。 |
| 5-7 | 輸入群組 | input-group | 製作商品數量增減器 (- 1 +)。 |
| 5-8 | 水平表單 | col-2, col-10 | 利用 Grid System 排列標籤與輸入框。 |

### 主題五附錄：表單驗證
| 關卡 | 標題 | 答案 (Class/Tag) | 說明 |
| :--- | :--- | :--- | :--- |
| 5-9 | 驗證準備 | needs-validation | 為 form 標籤添加 needs-validation 類別。 |
| 5-10 | 關閉預設 | novalidate | 添加 novalidate 屬性以關閉瀏覽器預設的驗證氣泡框。 |
| 5-11 | 必填欄位 | required | 在 input 上添加 required 屬性。 |
| 5-12 | 格式限制 | minlength | 使用 HTML5 屬性如 minlength 觸發驗證。 |
| 5-13 | 錯誤訊息 | invalid-feedback | 添加 .invalid-feedback 區塊顯示錯誤訊息。 |
| 5-14 | 成功訊息 | valid-feedback | 添加 .valid-feedback 區塊顯示成功訊息。 |
| 5-15 | 啟用驗證 | was-validated | 使用 JavaScript 加上 was-validated 類別來顯示結果。 |

### 主題六：定位與覆蓋
| 關卡 | 標題 | 答案 (Class) | 說明 |
| :--- | :--- | :--- | :--- |
| 6-1 | 固定導覽列 | fixed-top | 將導覽列固定在視窗頂部，不隨頁面捲動而移動。 |
| 6-2 | 回到上方按鈕 | position-fixed, bottom-0, end-0 | 製作一個固定在右下角的「回到上方」按鈕。 |
| 6-3 | 徽章標記 | position-absolute, top-0, start-100, translate-middle | 將通知徽章 (Badge) 定位在按鈕的右上角邊緣。 |
| 6-4 | 懸停覆蓋層 | position-relative, position-absolute | 製作卡片懸停時顯示的遮罩層 (Overlay)。 |
| 6-5 | 全螢幕覆蓋 | position-fixed, top-0, bottom-0, start-0, end-0 | 製作全螢幕的遮罩層或 Loading 畫面。 |

## 技術備註
* 請用 modal 面板提示掛載 bootstrap css 和 js
* 每個關卡包含：
    *   **ID**: 關卡編號
    *   **Title**: 關卡標題
    *   **Description**: 任務描述
    *   **Hint**: 提示訊息
    *   **HTML Template**: 題目 HTML 模板
    *   **Inputs**: 預期答案
    *   **Preview**: 預覽 HTML
    *   **Reference Image**: 參考圖片 URL
    *   **Bootstrap Manual**: 官方文件連結

## 待辦事項 (Todo List)

### 已完成 (Completed)
- [x] 建立專案結構
- [x] 實作基礎網格系統關卡 (1-1 ~ 1-14)
- [x] 實作間距與對齊關卡 (2-1 ~ 2-7)
- [x] 實作響應式設計關卡 (3-1 ~ 3-5)
- [x] 實作圖片處理附錄關卡 (4-1 ~ 4-4)
- [x] 實作表單設計關卡 (5-1 ~ 5-15)
- [x] 實作定位與覆蓋關卡 (6-1 ~ 6-5)
- [x] 修正 1-6 關卡為不嵌套結構，以對比 1-7
- [x] 調整 1-11 為左窄右寬 (col-4, col-8)
- [x] 調整 1-12 為左寬右窄 (col-10, col-2)
- [x] 調整 1-7 為兩欄配置並說明巢狀結構
- [x] 新增 CSS 補充說明功能 (顯示底層 CSS 規則)

### 執行中 (In Progress)
- [ ] 測試所有關卡流程與正確性

### 未完成 (Not Started)
- [ ] 開啟 GitHub Pages 功能 (等關卡整理好後設定)
- [ ] 優化手機版顯示體驗
- [ ] 增加更多進階 Bootstrap 元件關卡