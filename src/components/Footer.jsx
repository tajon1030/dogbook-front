import React from 'react';

function Footer(props) {
  return (
    <div className="flex overflow-hidden flex-col mt-5 w-full bg-white">
      <div className="w-full border border-solid border-zinc-100 min-h-[1px]" />
      <div className="flex gap-5 justify-between self-center mt-2.5 w-full max-w-[304px]">
        <div className="flex flex-col text-xs text-black whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e0430350dba378b4fdc0fd315e26742e8b7df4faa33fe0de9b170abb088d368?placeholderIfAbsent=true&apiKey=b4819c5c0a1d4f4690dc881d72a920e5"
            className="object-contain w-5 aspect-square"
          />
          <div className="mt-1">중고책</div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a005bf9f110b9d840f194d24165118a38e11dbcb9491831e9c86f6774956c1fa?placeholderIfAbsent=true&apiKey=b4819c5c0a1d4f4690dc881d72a920e5"
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/204a1cadfbd481fec09c040d10366f7c20c4c233c481fe64e8e0c56dff87f9df?placeholderIfAbsent=true&apiKey=b4819c5c0a1d4f4690dc881d72a920e5"
              className="object-contain shrink-0 w-5 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between mt-1 text-xs whitespace-nowrap">
            <div className="text-black">전자책</div>
            <div className="ml-7 font-bold text-indigo-500">홈</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-10 self-start ml-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b1ff06067a6095383e4faaa335ca947e2e4f4eca4e605eaef55b0520edcdc55?placeholderIfAbsent=true&apiKey=b4819c5c0a1d4f4690dc881d72a920e5"
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47c48e6e273ac8626240b6a4d70d99abaea86902fa6e0c60a0f60beaff34d434?placeholderIfAbsent=true&apiKey=b4819c5c0a1d4f4690dc881d72a920e5"
              className="object-contain shrink-0 w-5 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between mt-1 text-xs text-black whitespace-nowrap">
            <div>커뮤니티</div>
            <div>채팅</div>
          </div>
        </div>
      </div>
      <div className="mt-2.5 w-full border border-solid border-zinc-100 min-h-[1px]" />
    </div>
  );
}

export default Footer;