import Link from "next/link";

const AboutInfoPage = () => {
  return (
    <div>
      <h1 className="text-7xl">About Info Page</h1>
      <Link href="/" className="btn btn-accent uppercase">
        home page
      </Link>
    </div>
  );
};
export default AboutInfoPage;
