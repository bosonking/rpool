import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import validate from "bitcoin-address-validation";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataCard } from "../common/DataCard";

export const SearchCard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const address = form.get("address") as string;
    if (validate(address)) {
      navigate(`/${address}`);
    } else {
      toast({ title: "Invalid bitcoin address", variant: "destructive" });
      inputRef.current?.focus();
      setError(true);
    }
  };

  return (
    <DataCard title="Search your workers" icon="Search">
      <CardContent className="my-2">
        <form className="flex flex-row gap-4" onSubmit={handleSearch}>
          <Input
            placeholder="Type your bitcoin address"
            name="address"
            ref={inputRef}
            className={cn({ "focus-visible:ring-red-700": error })}
          />
          <Button>Search</Button>
        </form>
      </CardContent>
    </DataCard>
  );
};
