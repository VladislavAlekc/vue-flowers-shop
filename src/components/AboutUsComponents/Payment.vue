<template>
  <div>
    <article class="flex flex-col">
      <div class="flex justify-center mb-[18px]">
        <h1
          class="text-[#2b3039] mbs:text-[38px] text-[28px] font-serif leading-[120%] relative after:absolute after:h-[1px] after:w-[110%] after:bg-[#333] after:left-[-6px] after:bottom-0"
        >
          Оплата
        </h1>
      </div>
      <p class="flex justify-center text-[18px] leading-[120%] mobile:text-center">
        Вы можете оплатить ваш заказ одним из следующих способов:
      </p>
      <div class="pt-[34px]">
        <div class="text-[16px] flex font-serif justify-center leading-[120%]">
          Банковскими картами
        </div>
        <div class="flex flex-wrap justify-around pt-[4px]">
          <div
            class="flex hover:shadow-service transition flex-col items-center w-[194px] py-[14px] text-center"
          >
            <img class="w-[46px] h-[46px]" src="/pay/sberbank.svg" alt="img" />
            <div class="text-[#08a652] pt-[6px] text-[18px] font-bold leading-[120%]">
              СБЕР БАНК
            </div>
          </div>
          <div
            class="flex hover:shadow-[0px_21px_26px_-21px_rgba(173_153_70_/_48%)] transition flex-col items-center w-[194px] py-[14px] text-center"
          >
            <img class="w-[46px] h-[46px]" src="/pay/tinkoff.svg" alt="img" />
            <div class="pt-[6px] text-[18px] font-bold leading-[120%]">ТИНЬКОФФ</div>
          </div>
          <div
            class="flex hover:shadow-[0px_21px_26px_-21px_rgba(205_69_69_/_48%)] transition flex-col items-center w-[194px] py-[14px] text-center"
          >
            <img class="w-[46px] h-[46px]" src="/pay/alfa.svg" alt="img" />
            <div class="pt-[6px] text-[18px] font-bold leading-[120%]">Альфа-Банк</div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
