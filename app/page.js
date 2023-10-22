import Header from "@/components/Header";
import Image from "next/image";

export default function RootLayoutHome() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header url={`/`} title={"로그인"} exchangeList={false} />
      <div className="flex-1 pt-[60px]">
        <div className=" flex justify-center items-center">
          <div className="text-5xl tracking-tighter text-secondary font-righteous mt-8">
            CRYPTO BANK
          </div>
        </div>
        <p className="text-center font-righteous text-2xl">Platform</p>
      </div>
      <form className="mb-[100px]">
        <div className="font-semibold mt-3 mb-1">아이디</div>
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          className="w-full py-2.5 px-2 rounded border-secondary border focus:border-secondary"
        />
        <div className="font-semibold mt-3 mb-1">비밀번호</div>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="w-full py-2.5 px-2 rounded border-secondary border focus:border-secondary"
        />
        <div>
          <p className="py-2 tracking-tighter">
            아이디 및 비밀번호를 확인하시기 바랍니다.
          </p>
        </div>
        <input
          type="submit"
          value={`로그인`}
          className="text-white bg-secondary rounded w-full py-2.5 px-2"
        />
        <p className="text-xs mt-10 text-center tracking-tighter font-normal">
          아이디 및 비밀번호 찾기는 관리자에게 문의 바랍니다.
        </p>
      </form>
    </div>
  );
}
