import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl">Search your workers</CardTitle>
        <Search className="h-8 w-8 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex flex-col justify-center h-36 mt-6">
        <form className="flex flex-row gap-4">
          <Input />
          <Button>Search</Button>
        </form>
      </CardContent>
    </Card>
  );
};
