# app04_hook
<details>
<summary>실행화면</summary>

## 실행화면
### InputSample
![app04_1](https://github.com/Cofe1230/PyhonPractice/assets/139449938/de5498d5-15ed-48bb-81ed-a9c34181150f)
### InputTest, InputTestClass
![app04_2](https://github.com/Cofe1230/PyhonPractice/assets/139449938/60d64bdb-c232-4989-9962-36db49d856e2)
### Say
![app04_3](https://github.com/Cofe1230/PyhonPractice/assets/139449938/cfb2e9a0-d917-450c-ad44-79528153df24)
### Counter
![app04_4](https://github.com/Cofe1230/PyhonPractice/assets/139449938/3327e850-2a7f-4d56-90ac-9e4b4360ec3e)
### Parent
![app04_5](https://github.com/Cofe1230/PyhonPractice/assets/139449938/25ed746a-1cd2-4878-b1ea-ec0b5547dac5)


</details>

### 코드
* **app.js(function)**  
    * **InputSample(function)**  
    입력하는 순간 입력한대로 {name}, {nickname}, {phone}에 출력  
    function이기 때문에 useState를 사용한다  
    여러개의 변수를 동시에 한 함수에서 처리  
    * **InputTest(function)**  
    기능은 위와 동일하지만 {text}하나만 처리 좀더 간단하게 처리 가능하다
    * **InputTestClass(Class)**
    기능은 동일하다 Class일 경우 state로 처리
    * **Say(function)**  
    버튼 클릭마다 글자나 글자색이 변하는 함수
    버튼 클릭 함수 처리 연습  
        ```
        const changeColor = (color)=>{
            setColor(color)
        }
        const onClickChange = (e)=>{
            setColor(e.target.name)
        }
        ```
        ```
        <button onClick={()=>changeColor('red')}>빨간색</button>
        <button name="pink" onClick={onClickChange}>분홍색</button>
        ```
    * **Counter(function)**  
    버튼 클릭 이벤트 처리 연습  
        ```
        const onIncrease = ()=>{
            setNumber(number+1)
        }
        const onDecrease = ()=>{
            setNumber(number-1)
        }
        const change =(changeNum)=>{
            setNumber(number+changeNum)
        }
        ```
        ```
        <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button><br/>
                <button onClick={()=>change(1)}>1증가</button>
                <button onClick={()=>change(-1)}>1감소</button>
        ```
    * **Parent(function)**  
    내부에 comments foodILike List가 있어 List를 출력  
        * **Child.js(function)**  
        상위(Parent)에서 comment받아와 출력  
        * **Food.js(function)**  
            ```
                foodILike.map((food)=>{
                    return(
                        <Food key={food.id} food={food}/>
                    )
                    
                })
            ```
            로받아왔을때 처리  
        * **Food1.js(function)**
            ```
            foodILike.map((food)=>{
                    return(
                        <Food1 key={food.id}
                            id ={food.id}
                            name = {food.name}
                            rating = {food.rating}
                            image = {food.image}/>
                    )
            })
            ```
            로 받아왔을때 처리