import Link from "next/link";

export default function NotFound() {
  return (
    <center>
      <div className="notfound">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <div className="btn">
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </center>
  );
}