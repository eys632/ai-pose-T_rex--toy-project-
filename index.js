let video;
let poseNet;
let poses = [];
let leftWrist, leftShoulder, rightWrist, rightShoulder;
let isJumping = false;
let isDucking = false;

function setup() {
  const canvas = createCanvas(640, 480);
  canvas.parent('canvasContainer');
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
  });
}

function modelReady() {
  console.log('PoseNet 모델 로드 완료');
}

function draw() {
  image(video, 0, 0, width, height);

  if (poses.length > 0) {
    const pose = poses[0].pose;
    leftWrist = pose.leftWrist;
    leftShoulder = pose.leftShoulder;
    rightWrist = pose.rightWrist;
    rightShoulder = pose.rightShoulder;

    const leftHandUp = leftWrist.y < leftShoulder.y;
    const rightHandUp = rightWrist.y < rightShoulder.y;

    // 점프 - 왼손을 들고 있는 동안 계속 점프
    if (leftHandUp && !isJumping) {
      triggerJump();
      isJumping = true;
      setTimeout(() => isJumping = false, 100); // 0.1초 후에 다시 점프 가능
    }

    // 앉기 - 오른손을 들고 있을 때만 duck, 내리면 다시 일어남
    if (rightHandUp && !isDucking) {
      triggerDuck(true);
      isDucking = true;
    } else if (!rightHandUp && isDucking) {
      triggerDuck(false);
      isDucking = false;
    }
  }
}

function triggerJump() {
  const keyboardEvent = new KeyboardEvent('keydown', {
    keyCode: 32,
    which: 32
  });
  document.dispatchEvent(keyboardEvent);
  console.log('점프!');
}

function triggerDuck(isDown) {
  const keyCode = 40; // 아래 화살표
  const type = isDown ? 'keydown' : 'keyup';
  const keyboardEvent = new KeyboardEvent(type, {
    keyCode: keyCode,
    which: keyCode
  });
  document.dispatchEvent(keyboardEvent);
  console.log(isDown ? '앉기' : '일어서기');
}
