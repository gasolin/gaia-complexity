#git remote update
#git merge upstream/master
cd ..
repo sync

plato -d reports/bluetooth apps/bluetooth/js/*.js
plato -d reports/browser apps/browser/js/*.js
plato -d reports/calendar apps/calendar/js/*.js
plato -d reports/camera apps/camera/js/*.js
plato -d reports/clock apps/clock/js/*.js

plato -d reports/costcontrol apps/costcontrol/js/*.js
plato -d reports/email apps/email/js/*.js
plato -d reports/fm apps/fm/js/*.js
plato -d reports/gallery apps/gallery/js/*.js
plato -d reports/homescreen apps/homescreen/js/*.js
plato -d reports/keyboard apps/keyboard/js/*.js
plato -d reports/music apps/music/js/*.js
plato -d reports/settings apps/settings/js/*.js
plato -d reports/sms apps/sms/js/*.js
plato -d reports/video apps/video/js/*.js
plato -d reports/wallpaper apps/wallpaper/js/*.js

plato -d reports/system apps/system/js/*.js
plato -d reports/emergencycall apps/system/emergency-call/js/*.js
plato -d reports/contacts apps/communications/contacts/js/*.js
plato -d reports/dialer apps/communications/dialer/js/*.js
plato -d reports/ftu apps/communications/ftu/js/*.js