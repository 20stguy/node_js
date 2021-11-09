
# 문법
## 내보내기 불러오기
### export & require
다른 파일에서 함수등을 불러올때
1. 내보내기 
   1. export 변수명 = 함수명으로 내보낸다
   2. module.exports = {함수명}
2. 불러오기
   1. const 변수명 = require("./경로")

### dependency
1. export로 함수 내보내기
2. index에서 받아서 require없이도 dependency로 함수 돌아가게 할 수 있다
