# Riiid! 인터뷰

## 절차
Riiid는 지원자분의 역량과 fit을 효율적으로 파악하기 위하여, 상호적인 기술면접을 진행하고자 합니다.
주어진 시간까지 1차 작업을 하고 현 Riiid 개발자들의 feedback을 반영하여 최종적으로 작업을 하는 방식입니다.
면접과정을 통하여 지원자분 또한 Riiid 웹개발팀의 협업 과정에 대하여 알아가실수 있기 바랍니다.

1. 해당 Repo를 clone 한다.
```
$ git clone https://github.com/GITHUB_ID/REPOSITORY_NAME-GITHUB_ID.git
$ cd REPOSITORY_NAME-GITHUB_ID
```

2. 별도의 branch를 생성하여 작업한다.
```
$ git checkout -b BRANCH_NAME
$ git add/commit/push 
```

3. 1차 제출시 작업중인 branch를 master branch로 [Pull Request(PR)](https://help.github.com/articles/about-pull-requests/)생성를 한다. 
  - 현재 Riiid에서 PR을 통해 같이 작업하는 방식의 [예시](https://apply.riiid.app/677) 입니다.
4. Riiid 개발자들이 PR에 남긴 feedback을 반영하여 최종적으로 기술면접을 수정/제출한다.

# SNAKE!

## 문제
아직 버그 가득한 [스네이크 게임](https://www.google.co.kr/search?q=%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC+%EA%B2%8C%EC%9E%84&oq=%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC+%EA%B2%8C%EC%9E%84&aqs=chrome..69i57j69i60.304j0j4&sourceid=chrome&ie=UTF-8)을 완성해 주세요!


### 필수 항목
1. Snake의 움직임을 구현해주세요
2. Snake가 World를 벗어날 경우를 구현해주세요
3. Snake를 조종할 수 있게 키액션을 구현해주세요
4. 자유로운 형태의 점수판
  - 예시
    - 실시간으로 먹은 사과의 갯수를 보여줌
    - 게임 오버시 보여준다
5. 다시시작 버튼(게임을 초기 상태로 돌려놓음)

### 보너스
아래 문제는 선택적으로 풀어보실수있는 질문입니다. 원하시는 부분만 자유롭게 작업하시면 됩니다.

1. 사과를 먹을수록 난이도를 어려워지도록 하세요
2. 개별적인 난이도와 스테이지 개념을 추가해 보세요
3. 원하시는 부가 기능을 추가해 보세요! GO WILD!
