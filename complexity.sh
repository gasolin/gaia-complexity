#git remote update
#git merge upstream/master
cd ..
repo sync

plato -d reports/bluetooth -t "Bluetooth Source Analysis" apps/bluetooth/js/*.js
plato -d reports/browser -t "Browser Source Analysis" apps/browser/js/*.js
plato -d reports/calendar -t "Calendar Source Analysis" apps/calendar/js/*.js
plato -d reports/camera -t "Camera Source Analysis" apps/camera/js/*.js
plato -d reports/clock -t "Clock Source Analysis" apps/clock/js/*.js

plato -d reports/costcontrol -t "CostControl Source Analysis" apps/costcontrol/js/*.js
plato -d reports/email -t "Email Source Analysis" apps/email/js/*.js
plato -d reports/fm -t "FM Source Analysis" apps/fm/js/*.js
plato -d reports/gallery -t "Gallery Source Analysis" apps/gallery/js/*.js
plato -d reports/homescreen -t "Homescreen Source Analysis" apps/homescreen/js/*.js
plato -d reports/keyboard -t "Keyboard Source Analysis" apps/keyboard/js/*.js
plato -d reports/music -t "Music Source Analysis" apps/music/js/*.js
plato -d reports/settings -t "Settings Source Analysis" apps/settings/js/*.js
plato -d reports/sms -t "SMS Source Analysis" apps/sms/js/*.js
plato -d reports/video -t "Video Source Analysis" apps/video/js/*.js
plato -d reports/wallpaper -t "Wallpaper Source Analysis" apps/wallpaper/js/*.js

plato -d reports/system -t "System Source Analysis" apps/system/js/*.js
plato -d reports/emergencycall -t "EmergencyCall Source Analysis" apps/system/emergency-call/js/*.js
plato -d reports/contacts -t "Contacts Source Analysis" apps/communications/contacts/js/*.js
plato -d reports/dialer -t "Dialer Source Analysis" apps/communications/dialer/js/*.js
plato -d reports/ftu -t "FTU Source Analysis" apps/communications/ftu/js/*.js
