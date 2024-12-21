# Front-End Present

## 目的
-   Cover 網頁Layout
-   製作 網頁

## Cover 網頁
-  [LinkedIn]  領英公司 : 社群網路服務
-  [openmuseum]  開放博物館 : 數位博物園區

## 製作中網頁 : sparrow.html
### 使用技術
- SEO優化 : 參考"開放博物館" Head Tag
- CSS 宣告變數全域變數
- JavaScript 互動設計
- RWD 設計
- 連接API

## Cover_LinkedIn 網頁切版筆記
### class 使用時機 : 
一種 class 表示一種 排版效果。
```
.items-center{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
```
```
.importan-text{
    color: #b24020;
}
```

### calc() : 
calc() 函式可以在聲明CSS屬性值時執行運算。
運算子前後必須要有空白字符。
```
right: calc((1128px - 100vw) / 2);
```

### margin-left: auto
```
margin-left:auto;
```
可以得到靠右對齊（left把所有可用空間拿走了）。


### flex-basis、flex-grow、flex-shrink 屬性介紹
flex 也是將 CSS 設定於子元素上，個別調整子元素長度「伸展」、「壓縮」的比例以及基本大小。 flex 是由三個屬性組成的，分別是「flex-grow」、「flex-shrink」和「flex-basis」，如果 flex 只填了一個數值，那麼預設是調整「flex-grow」效果。
1. flex-grow 子元素「伸展」比例分配：數字，無單位，預設值為 0，不可為負值。
flex-grow 尚未進行設定時，不會將剩餘空間分配給子元素做長度「伸展」，設定為 1 長度會進行彈性變化。分配的比例會依照設定的數值進行配置。
2. flex-shrink 子元素「壓縮」比例分配：數字，無單位，預設值為 1，不可為負值
flex-shrink 尚未進行設定時，會按照數字「壓縮」比例分配。如果不想要被壓縮的話，可以設定數值為 0。
3. flex-basis 子元素基本大小：預設值為 0。

範例 1:
```
.red{
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100px;
}
.blue{
  flex-grow: 2;
  flex-shrink: 2;
  flex-basis: 100px;
}

```
範例 2:
```
.num-1{
  flex-grow: 2;
  flex-basis: 100px;
}
.num-2{
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 100px;
}
```


### row-gap / column-gap / gap
1. 只能使用長度值和百分比，不能使用負值、fr、minmax()等。
2. 用這個方法設定的各行或各列的間距一定會都相同，不會有單一行或列的尺寸不同，那就得另外用 margin 做間距了。
3. 另外在設定 justify-content 和 align-content 時可能會改變 grid gap 間隔的值。
```
display: flex;
flex-direction: row;
flex-wrap: wrap;
column-gap: <length> | <percentage>;
row-gap: <length> | <percentage>;
```
```
.container{
  column-gap: 10px;
  row-gap: 20px;

  /*等同於*/
  gap: 20px 10px;
}
```










[Ladyflavor]: https://www.ladyflavor.com/ "Ladyflavor"
[LinkedIn]:https://tw.linkedin.com/ "LinkedIn"
[openmuseum]:https://openmuseum.tw/ "開放博物館"
[syntrend]:https://www.syntrend.com.tw/ "三創生活"

  
