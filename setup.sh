# Install nvm node.js and npm
# version20180423
echo "SNP PI setup script"
sudo apt-get update
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.9/install.sh | bash
sudo apt-get install npm
nvm install 8.2.1
nvm use 8.2.1
cd ~
git clone https://github.com/markusvankempen/playbulb.git
cd playbulb
mkdir snp00
cd snp00
cp ~/snp-pi-installation/snp00/* .
npm install
npm install socket.io
#https://www.axllent.org/docs/view/nodejs-service-with-systemd/#user-comments

sudo cp *.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable playbulb.service
sudo systemctl start playbulb.service
sudo systemctl status playbulb.service
sudo systemctl stop playbulb.service
sudo systemctl restart playbulb.service
sudo systemctl restart hciuart

cd ~
#Install the updater services
echo "Setup snpcode for git sync/updater"
mkdir /home/pi/gitupdater
cd  /home/pi/gitupdater/
git  clone https://github.com/markusvankempen/snpcode.git
cd  /home/pi/gitupdater/snpcode/
sudo cp  gitupdatersnp.service /etc/systemd/system/
sudo systemctl enable gitupdatersnp.service
sudo systemctl start gitupdatersnp.service
sudo systemctl status gitupdatersnp.service


echo "service update  script ! mvk-201800301-0900"
date > dowork1.log
echo "Copy pa_supplicant.conf /etc/wpa_supplicant/wpa_supplicant.conf"
sudo cp /home/pi/gitupdater/snpcode/wpa_supplicant.conf /etc/wpa_supplicant/wpa_supplicant.conf

echo "Updateing script";
echo "Backup old script pipbiotv2.js "
sudo mv /home/pi/playbulb/snp00/pipbiotv2.js /home/pi/playbulb/snp00/pipbiotv2.old.mvk-20180301
echo "cp pipbgpiov3.js  to pipbiotv2.js"
sudo cp /home/pi/gitupdater/snpcode/pipbgpiov3.js /home/pi/playbulb/snp00/pipbiotv2.js
echo "cp pipbgpiov3.js  to pipbgpiov3-is-in-pipbiotv2.js"
sudo cp /home/pi/gitupdater/snpcode/pipbgpiov3.js /home/pi/playbulb/snp00/pipbgpiov3-is-in-pipbiotv2.js             
echo "cp pipbgpiov3.js  to snp00/ pipbgpiov3.js"
sudo cp /home/pi/gitupdater/snpcode/pipbgpiov3.js /home/pi/playbulb/snp00/pipbgpiov3.js
echo "cp 7segmentv3.js  to snp00/ 7segmentv3.js"
sudo cp /home/pi/gitupdater/snpcode/7segmentv3.js /home/pi/playbulb/snp00/7segmentv3.js
echo "cp candle-service.js /home/pi/playbulb/lib/"          
sudo cp /home/pi/gitupdater/snpcode/candle-service.js /home/pi/playbulb/lib/
sudo npm install pigpio --prefix /home/pi/playbulb/snp00/

#time zone
#rm /etc/localtime
#ls -s /usr/share/zoneinfo/Canada/Eastern /etc/localtime

#keyboard
#cat  /etc/default/keyboard

echo "done - check with service are running maybe reboot"
sudo systemctl status gitupdatersnp.service
sudo systemctl status playbulb.service
echo "try to start manual like "
echo "cd ~/playbulb/snp00"
cd ~/playbulb/snp00
echo "sudo node pipbiotv2.js"


