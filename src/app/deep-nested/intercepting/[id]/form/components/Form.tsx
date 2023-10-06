"use client";

import { PrefecturesType } from "@/app/deep-nested/api";

type Props = {
  prefectures: PrefecturesType;
};

export default function Form(props: Props) {
  function handleChangeName() {
    // 特に意味はないが強制的にclient componentにするためのコード
    console.log("name");
  }

  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="flex flex-col gap-2">
          Name
          <input type="text" onChange={handleChangeName} />
        </label>
      </div>
      <div>
        <label className="flex flex-col gap-2">
          lang
          <select>
            <option>en</option>
            <option>ja</option>
            <option>ch</option>
          </select>
        </label>
      </div>
      <div>
        <label className="flex flex-col gap-2">
          dynamic list
          <select>
            {props.prefectures &&
              props.prefectures.map((prefecture) => (
                <option key={prefecture.name}>{prefecture.name}</option>
              ))}
          </select>
        </label>
      </div>
      <div>
        <button type="submit" className="border bg-gray-50 px-3 py-2 text-sm">
          submit
        </button>
      </div>
    </form>
  );
}
