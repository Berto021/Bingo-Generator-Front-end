import { useMutation } from "@tanstack/react-query";
import { FormValues } from "./App";

const generateBingo = async ({ quantity, title }: FormValues) => {
  const res = await fetch(
    "https://bingo-generator-back-end.onrender.com/generate",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity, title }),
    }
  );

  return res.blob();
};

export const useGenerateBingoCards = () =>
  useMutation<Blob, Error, FormValues>({
    mutationFn: generateBingo,
    onSuccess: (blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "cartelas.zip";
      link.click();
    },
  });
