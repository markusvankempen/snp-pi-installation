#https://www.axllent.org/docs/view/nodejs-service-with-systemd/#user-comments

sudo cp *.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable playbulb.service
sudo systemctl start playbulb.service
sudo systemctl status playbulb.service
sudo systemctl stop playbulb.service
sudo systemctl restart playbulb.service

sudo systemctl restart hciuart

time zone
rm /etc/localtime
ls -s /usr/share/zoneinfo/Canada/Eastern /etc/localtime

keyboard

cat  /etc/default/keyboard
