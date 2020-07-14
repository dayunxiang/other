@echo off
chcp 65001
setlocal enabledelayedexpansion
set rootPath=%~dp0
set dataFile=%rootPath%temp
rem 定义可识别的文件后缀名
set suffixPicture=.jpg.jpeg.gif.png.bmp
set suffixVidio=.mpeg4.mp4.ogv.webm.avi.wmv.mov
set suffixPPt=.ppt.pptx
set suffixUrl=.url

for /d %%i in (*) do (
	if "%%i"=="menus" (
		echo Root directory : %rootPath%%%i
		echo.
		set r=%rootPath%%%i
		set r=.\!r:%~dp0=!
		echo Root menus:!r!
		echo "menus": [>%dataFile%
		echo.
		set /a max2=0
		set /a flag2=0
		for /d %%j in (%%i\*) do (
			echo %%~nj|findstr "^[0-9]*\-" >nul &&(
				set /a flag2=1+!flag2!
				if !flag2! GTR 1 echo ,>>%dataFile%
				echo {>>%dataFile%
				call :replaceStr %%~nj str2
				echo Folder:!str2!
				echo "text": "!str2!",>>%dataFile%
				call :returnIndex !max2! index newMax %%~nj
				set max2=!newMax!
				echo "index":!index!,>>%dataFile%
				set /a iconFlag=1
				for /f "tokens=* delims=" %%n in ('dir /a-d /b /on %%j') do (
					if "%%~nn"=="icon" (
						if !iconFlag! equ 1 (
							if exist %%j\%%n (
								if "%%~xn"==".png" ( 
									echo "iconType":1,>>%dataFile%
									echo "icon":".\%%j\%%~nn%%~xn",>>%dataFile%
								) else (
									echo "iconType":2,>>%dataFile%
									set si=%%~xn
									set si=!si:.=!
									echo "icon":"!si!",>>%dataFile%
								) 
								set /a iconFlag=2
							)
						)
					)
				)
				if !iconFlag! equ 1 (
					echo "iconType":2,>>%dataFile%
					echo "icon":"",>>%dataFile%
				)
				echo "resource": [>>%dataFile%
				set "nextPath=%rootPath%%%j\"
				call :traverseFolder !nextPath!
				echo ]>>%dataFile%
				echo }>>%dataFile%
				echo.
			)
		)
		for /d %%j in (%%i\*) do (
			echo %%~nj|findstr "^[0-9]*\-" >nul ||(
				set /a flag2=1+!flag2!
				if !flag2! GTR 1 echo ,>>%dataFile%
				echo {>>%dataFile%
				echo Folder:%%~nj
				echo "text": "%%~nj",>>%dataFile%
				set /a max2=1+!max2!
				echo "index":!max2!,>>%dataFile%
				set /a iconFlag=1
				for /f "tokens=* delims=" %%n in ('dir /a-d /b /on %%j') do (
					if "%%~nn"=="icon" (
						if !iconFlag! equ 1 (
							if exist %%j\%%n (
								if "%%~xn"==".png" ( 
									echo "iconType":1,>>%dataFile%
									echo "icon":".\%%j\%%~nn%%~xn",>>%dataFile%
								) else (
									echo "iconType":2,>>%dataFile%
									set si=%%~xn
									set si=!si:.=!
									echo "icon":"!si!",>>%dataFile%
								) 
								set /a iconFlag=2
							)
						)
					)
				)
				if !iconFlag! equ 1 (
					echo "iconType":2,>>%dataFile%
					echo "icon":"",>>%dataFile%
				)
				echo "resource": [>>%dataFile%
				set "nextPath=%rootPath%%%j\"
				call :traverseFolder !nextPath!
				echo ]>>%dataFile%
				echo }>>%dataFile%
				echo.
			)
		)
		echo ]>>%dataFile%
	)
	echo.
)
call :backSlash %dataFile%
echo Run complete.
rem pause>nul
chcp 936
goto :end

:replaceStr
rem 内容替换（例如：1-照片 变为 照片）
FOR /F "delims=-" %%j IN ("%1") DO (
	echo %%j|findstr "^[0-9]*$" >nul && (
		set name=%1
		set name=!name:%%j-=!
		set %2=!name!
	)
)
goto :eof

:traverseFolder
rem 遍历指定文件夹下的文件
if "x%1x" == "xx" echo 未指定需遍历的文件夹 && goto :eof
set /a flag=0
set /a max1=0
rem 遍历名称规范的文件
FOR /F "delims=" %%i IN ('dir /a-d /b /on %1') do (
	if not "icon"=="%%~ni" (
		rem if not ".ico"=="%%~xi" (
			echo %%~ni|findstr "^[0-9]*\-" >nul &&(
				set s=%1%%i
				set s=!s:%~dp0=!
				set /a flag=1+!flag!
				if !flag! GTR 1 echo ,>>%dataFile%
				echo {>>%dataFile%
				call :replaceStr %%~ni str
				echo file:!str!
				echo "text": "!str!",>>%dataFile%
				call :returnIndex !max1! index newMax %%~ni
				set max1=!newMax!
				echo "index":!index!,>>%dataFile%
				call :returnType %%~xi fileType
				echo "type": !fileType!,>>%dataFile%
				call :getUrl !fileType! !s!
				echo "uri": "!s!">>%dataFile%
				echo }>>%dataFile%
			)
		rem )
	)
)
rem 遍历不规范命名的文件
FOR /F "delims=" %%i IN ('dir /a-d /b /on %1') do (
	if not "icon"=="%%~ni" (
		rem if not ".ico"=="%%~xi" (
			echo %%~ni|findstr "^[0-9]*\-" >nul ||(
				set s=%1%%i
				set s=!s:%~dp0=!
				set /a flag=1+!flag!
				if !flag! GTR 1 echo ,>>%dataFile%
				echo {>>%dataFile%
				echo file:%%~ni
				echo "text": "%%~ni",>>%dataFile%
				set /a max1=1+!max1!
				echo "index":!max1!,>>%dataFile%
				call :returnType %%~xi fileType
				echo "type": !fileType!,>>%dataFile%
				call :getUrl !fileType! !s!
				echo "uri": "!s!">>%dataFile%
				echo }>>%dataFile%
			)
		rem )
	)
)
goto :eof

:returnIndex
rem 返回序列号
set /a %3=%1
set /a indexI=1
FOR /F "delims=-" %%j IN ("%4") DO (
	if !indexI! EQU 1 (
		if %%j gtr %1 set "%3=%%j"
		set %2=%%j
		set indexI=2
	)
)
goto :eof

:backSlash
rem 符号 \ 转 /
if not exist %1 (
	echo json文件生成失败
	goto eof
)
echo var res_data={>%rootPath%data.js
FOR /F "eol= delims=" %%i in (%1) do (
	set s=%%i
	set s=!s:\=/!
	echo !s!>>%rootPath%data.js
)
echo }>>%rootPath%data.js
del %1
goto :eof

:returnType
rem 返回文件类型
if "x%1x"=="xx" set /a %2=5 && goto :eof
(
echo %suffixVidio%|findstr /I %1 >nul && set %2=1
)||(
echo %suffixPicture%|findstr /I %1 >nul && set %2=2
)||(
echo %suffixPPt%|findstr /I %1 >nul && set %2=3
)||(
echo %suffixUrl%|findstr /I %1 >nul && set %2=4
)|| set %2=5
goto :eof

:getUrl
rem 读取url文件内容
if %1 NEQ 4 (
	set %2=.\%2
	goto :eof
)
set "s="
FOR /F "eol= delims=" %%i in (%2) do (
	set s=%%i
)
set "%2=!s!"
goto :eof

:end


exit