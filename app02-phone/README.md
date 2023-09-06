# app02-phone
## 실행화면
![react01](https://github.com/Cofe1230/ReactWork/assets/139449938/dcd6e626-2363-437f-913e-63d0f34e0868)
## 코드
상위(app.js)에 있는 데이터, 함수를 하위 component에서 사용하여 데이터 출력 및 수정
* **App.js**  
초기 데이터, 추가 및 삭제 함수  
* **PhoneForm.js**  
이름, 전화번호를 입력, 입력하면 상위 컴포넌트인 app.js에 데이터를 추가한다  
* **PhoneList.js**
상위 component에서 데이터, 함수를 받아와서 데이터 배열 개수만큼 PhoneInfo를 사용해 전체 데이터를 출력한다
* **PhoneInfo.js**  
한 사람에 대한 자세한 내용을 출력, 삭제하는 component  