// AUTHOR : MUHAMMET ICTEN BU PROGRAM MUHAMMET ICTEN TARAFINDAN GELISTIRILMISTIR.
(async function () {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  let index = 0;

  console.log("HOŞGELDİNİZ. SGK EVRAK POSTALAMA OTOMASYONU")
  console.log("PROGRAM MUHAMMET İÇTEN TARAFINDAN GELİŞTİRİLMİŞTİR.")
  
  while (true) {
    try {
      const inboxBtnId = `mainInboxForm\\:inboxDataTable\\:${index}\\:postaDetayiButton`;
      const inboxBtn = document.querySelector(`#${inboxBtnId}`);

      if (!inboxBtn) {
        console.log("Bitti");
        break;
      }

      console.log(`${index}. kayda tıklanıyor`);
      inboxBtn.click();

      await sleep(3000); //detay açılma bekleme

      const postalaBtn = document.querySelector("#mainPreviewForm\\:postalaButton_id");
      if (!postalaBtn) throw "Postala bulunamadı";

      postalaBtn.click();
      await sleep(2500); //onay ekranı

      const evetBtn = document.querySelector("#mainPreviewForm\\:evetButton_id");
      if (!evetBtn) throw "Evet bulunamadı";

      evetBtn.click();
      await sleep(4000); //işlem tamamlansın

      console.log(`${index}. kayıt tamamlandı`);
      index++;

    } catch (err) {
      console.warn(`${index}. kayıtta hata, geçiliyor`, err);
      index++;

      window.history.back();
      await sleep(3000); //geri dönüş
    }
  }
})();