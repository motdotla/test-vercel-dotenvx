export const dynamic = 'force-dynamic';

import * as dotenvx from "@dotenvx/dotenvx";

export default function Page() {
  return <h1>Hello, {dotenvx.get('HELLO')}</h1>;
}
