@echo off
cd /d "%~dp0"
echo.
echo  Projeto Vimeal - servidor local
echo  Pasta: %CD%
echo  O navegador deve abrir sozinho quando o Vite estiver pronto.
echo  Se nao abrir, use: http://127.0.0.1:5173  (ou a porta que o Vite mostrar)
echo.
npm run dev
pause
