# 배포 가이드

## GitHub Secrets 설정

GitHub 저장소의 Settings > Secrets and variables > Actions에서 다음 Secrets를 추가해야 합니다:

1. **SSH_HOST**: `218.50.153.80`
2. **SSH_USER**: `ihh`
3. **SSH_PASSWORD**: SSH 접속 비밀번호
4. **SSH_PORT**: `22` (기본값, 필요시 변경)

## 배포 프로세스

1. `main` 브랜치에 코드를 푸시하면 자동으로 배포가 시작됩니다.
2. GitHub Actions가 Docker 이미지를 빌드합니다.
3. 이미지를 서버로 전송하고 배포합니다.

## 수동 배포 (서버에서 직접)

서버에 SSH 접속 후:

```bash
# Docker 이미지 빌드
docker build -t crm-message-client:latest .

# 컨테이너 실행
docker-compose up -d

# 또는 직접 실행
docker run -d \
  --name crm-message-client \
  --restart unless-stopped \
  -p 3000:3000 \
  crm-message-client:latest
```

## 컨테이너 관리

```bash
# 로그 확인
docker logs -f crm-message-client

# 컨테이너 중지
docker stop crm-message-client

# 컨테이너 시작
docker start crm-message-client

# 컨테이너 재시작
docker restart crm-message-client

# 컨테이너 삭제
docker rm -f crm-message-client
```

## 주의사항

- SSH 비밀번호는 GitHub Secrets에 안전하게 저장됩니다.
- 보안을 위해 SSH 키 기반 인증을 사용하는 것을 권장합니다.
- 서버에 Docker와 Docker Compose가 설치되어 있어야 합니다.

