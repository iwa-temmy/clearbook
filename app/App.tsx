"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid place-items-center gap-6">
      <div className="w-32">
        <Image src="/next.svg" alt="Next Logo" width={128} height={32} />
      </div>
      <h1>Welcome to Clearbook</h1>
      <p className="text-lg">You clicked the button {count} times.</p>
      <Button onClick={() => setCount((count) => count + 1)}>Click Me</Button>
      <Button variant="secondary" onClick={() => setCount(0)}>
        Reset
      </Button>
    </div>
  );
}

export default App;
