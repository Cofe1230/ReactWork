# 리액트 수업

## 프로젝트 만들기
* **node 설치**  
https://nodejs.org/ko/download
* **생성**  
```
npx create-react-app [프로젝트 이름]
```
* **오류**  
npm 못찾을때 
```
npm uninstall -g create-react-app  
npm install create-react-app  
``` 
* **프로젝트 시작**  
```
npm start
```
## [first-app](first-app#first-app)
* **Counter.js**  
Class 작성, class 안에 숫자 연산 합수 작성후 constructor에서 bind로 연결
* **Counter2.js**  
Class 작성, 숫자연산을 화살표 함수로 작성, 구조 분해 할당, 생명주기  
* **Device.js**  
Class 작성, 컴포넌트 생성  
* **Food.js**  
Function 작성, map을 사용하여 배열 전체 출력  
* **Movie.js**  
Class 작성, app.js(상위)에서 title에 내용을 넣고 movie.js에서 출력 (props)  
* **MyDevice.js**  
MyDevice, MyDevice2 함수로 작성 MyDevice1 Class작성 app.js(상위)에 저장된 데이터를 MyDevice(하위)에서 사용  
## [app02-phone](app02-phone#app02-phone)
<details>
<summary>실행화면</summary>

## 실행화면
![](/assets/images/230907092519.png)
</details>

### 코드
상위(app.js)에 있는 데이터, 함수를 하위 component에서 사용하여 데이터 출력 및 수정
* **App.js**  
초기 데이터, 추가 및 삭제 함수  
* **PhoneForm.js**  
이름, 전화번호를 입력, 입력하면 상위 컴포넌트인 app.js에 데이터를 추가한다  
* **PhoneList.js**
상위 component에서 데이터, 함수를 받아와서 데이터 배열 개수만큼 PhoneInfo를 사용해 전체 데이터를 출력한다
* **PhoneInfo.js**  
한 사람에 대한 자세한 내용을 출력, 삭제하는 component  
## [app03_comment](app03_comment#app03_comment)
<details>
<summary>실행화면</summary>

## 실행화면
### CommentList  
![](/assets/images/230907092849.png)  
### TodoList  
![](/assets/images/230907092859.png)  
### NotificationList  
![](/assets/images/230907092911.png) 
</details>

### 코드
* **app.js(Class)**  
  CommentList, TodoList, Notification 세가지 페이지 표현
  - **CommentList.js(function)**  
    표현할 list 함수 내에 존재, list 개수만큼 map을 사용하여 comment를 실행하고 필요한 data를 넘긴다
    - **Comment.js(function)**  
    comments 하나 하나 표현하는 함수 내부에 style이 있다 
  - **TodoListTemplate.js(function)**  
    사용하는 data, 함수가 app.js에 있어 상위에서 끌어와서 사용  
    ```javascript
    <TodoListTemplate form=Form...>
        <TodoItemList...>
    </TodoListTemplate>
    ```
    Form은 {form}으로 TodoItemList는 {children}으로 사용  
    - **Form.js(function)**  
    텍스트를 입력하고 추가하면 app.js에 있는 list에 추가
    - **TodoItemList.js(class)**  
    List 개수만큼 TodoItem
        - **TodoItem.js(class)**  
        TodoItem 출력 형식 외부css사용
  - **NotificationList.js(class)**  
    생명주기, 내부에 있는 List를 componentDidMount 내부에서 setInterval을 사용하여 1초에 하나씩 배열에 넣고 List는 class에서 바로 출력  
    - **Notification.js(class)**  
    List 출력하는 Item 형식, 내부CSS, 생명주기  
## [app04_hook](app04_hook#app04_hook)
<details>
<summary>실행화면</summary>

## 실행화면
### InputSample
![](/assets/images/230907092936.png)
### InputTest, InputTestClass
![](/assets/images/230907092944.png)
### Say
![](/assets/images/230907092952.png)
### Counter
![](/assets/images/230907093009.png)    
### Parent
![](/assets/images/230907093018.png)


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
        ```javascript
        const changeColor = (color)=>{
            setColor(color)
        }
        const onClickChange = (e)=>{
            setColor(e.target.name)
        }
        ```
        ```javascript
        <button onClick={()=>changeColor('red')}>빨간색</button>
        <button name="pink" onClick={onClickChange}>분홍색</button>
        ```
    * **Counter(function)**  
    버튼 클릭 이벤트 처리 연습  
        ```javascript
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
        ```javascript
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
            ```javascript
                foodILike.map((food)=>{
                    return(
                        <Food key={food.id} food={food}/>
                    )
                    
                })
            ```
            로받아왔을때 처리  
        * **Food1.js(function)**
            ```javascript
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

## [app05_movie](app05_movie#app05_movie)
## 라이브러리 설치
```
npm install axios react-router-dom bootstrap react-bootstrap
```
package.json 에서 라이브러리 확인 가능
## 실행화면
<details>
<summary>접기</summary>

### InputSample
![](/assets/images/230907092936.png)

</details>

## 내용
https://yts.mx/api/v2/list_movies.json?sort_by=rating  
에서 movies에 필요한 정보만 출력  

## 코드
 
### json 읽어서 배열에 저장 하는 방법  
#### Home.js  
axios 사용
```jsx
import axios from 'axios'

getMovies = async()=>{
        const{
            data  :{
                data : {movies}
            }
            
        } = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`)
        console.log({movies})
        this.setState({movies,isLoading:false})
    } 
```
외부 라이브러리 없이 jsx만 사용
```jsx
getMovies = ()=>{
        fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`)
        .then((res)=>res.json())
        .catch(err=>console.log(err))
        .then((res)=>{
            console.log(res.data.movies)
            this.setState({movies:res.data.movies,isLoading:false})
        })
    }
```
함수 실행
```jsx
componentDidMount(){
        this.getMovies();
    }
```
### 메뉴바 제작  
### 리엑트에서 링크 연결하는 방법  
#### Navigation.js  
* react-router-dom을 사용하여 Link 연결  
* to를 사용하여 위치 지정  
* Home을 누르면 /로 이동한다.
```jsx
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">app06__About</Link>
            <Link to="/poster">Poster</Link>
        </div>
    )
}
```

#### App.js  
* Route에 들어간 path경로로 element가 실행된다  
* 아래의 코드에서는 /로 들어갈시 \<home/> 이 실행된다
```jsx
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/about"} element={<About/>}></Route>
        <Route path={"/poster"} element={<Poster/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
```
## [app06_movie](app05_movie#app06_movie)
05를 hook으로  
app07  
spring server 연결  
spring data jpa  
app08  
app07 연습  
spring mybaits  
spring server mapper options - 저장할때 저장 객체를 리턴시키는 방법  
app09  
부트스트랩 적용  
book-blog
useNavigate, useParams  
리액트 폴더 구조  
https://velog.io/@sisofiy626/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0  

