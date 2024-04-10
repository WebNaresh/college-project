@echo off

REM Check if anything is listening on port 3001
netstat -ano | findstr :3001 > nul
if errorlevel 1 (
  echo Nothing is listening on port 3001. Starting Next.js application...
  cd /d "D:\Naresh-College-Project"
  npm run dev
) else (
  echo Something is already listening on port 3001. Exiting...
)
