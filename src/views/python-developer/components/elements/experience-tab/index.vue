<template>
  <div>
    <div class="border-[3px] border-customGreen w-[60px] leading-[38px] rounded-lg mb-4 bg-customGreen text-white text-[32px] font-medium text-center">
      <slot name="number"></slot>
    </div>
    <div>
      <p class="text-lg text-[#181818] leading-[22px]">
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>