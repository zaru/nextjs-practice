"use client";

import { createContext } from "react";
import { PrefecturesType } from "@/app/deep-nested/api";

// 複数のデータを渡したくなることを考慮する
// Contextが増えると、Providerのネストが深くなってしまうため避けたい
export type FormSetupDataType = {
  prefectures: PrefecturesType;
  // keyA: string;
  // keyB: string;
};

export const FormSetupDataContext = createContext<FormSetupDataType>({
  prefectures: [],
});

export default function FormSetupDataProvider({
  prefectures,
  children,
}: {
  prefectures: PrefecturesType;
  children: React.ReactNode;
}) {
  const value = {
    prefectures,
  };
  return (
    <FormSetupDataContext.Provider value={value}>
      {children}
    </FormSetupDataContext.Provider>
  );
}
