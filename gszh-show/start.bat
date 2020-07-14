@echo off
set rootPath=%~dp0
if exist data.js (
rem	start /wait chrome.exe --chrome --kiosk --app=%rootPath%\web\html\index.html --incognito --disable-pinch --overscroll-history-navigation=0
rem	start a.vbs
) else (
	start /wait up_data.bat 
rem	start /wait chrome.exe --chrome --kiosk --app=%rootPath%\web\html\index.html --incognito --disable-pinch --overscroll-history-navigation=0 
rem	start a.vbs
)

start iexplore.exe -new -k  "%cd%\web\html\index.html"
rem exit