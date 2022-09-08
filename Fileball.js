[mitm]

hostname= buy.itunes.apple.com api.revenuecat.com


[rewrite_local]

# Fileball 解锁高级版
^https?:\/\/api\.revenuecat\.com\/v\d\/(subscribers/\$RCAnonymousID\%(\w)+|receipts)$ url echo-response text/Json echo-response https://raw.githubusercontent.com/chwuta/quan/main/fileballv.js
