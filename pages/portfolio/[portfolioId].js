import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  const { portfolioId } = router.query;

  return (
    <div>
      <h1>Portfolio project page: {portfolioId}</h1>
    </div>
  );
}

export default PortfolioProjectPage;
