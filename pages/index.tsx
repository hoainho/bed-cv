import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Home } from "@/components/HomePage";

type Props = {
  results?: object;
};

const HomePage: NextPage = ({ results }: Props) => {
  const router = useRouter();

  return (
    <Home />
  );
};

export default HomePage;
