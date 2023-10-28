function adjustImageSize() {
    var image = document.getElementsByid("inner");
    var container = document.getElementsByid("wrapper");
    var containerWidth = container.clientWidth; // 이미지 컨테이너의 너비를 가져옵니다.
    
    // 이미지의 실제 원본 크기 (픽셀)를 설정합니다.
    var originalWidth = 1920; // 이미지의 원본 가로 크기
    var originalHeight = 1080; // 이미지의 원본 세로 크기
    
    // 이미지의 실제 원본 비율을 계산합니다.
    var aspectRatio = originalWidth / originalHeight;
    
    // 이미지의 새로운 높이를 계산하여 설정합니다.
    var newHeight = containerWidth / aspectRatio;
    
    // 이미지의 크기를 설정합니다.
    image.style.width = "100%"; // 이미지의 너비를 100%로 설정합니다.
    image.style.height = newHeight + "px"; // 새로운 높이를 설정합니다.
}

// 페이지가 로드될 때 이미지 크기를 조절합니다.
window.addEventListener("load", adjustImageSize);

// 창 크기가 변경될 때 이미지 크기를 다시 조절합니다.
window.addEventListener("resize", adjustImageSize);
