export const dynamic = 'force-dynamic';

export default function Page() {
  return <h1>Hello, {process.env.HELLO}</h1>;
}
