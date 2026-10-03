# تحديث تصحيح هوية المساعد عبر Termux

حمّل MR-ROBOT-reference-identity-fix.zip في Download. ثم نفّذ:

```sh
unzip ~/storage/downloads/MR-ROBOT-reference-identity-fix.zip -d ~/mrrobot-reference-fix
cd ~/mrrobot-reference-fix/mrrobot
npx vercel@latest link --project mrrobot-oman-store
npx vercel@latest deploy --prod
```

اختر نفس المشروع الموجود في الفريق الذي نجح معك سابقًا. لا تنشئ مشروعًا جديدًا. بعد ظهور Ready، افتح الدومين من نافذة خفية للتأكد من تحميل النسخة الجديدة.

تستخدم هذه النسخة صورة المرجع الأصلية بدل النموذج الثلاثي المختلف. تحافظ على التنحّي أثناء التمرير، لكن الصورة ثابتة ولا توجد حركة أطراف أو نار واقعية في هذا التصحيح.
