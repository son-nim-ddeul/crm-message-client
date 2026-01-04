"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const NewMessage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/new/persona");
  }, []);
  return null;
};

export default NewMessage;
