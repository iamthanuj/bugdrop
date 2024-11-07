import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const BugActionBtn = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/bugs/new">New Bug</Link>
      </Button>
    </div>
  );
};

export default BugActionBtn;
