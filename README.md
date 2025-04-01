# Pose-Controlled T-Rex Game 🦖

TensorFlow.js 기반의 실시간 포즈 인식 모델을 활용해, 팔 동작으로 크롬 공룡 게임을 제어하는 프로젝트입니다.  
기존의 키보드 기반 r-rex 게임에 자세 인식을 결합하여, 실제 사람의 **왼손/오른손 동작으로 점프 및 앉기** 동작을 구현했습니다.

## 📸 시연 예시

- 왼손을 들면 → 점프 (공룡이 뛰어넘음)
- 오른손을 들면 → 앉기 (공룡이 숙여서 장애물 통과)
- 점수는 1초에 1점씩 증가
- 게임이 끝나면 점수가 멈추고, 최고 점수가 자동 저장됩니다.

## 🗂️ 파일 구조

```
📁 project-root/
│
├── assets/               ← 공룡 이미지 등 리소스 폴더
├── dino-game.html       ← 메인 HTML 파일 (게임 실행)
├── index.css            ← 스타일 시트
├── index.html           ← 포즈 모델이 실행되는 초기 진입 페이지
└── index.js             ← 포즈 + 게임 연동 스크립트
```

## 🚀 실행 방법

1. VS Code에서 해당 폴더 열기  
2. `Live Server` 확장 프로그램 설치 (이미 설치되어 있다면 건너뛰기)  
3. `index.html`을 열고, 마우스 오른쪽 클릭 → **"Live Server로 열기"** 선택  
4. 초기화면에서 "게임 시작" 버튼을 누르면 `dino-game.html`이 열리며 게임이 시작됩니다.

## 🎮 주요 기능

- TensorFlow.js PoseNet 모델을 활용한 **실시간 손 동작 인식**
- 손을 들면 공룡이 점프, 손 내리면 착지
- 점프 중 중복 방지 로직 적용
- 점수 시스템: 1초마다 점수 1점씩 증가
- 최고 점수 기록 유지
- 장애물 충돌 시 게임 종료 및 점수 리셋

---

## 🔧 기술 스택

- HTML, CSS, JavaScript
- TensorFlow.js PoseNet
- Live Server (로컬 테스트용)

---

## 🔗 원본 프로젝트(r-rex) 출처

이 프로젝트는 다음 자료를 참고하거나 개조하여 제작되었습니다:

- [rishavkapoor / t-rex-runner](https://github.com/rishavkapoor/t-rex-runner): 크롬 공룡 게임 클론을 기반으로 포크 및 개조
- [TensorFlow.js PoseNet](https://www.tensorflow.org/js/models): 실시간 포즈 인식 모델
- 손 제스처 기반 인터랙션 구현은 직접 커스터마이징된 로직 기반입니다.

## ⚠️ 라이선스 및 저작권

- 사용된 원본 공룡 게임(`t-rex-runner`)은 MIT License 하에 배포된 공개 소스이며, 상업적 목적이 아닌 **교육 및 실습용**으로 활용됩다.
- 포즈 인식 모델(TensorFlow.js PoseNet)은 Google의 공식 라이브러리이며, 라이센스 문제 없이 웹 프로젝트에서 사용 가능합니다.
- 코드 및 리소스 일부는 수정 및 커스터마이징되었으며, README 및 코드 주석에 출처를 명확히 표기했습니다.

## ✍️ 제작자

- 이 프로젝트는 전주대학교 인공지능학과 학부생이 진행하였습니다.
- 실시간 포즈 인식을 통한 사용자-게임 인터랙션 탐구 및 TensorFlow.js 실습 목적으로 구현되었습니다.
