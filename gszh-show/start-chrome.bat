@echo off
set rootPath=%~dp0
if exist data.js (
	REM start /wait chrome.exe --chrome --kiosk --app=%rootPath%\web\html\index.html --incognito --disable-pinch --overscroll-history-navigation=0
	REM start a.vbs
) else (
	start /wait up_data.bat 
)
start /wait chrome.exe --chrome --kiosk --app=%rootPath%\web\html\index.html --incognito --disable-pinch --overscroll-history-navigation=0 
start a.vbs
exit