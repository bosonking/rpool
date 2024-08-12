import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import validate from "bitcoin-address-validation";
import { Search } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl">Search your workers</CardTitle>
        <Search className="h-8 w-8 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex flex-col justify-center h-36 mt-6">
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
    </Card>
  );
};
