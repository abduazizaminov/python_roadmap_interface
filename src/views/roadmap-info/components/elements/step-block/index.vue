<template>
  <div>
    <div class="flex">
      <h5 class="text-[30px] w-full col-span-1 font-semibold">
        <slot name="header"></slot>
      </h5>
      <div class="relative w-full ml-10">
        <div class="step pb-10">
          <div class="ml-16 pt-[10px]">
            <div class="text-[20px] h-full text-black py-[34px] px-[30px] border-[3px] border-dashed border-customGreen rounded-3xl">
              <div class="leading-[130%]">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.step::before {
  content: '';
  width: 24px;
  height: 24px;
  border-radius: 40px;
  background-color: #00a2e8;
  position: absolute;
  display: block;
  top: 8px;
}

.step::after {
  content: '';
  width: 2px;
  background-color: #e0e0e0;
  position: absolute;
  display: block;
  bottom: 2px;
  top: 44px;
  left: 11px;
}
</style>