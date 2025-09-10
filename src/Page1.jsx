import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Page1() {
  const { data, isLoading } = useQuery({
    queryKey: ["slowData"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 10000));
      return { msg: "¡Datos recibidos!" };
    }
  });

  return (
    <div>
      <h1>Página 1</h1>
      {isLoading ? <p>Cargando...</p> : <p>{data.msg}</p>}
    </div>
  );
}
